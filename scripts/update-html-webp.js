const fs = require('fs');
const path = require('path');

const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'webp-manifest.json'), 'utf-8'));
const HTML_DIR = path.join(__dirname, '..');
const HTML_FILES = ['index.html', 'about.html', 'services.html', 'products.html', 'project.html', 'contact.html'];

// Build lookup: relative src (from HTML) → manifest entry
// HTML uses "assets/img/xxx", manifest uses "xxx" (relative to assets/img/)
const lookup = {};
for (const [relPath, data] of Object.entries(manifest)) {
  const htmlSrc = 'assets/img/' + relPath;
  lookup[htmlSrc] = data;
}

function getOriginalWidth(src) {
  // Try to read manifest's srcset to determine original width
  const key = src.replace('assets/img/', '');
  const data = manifest[key];
  if (!data) return 0;
  if (data.srcset && data.srcset.length > 0) {
    // Has srcset → large image
    return Math.max(...data.srcset.map(s => s.width)) + 1;
  }
  return 0; // small image
}

function transformImgTag(imgTag) {
  // Extract src attribute
  const srcMatch = imgTag.match(/src="([^"]+)"/);
  if (!srcMatch) return imgTag;
  const src = srcMatch[1];

  // Skip SVGs, favicons, data URIs
  if (src.endsWith('.svg') || src.includes('favicons/') || src.startsWith('data:')) return imgTag;

  const data = lookup[src];
  if (!data || !data.webp) return imgTag;

  const webpSrc = 'assets/img/' + data.webp;

  // Extract existing attributes for the img tag
  const altMatch = imgTag.match(/alt="([^"]*)"/);
  const classMatch = imgTag.match(/class="([^"]*)"/);
  const styleMatch = imgTag.match(/style="([^"]*)"/);
  const loadingMatch = imgTag.match(/loading="([^"]*)"/);
  const widthMatch = imgTag.match(/width="([^"]*)"/);
  const heightMatch = imgTag.match(/height="([^"]*)"/);
  const roleMatch = imgTag.match(/role="([^"]*)"/);

  // Build srcset strings
  let webpSrcset = '';
  let jpgSrcset = '';
  let sizes = '';

  if (data.srcset && data.srcset.length > 0) {
    // Build WebP srcset
    const webpParts = data.srcset.map(s => `assets/img/${s.webp} ${s.width}w`);
    webpParts.push(`${webpSrc} ${getMaxWidth(src)}w`);
    webpSrcset = webpParts.join(', ');

    // Build original format srcset
    const jpgParts = data.srcset.map(s => `assets/img/${s.jpg} ${s.width}w`);
    jpgParts.push(`${src} ${getMaxWidth(src)}w`);
    jpgSrcset = jpgParts.join(', ');

    sizes = '(max-width: 640px) 640px, (max-width: 1024px) 1024px, 100vw';
  }

  // Build <picture> element
  let picture = '<picture>';

  // WebP source with srcset if available
  if (webpSrcset) {
    picture += `\n              <source type="image/webp" srcset="${webpSrcset}" sizes="${sizes}">`;
    picture += `\n              <source srcset="${jpgSrcset}" sizes="${sizes}">`;
  } else {
    picture += `\n              <source type="image/webp" srcset="${webpSrc}">`;
  }

  // Rebuild img tag with srcset for fallback
  let newImg = '<img';
  if (jpgSrcset) {
    newImg += ` src="${src}" srcset="${jpgSrcset}" sizes="${sizes}"`;
  } else {
    newImg += ` src="${src}"`;
  }
  if (altMatch) newImg += ` alt="${altMatch[1]}"`;
  if (classMatch) newImg += ` class="${classMatch[1]}"`;
  if (styleMatch) newImg += ` style="${styleMatch[1]}"`;
  if (loadingMatch) newImg += ` loading="${loadingMatch[1]}"`;
  if (widthMatch) newImg += ` width="${widthMatch[1]}"`;
  if (heightMatch) newImg += ` height="${heightMatch[1]}"`;
  if (roleMatch) newImg += ` role="${roleMatch[1]}"`;
  newImg += '>';

  picture += `\n              ${newImg}\n            </picture>`;

  return picture;
}

function getMaxWidth(src) {
  // Estimate original width from filename or use a default
  const key = src.replace('assets/img/', '');
  const data = manifest[key];
  if (!data || !data.srcset || data.srcset.length === 0) return 1024;
  // The original is larger than the biggest srcset width
  const maxSrcset = Math.max(...data.srcset.map(s => s.width));
  // Use common widths based on the srcset sizes present
  if (maxSrcset >= 1024) return 1920; // likely a very large image
  return maxSrcset * 2; // rough estimate
}

function transformDataBgSrc(html) {
  // Transform data-bg-src attributes to add data-bg-src-webp
  return html.replace(/data-bg-src="([^"]+)"/g, (match, src) => {
    if (src.endsWith('.svg') || src.includes('favicons/')) return match;
    const data = lookup[src];
    if (!data || !data.webp) return match;
    const webpSrc = 'assets/img/' + data.webp;
    return `data-bg-src="${src}" data-bg-src-webp="${webpSrc}"`;
  });
}

function processHtmlFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf-8');
  let imgCount = 0;
  let bgCount = 0;

  // Transform <img> tags (but NOT inside <link>, not favicons)
  html = html.replace(/<img\s[^>]*src="assets\/img\/[^"]*\.(jpe?g|png)"[^>]*>/gi, (match) => {
    // Skip favicons
    if (match.includes('favicons/')) return match;
    const result = transformImgTag(match);
    if (result !== match) imgCount++;
    return result;
  });

  // Transform data-bg-src
  html = html.replace(/data-bg-src="(assets\/img\/[^"]*\.(jpe?g|png))"/gi, (match, src) => {
    const data = lookup[src];
    if (!data || !data.webp) return match;
    bgCount++;
    return `data-bg-src="${src}" data-bg-src-webp="assets/img/${data.webp}"`;
  });

  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`  ${path.basename(filePath)}: ${imgCount} <picture> elements, ${bgCount} data-bg-src-webp`);
  return { imgCount, bgCount };
}

// Main
console.log('=== Updating HTML with <picture> and WebP ===\n');
let totalImg = 0;
let totalBg = 0;

for (const file of HTML_FILES) {
  const filePath = path.join(HTML_DIR, file);
  if (fs.existsSync(filePath)) {
    const { imgCount, bgCount } = processHtmlFile(filePath);
    totalImg += imgCount;
    totalBg += bgCount;
  }
}

console.log(`\n=== SUMMARY ===`);
console.log(`Total <picture> elements created: ${totalImg}`);
console.log(`Total data-bg-src-webp added: ${totalBg}`);
console.log('\nNote: Add WebP background loader JS to use data-bg-src-webp attributes.');
