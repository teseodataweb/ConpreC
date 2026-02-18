const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMG_DIR = path.join(__dirname, '..', 'assets', 'img');
const QUALITY = 80;
const SRCSET_WIDTHS = [640, 1024]; // generate these widths for large images
const LARGE_THRESHOLD = 800; // images wider than this get srcset sizes

// Directories to skip
const SKIP_DIRS = ['favicons'];

async function getAllImages(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.includes(entry.name)) {
        await getAllImages(fullPath, results);
      }
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

async function processImage(imgPath) {
  const dir = path.dirname(imgPath);
  const ext = path.extname(imgPath);
  const base = path.basename(imgPath, ext);
  const webpPath = path.join(dir, base + '.webp');
  const results = { original: imgPath, webp: null, srcset: [] };

  try {
    const metadata = await sharp(imgPath).metadata();
    const width = metadata.width;

    // Generate WebP version at original size
    await sharp(imgPath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    results.webp = webpPath;

    const originalSize = fs.statSync(imgPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = Math.round((1 - webpSize / originalSize) * 100);

    console.log(`  WebP: ${base}${ext} (${width}px) → ${base}.webp | ${(originalSize/1024).toFixed(0)}KB → ${(webpSize/1024).toFixed(0)}KB (${savings}% smaller)`);

    // Generate srcset sizes for large images
    if (width > LARGE_THRESHOLD) {
      for (const targetWidth of SRCSET_WIDTHS) {
        if (targetWidth < width) {
          // Resized JPG/PNG
          const resizedName = `${base}-${targetWidth}w${ext}`;
          const resizedPath = path.join(dir, resizedName);
          await sharp(imgPath)
            .resize(targetWidth)
            .toFile(resizedPath);

          // Resized WebP
          const resizedWebpName = `${base}-${targetWidth}w.webp`;
          const resizedWebpPath = path.join(dir, resizedWebpName);
          await sharp(imgPath)
            .resize(targetWidth)
            .webp({ quality: QUALITY })
            .toFile(resizedWebpPath);

          results.srcset.push({ width: targetWidth, jpg: resizedName, webp: resizedWebpName });
          console.log(`  srcset: ${resizedName} + ${resizedWebpName}`);
        }
      }
    }

    return results;
  } catch (err) {
    console.error(`  ERROR: ${imgPath}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('=== WebP Conversion + Responsive Image Generation ===\n');

  const images = await getAllImages(IMG_DIR);
  console.log(`Found ${images.length} images to process\n`);

  const manifest = {};
  let totalOriginal = 0;
  let totalWebp = 0;
  let webpCount = 0;
  let srcsetCount = 0;

  for (const imgPath of images) {
    const result = await processImage(imgPath);
    if (result && result.webp) {
      // Store relative path from assets/img/
      const relPath = path.relative(IMG_DIR, imgPath).replace(/\\/g, '/');
      const relDir = path.dirname(relPath);
      const ext = path.extname(relPath);
      const base = path.basename(relPath, ext);

      manifest[relPath] = {
        webp: (relDir === '.' ? '' : relDir + '/') + base + '.webp',
        srcset: result.srcset.map(s => ({
          width: s.width,
          jpg: (relDir === '.' ? '' : relDir + '/') + s.jpg,
          webp: (relDir === '.' ? '' : relDir + '/') + s.webp
        }))
      };

      totalOriginal += fs.statSync(imgPath).size;
      totalWebp += fs.statSync(result.webp).size;
      webpCount++;
      srcsetCount += result.srcset.length;
    }
  }

  // Write manifest for HTML updater
  const manifestPath = path.join(__dirname, 'webp-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\n=== SUMMARY ===`);
  console.log(`WebP conversions: ${webpCount}`);
  console.log(`srcset sizes generated: ${srcsetCount}`);
  console.log(`Original total: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`WebP total: ${(totalWebp / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Savings: ${Math.round((1 - totalWebp / totalOriginal) * 100)}%`);
  console.log(`Manifest: ${manifestPath}`);
}

main().catch(console.error);
