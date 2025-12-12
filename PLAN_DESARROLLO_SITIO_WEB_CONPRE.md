# PLAN DE DESARROLLO - SITIO WEB CONPRE CONCRETOS
## Basado en Plantilla Consik HTML

**Fecha:** 15 de Noviembre de 2025
**Plantilla Base:** Consik - Construction HTML5 Template
**URL Demo:** https://html.vecurosoft.com/consik/demo/index.html
**Ruta Local:** C:\Users\Administrator\Desktop\Conprev4\

---

## 1. ANÁLISIS DE PLANTILLA CONSIK

### 1.1 Recursos Disponibles

**Páginas HTML Existentes:**
- `index.html` (y versiones 2-5) - Homepage con hero slider
- `about.html` - Página de empresa
- `services.html` - Listado de servicios
- `service-details.html` - Detalle de servicio individual
- `project.html` - Portfolio/galería de proyectos
- `project-details.html` - Detalle de proyecto
- `contact.html` - Página de contacto con formulario
- `team.html` - Equipo de trabajo
- `blog.html` - Blog/noticias
- `faq.html` - Preguntas frecuentes
- `price.html` - Planes de precios

**Estructura de Assets:**
```
assets/
├── css/
│   ├── bootstrap.min.css
│   ├── fontawesome.min.css
│   ├── style.css (estilos principales)
│   └── [otros CSS]
├── js/
│   └── [scripts de la plantilla]
├── img/
│   ├── hero/ (imágenes de banner principal)
│   ├── about/ (sección nosotros)
│   ├── services/ (servicios)
│   ├── project/ (proyectos)
│   ├── team/ (equipo)
│   ├── contact/ (contacto)
│   ├── product/ (productos)
│   ├── brand/ (marcas/logos)
│   ├── bg/ (fondos)
│   └── logo.png, logo-black.png, logo-white.png
└── fonts/
```

**Características de la Plantilla:**
- Diseño moderno para industria de construcción
- Completamente responsivo (mobile-first)
- Hero slider con call-to-action
- Secciones pre-diseñadas para servicios, proyectos, equipo
- Formulario de contacto funcional
- Navegación sticky
- Animaciones suaves
- Iconos FontAwesome
- Google Maps integrado
- SEO-friendly HTML5 semántico

### 1.2 Mapeo Conpre → Plantilla

| Sección Requerida (Conpre) | Página Plantilla | Adaptación Necesaria |
|----------------------------|------------------|---------------------|
| **Inicio** | index.html | ✅ Personalizar contenido, cambiar textos de construcción a concreto |
| **Nosotros** | about.html | ✅ Incluir historia 10 años, infraestructura, valores |
| **Servicios** | services.html | ✅ 3 servicios: Tiro Directo, Bombeado, Lanzado + complementarios |
| **Productos** | services.html (duplicar) o shop.html | ⚠️ Crear nueva página para catálogo de concretos F'c, MR, morteros |
| **Proyectos** | project.html | ✅ Galería con casos: Arking, ICCE, otros |
| **Valor Agregado** | Sección en about.html o nueva página | ⚠️ Crear sección de diferenciadores (materiales, equipo, local) |
| **Contacto** | contact.html | ✅ Formulario + mapa Manzanillo + datos Conpre |

**Decisión de Estructura:**
1. **Inicio:** index.html (adaptado)
2. **Nosotros:** about.html (con sección de Valor Agregado integrada)
3. **Servicios:** services.html (tipos de entrega y servicios complementarios)
4. **Productos:** productos.html (nueva página basada en services.html)
5. **Proyectos:** project.html (galería de proyectos realizados)
6. **Contacto:** contact.html (formulario + datos)

---

## 2. CONTENIDOS POR PÁGINA

### 2.1 INICIO (index.html)

**Hero Section - Banner Principal:**

**Slide 1:**
- **Título:** "Concreto Premezclado de Calidad en Manzanillo"
- **Subtítulo:** "10 años de experiencia entregando soluciones en concreto para autoconstrucción, desarrollos residenciales y obra pública"
- **CTA Button:** "Solicitar Cotización" → link a contacto
- **Imagen de fondo:** Camión revolcador de Conpre o planta de producción

**Slide 2:**
- **Título:** "Bombas de Concreto de 28m y 36m de Alcance"
- **Subtítulo:** "Entregamos en el lugar exacto que necesitas con nuestro equipo especializado"
- **CTA Button:** "Conocer Servicios"
- **Imagen de fondo:** Bomba de concreto en acción

**Slide 3:**
- **Título:** "100% Empresa Manzanillense"
- **Subtítulo:** "Conocemos las necesidades de nuestra región. Materiales certificados y agregados de Río Armería"
- **CTA Button:** "Nosotros"
- **Imagen de fondo:** Vista de planta o equipo trabajando

**Sección: ¿Por qué Conpre? (Features)**
- **Feature 1:**
  - Icono: Camión
  - Título: "Flota Propia"
  - Texto: "6 camiones revolvedores y 2 bombas de concreto"

- **Feature 2:**
  - Icono: Calidad/Certificado
  - Título: "Materiales Certificados"
  - Texto: "Cemento CPC40, agregados de Río Armería, aditivos SIKA"

- **Feature 3:**
  - Icono: Reloj/Velocidad
  - Título: "Entrega Oportuna"
  - Texto: "Cobertura de ~30 km por planta, entregas rápidas"

- **Feature 4:**
  - Icono: Estrella/Experiencia
  - Título: "10 Años de Experiencia"
  - Texto: "Desde 2014 sirviendo a Manzanillo y Colima"

**Sección: Nuestros Servicios (Preview)**
- Tiro Directo
- Tiro Bombeado
- Tiro Lanzado
- Servicio de Bombeo
- (Link a página completa de servicios)

**Sección: Proyectos Destacados (Preview)**
- Galería de 3-4 proyectos recientes con fotos
- Link a portafolio completo

**Sección: Call to Action**
- "¿Necesitas concreto para tu proyecto?"
- "Contáctanos para una cotización personalizada"
- Botón: "Contactar Ahora"

### 2.2 NOSOTROS (about.html)

**Banner Interno:**
- Título: "Acerca de Conpre Concretos"
- Breadcrumb: Inicio > Nosotros

**Sección: Quiénes Somos**
- **Título:** "Conpre Concretos - 10 Años Construyendo Manzanillo"
- **Contenido:**
  - Fundada en Noviembre de 2014
  - Empresa 100% familiar manzanillense
  - Ubicación: Camino a Aguas Negras S/N, Manzanillo, Colima
  - Compromiso con la calidad y el servicio

**Sección: Nuestra Infraestructura**
- **2 Plantas de Producción**
  - Capacidad: ~30 m³/hora
  - Cobertura: ~30 km por planta

- **Flota de Entrega:**
  - 6 camiones revolvedores
  - 2 bombas de concreto (alcances de 28m y 36m)

- **Equipo Humano:**
  - 18 colaboradores especializados

**Sección: Nuestros Valores / Misión / Visión**
(A definir con Conpre - contenido pendiente)

**Posible estructura:**
- **Misión:** Proveer soluciones en concreto premezclado de la más alta calidad...
- **Visión:** Ser la empresa líder en Manzanillo...
- **Valores:** Calidad, Compromiso, Servicio, Honestidad...

**Sección: Valor Agregado / Diferenciadores**

**¿Por qué elegir Conpre?**

1. **Materiales de Calidad Certificada**
   - Cemento: CPC40 y CPC40 RS
   - Agregados: Río Armería (calidad regional superior)
   - Aditivos: Marca SIKA (líder mundial)
   - Cumplimiento normativo: NMX-C-414-ONNCCE-2004, NMX-C-155-ONNCCE-2004

2. **Empresa 100% Local**
   - Conocemos las necesidades de la región
   - Atención personalizada
   - Compromiso con el desarrollo de Manzanillo

3. **Equipo Especializado**
   - Bombas de concreto propias (no subcontratadas)
   - Operadores certificados
   - Capacidad de maniobra en espacios difíciles

4. **Experiencia Diversificada**
   - Autoconstrucción
   - Desarrollos residenciales
   - Obra pública (sector en crecimiento)

5. **Entregas Oportunas**
   - Logística eficiente
   - Flota propia y mantenida
   - Cobertura amplia en Manzanillo

**Sección: Certificaciones / Membresías**
(Si aplica - contenido pendiente)
- Ejemplo: Cámara de Comercio, AMCI, etc.

### 2.3 SERVICIOS (services.html)

**Banner Interno:**
- Título: "Nuestros Servicios"
- Breadcrumb: Inicio > Servicios

**Introducción:**
"En Conpre Concretos ofrecemos soluciones completas de entrega de concreto premezclado, adaptándonos a las necesidades específicas de cada proyecto."

**Servicios Principales:**

#### Servicio 1: Tiro Directo
- **Icono:** Camión revolcador
- **Descripción:** Entrega directa del concreto desde el camión revolcador al punto de vaciado. Ideal para proyectos con acceso vehicular directo.
- **Ventajas:**
  - Menor costo
  - Ideal para losas, cimientos, pisos
  - Rápida descarga
- **Aplicaciones:** Viviendas residenciales, estacionamientos, patios, banquetas

#### Servicio 2: Tiro Bombeado
- **Icono:** Bomba de concreto
- **Descripción:** Entrega mediante bombas de concreto de 28m y 36m de alcance. Solución para proyectos de difícil acceso o altura.
- **Ventajas:**
  - Alcance vertical y horizontal
  - Precisión en el vaciado
  - Menor tiempo de mano de obra
  - Bombas propias (no subcontratadas)
- **Aplicaciones:** Edificios de varios niveles, áreas de difícil acceso, proyectos en pendiente
- **Equipos disponibles:**
  - Bomba de 28 metros
  - Bomba de 36 metros

#### Servicio 3: Tiro Lanzado
- **Icono:** Lanzadera/spray
- **Descripción:** Aplicación especializada de concreto mediante lanzado neumático. Ideal para recubrimientos y estructuras especiales.
- **Ventajas:**
  - Aplicación en superficies irregulares
  - Adherencia superior
  - Versatilidad en aplicación
- **Aplicaciones:** Túneles, recubrimientos, refuerzos estructurales, piscinas

**Servicios Complementarios:**

#### Servicio de Bombeo Independiente
- Renta de bomba de concreto para trabajos con concreto de otras fuentes
- Incluye operador especializado

#### Renta de Vibrador
- Equipo para compactación adecuada del concreto
- Garantiza eliminación de burbujas de aire
- Mejora resistencia final

#### Tendido de Tubería
- Servicio especializado de colocación de tuberías previo al vaciado
- Coordinación con equipo del cliente

**Sección: Proceso de Trabajo**

**Paso 1: Contacto Inicial**
- El cliente nos contacta vía teléfono, WhatsApp o formulario web

**Paso 2: Cotización Personalizada**
- Evaluamos necesidades del proyecto
- Generamos cotización detallada
- Vigencia de la cotización

**Paso 3: Programación de Entrega**
- Confirmación de fecha y hora
- Coordinación logística
- Preparación del equipo

**Paso 4: Entrega en Sitio**
- Puntualidad
- Control de calidad en sitio
- Soporte técnico durante vaciado

**Paso 5: Seguimiento Post-Entrega**
- Verificación de satisfacción
- Soporte técnico si se requiere
- Documentación entregada

**Call to Action:**
"¿Necesitas asesoría sobre qué servicio se adapta mejor a tu proyecto?"
Botón: "Contáctanos"

### 2.4 PRODUCTOS (productos.html - NUEVA PÁGINA)

**Banner Interno:**
- Título: "Catálogo de Productos"
- Breadcrumb: Inicio > Productos

**Introducción:**
"Conpre Concretos ofrece una amplia gama de productos de concreto premezclado para satisfacer las exigencias de cualquier tipo de proyecto, desde autoconstrucción hasta infraestructura especializada."

**Categoría 1: Concreto por Resistencia a la Compresión (F'c)**

Tabla o grid de productos:

| Producto | Resistencia | Aplicaciones Típicas |
|----------|-------------|---------------------|
| **Concreto F'c 100 kg/cm²** | Baja resistencia | Rellenos, plantillas de nivelación, pisos no estructurales |
| **Concreto F'c 150 kg/cm²** | Resistencia moderada | Banquetas, guarniciones, firmes ligeros |
| **Concreto F'c 200 kg/cm²** | Resistencia estándar | Losas de vivienda, pisos residenciales, contrapisos |
| **Concreto F'c 250 kg/cm²** | Resistencia media-alta | Columnas, trabes residenciales, losas de azotea |
| **Concreto F'c 300 kg/cm²** | Alta resistencia | Estructuras de varios niveles, cimentaciones profundas |
| **Concreto F'c 350 kg/cm²** | Muy alta resistencia | Edificios de altura, puentes, estructuras sometidas a cargas elevadas |
| **Concreto F'c 400 kg/cm²** | Resistencia premium | Infraestructura crítica, proyectos especiales |
| **Concreto F'c 500 kg/cm²** | Resistencia ultra-alta | Proyectos de ingeniería especializada |

**Categoría 2: Concreto para Pavimentos (MR - Módulo de Ruptura)**

| Producto | Módulo de Ruptura | Aplicación |
|----------|-------------------|------------|
| **Concreto MR 35** | 35 kg/cm² | Pavimentos ligeros, accesos peatonales |
| **Concreto MR 38** | 38 kg/cm² | Pavimentos estándar, calles residenciales |
| **Concreto MR 40** | 40 kg/cm² | Pavimentos medianos, estacionamientos comerciales |
| **Concreto MR 42** | 42 kg/cm² | Pavimentos pesados, vías urbanas |
| **Concreto MR 45** | 45 kg/cm² | Pavimentos industriales, naves |
| **Concreto MR 48** | 48 kg/cm² | Pavimentos ultra-resistentes, zonas de alto tráfico |

**Categoría 3: Otros Productos**

**Mortero Fluido 80kg**
- Descripción: Mortero auto-nivelante de alta fluidez
- Aplicaciones: Rellenos, nivelaciones, reparaciones
- Ventajas: Fácil aplicación, sin necesidad de vibrado

**Categoría 4: Opciones de Personalización**

**Tiempos de Fraguado:**
- ✅ Resistencia Normal (28 días)
- ✅ Resistencia Rápida 14 días
- ✅ Resistencia Rápida 7 días
- ✅ Resistencia Rápida 3 días
- ✅ Resistencia Rápida 2 días
- ✅ Resistencia Rápida 1 día

**Aditivos y Modificadores:**
- ✅ Impermeabilizante Integral
- ✅ Fibra de Polipropileno
- ✅ Grava 3/8"
- ✅ Color Integral
- ✅ Revenimiento Controlado (14cm, 18cm)

**Sección: ¿Cómo elegir el concreto adecuado?**

**Para Vivienda Residencial:**
- Cimientos: F'c 200-250 kg/cm²
- Columnas y trabes: F'c 250-300 kg/cm²
- Losas: F'c 200-250 kg/cm²
- Pisos: F'c 150-200 kg/cm²

**Para Obra Comercial/Industrial:**
- Estructuras: F'c 300-400 kg/cm²
- Pisos industriales: MR 45-48
- Estacionamientos: MR 40-42

**Para Infraestructura:**
- Puentes: F'c 350-400 kg/cm²
- Carreteras: MR 40-48
- Obras hidráulicas: F'c 300-350 kg/cm² + impermeabilizante

**Call to Action:**
"¿No estás seguro qué producto necesitas?"
"Nuestro equipo técnico te asesora sin costo"
Botón: "Solicitar Asesoría"

**Nota Importante:**
"Los precios se determinan según el tipo de producto, volumen, ubicación del proyecto y especificaciones adicionales. Contáctanos para una cotización personalizada."

### 2.5 PROYECTOS (project.html)

**Banner Interno:**
- Título: "Nuestros Proyectos"
- Breadcrumb: Inicio > Proyectos

**Introducción:**
"A lo largo de 10 años, hemos participado en cientos de proyectos en Manzanillo y Colima, desde viviendas residenciales hasta infraestructura pública."

**Galería de Proyectos:**

**Proyecto 1: Arking Diseño y Construcción**
- **Ubicación:** Venustiano Carranza, Manzanillo
- **Tipo de Proyecto:** Construcción residencial
- **Producto Suministrado:** Concreto F'c 250 kg/cm², tiro directo
- **Volumen:** 7 m³
- **Fecha:** Noviembre 2025
- **Imagen:** [Foto del proyecto o camión en sitio]

**Proyecto 2: Club Deportivo CROM - ICCE Construcciones**
- **Ubicación:** Manzanillo, Colima
- **Tipo de Proyecto:** Instalaciones deportivas
- **Producto Suministrado:** Múltiples resistencias (F'c 200-350 kg/cm²) con tiro bombeado y resistencia rápida a 15 días
- **Características Especiales:** Uso de impermeabilizante integral, bombeo especializado
- **Fecha:** Septiembre 2025
- **Imagen:** [Foto del proyecto]

**Proyecto 3-6:** (Pendientes - requiere información de Conpre)
- Ejemplos sugeridos:
  - Desarrollo residencial [nombre]
  - Obra pública [carretera/puente/infraestructura]
  - Proyecto comercial [plaza/edificio]
  - Autoconstrucción destacada

**Sección: Tipos de Proyectos Atendidos**

**Autoconstrucción**
- Viviendas individuales
- Ampliaciones y remodelaciones
- Garages, cisternas, albercas

**Desarrollos Residenciales**
- Conjuntos habitacionales
- Fraccionamientos
- Edificios departamentales

**Obra Pública**
- Infraestructura vial
- Edificios gubernamentales
- Proyectos de servicios públicos

**Obra Comercial e Industrial**
- Naves industriales
- Centros comerciales
- Almacenes y bodegas

**Call to Action:**
"¿Tienes un proyecto en mente?"
Botón: "Solicitar Cotización"

### 2.6 CONTACTO (contact.html)

**Banner Interno:**
- Título: "Contáctanos"
- Breadcrumb: Inicio > Contacto

**Introducción:**
"Estamos listos para atender tu proyecto. Contáctanos por el medio de tu preferencia."

**Información de Contacto:**

**Oficinas:**
- **Dirección:** Camino a Aguas Negras S/N, Manzanillo, Colima
- **Teléfono:** [Pendiente - obtener de Conpre]
- **WhatsApp:** [Pendiente - obtener de Conpre]
- **Email:** [Pendiente - obtener de Conpre]
- **Horario:** Lunes a Viernes: 8:00 AM - 6:00 PM | Sábado: 8:00 AM - 2:00 PM

**Formulario de Contacto:**

Campos:
- Nombre completo *
- Email *
- Teléfono *
- Tipo de proyecto (dropdown):
  - Autoconstrucción
  - Desarrollo residencial
  - Obra pública
  - Obra comercial/industrial
  - Otro
- Ubicación del proyecto *
- Volumen estimado (m³)
- Mensaje / Detalles del proyecto *
- Botón: "Enviar Mensaje"

**Nota importante:**
"Este formulario NO genera cotizaciones automáticas. Nuestro equipo se pondrá en contacto contigo dentro de 24 horas hábiles para brindarte una cotización personalizada."

**Mapa de Google:**
- Integración de Google Maps con ubicación exacta:
  - Camino a Aguas Negras S/N, Manzanillo, Colima
  - [Coordenadas exactas pendientes]

**Sección: Cobertura**
"Atendemos proyectos en un radio de ~30 km desde nuestras plantas en Manzanillo."
- Mapa visual de cobertura (opcional)

**Call to Action Secundario:**
"¿Prefieres llamar directamente?"
- Botón con ícono de teléfono: "Llamar Ahora"
- Botón con ícono de WhatsApp: "WhatsApp"

---

## 3. ELEMENTOS DE NAVEGACIÓN

### 3.1 Header - Menú Principal

**Top Bar (Barra Superior):**
- Izquierda: "10 años de experiencia en concreto premezclado"
- Derecha:
  - 📍 Camino a Aguas Negras S/N, Manzanillo, Colima
  - ✉️ info@conpreconcretos.com (o similar - pendiente)

**Logo:**
- Logo de Conpre (verde, dorado, azul, rojo según branding)
- Versión blanca para header con fondo oscuro
- Versión a color para footer

**Menú de Navegación:**
- Inicio
- Nosotros
- Servicios
- Productos
- Proyectos
- Contacto

**Botón CTA en Header:**
"Cotizar Proyecto" → Link a formulario de contacto

### 3.2 Footer

**Columna 1: Sobre Conpre**
- Logo Conpre
- Breve descripción: "Conpre Concretos es una empresa 100% manzanillense con 10 años de experiencia en la producción y entrega de concreto premezclado de calidad certificada."
- Redes sociales:
  - Facebook (si existe)
  - Instagram (si existe)
  - LinkedIn (opcional)

**Columna 2: Enlaces Rápidos**
- Inicio
- Nosotros
- Servicios
- Productos
- Proyectos
- Contacto

**Columna 3: Nuestros Productos**
- Concreto F'c
- Concreto MR
- Mortero Fluido
- Servicio de Bombeo

**Columna 4: Contacto**
- 📍 Camino a Aguas Negras S/N, Manzanillo, Colima
- 📞 [Teléfono - pendiente]
- 📱 [WhatsApp - pendiente]
- ✉️ [Email - pendiente]

**Copyright:**
"© 2025 Conpre Concretos. Todos los derechos reservados. | Desarrollado por Teseo Data Lab"

---

## 4. PERSONALIZACIÓN TÉCNICA

### 4.1 Reemplazo de Logos

**Archivos a Reemplazar:**
```
assets/img/logo.png → Logo Conpre (versión normal)
assets/img/logo-white.png → Logo Conpre (versión blanca para header)
assets/img/logo-black.png → Logo Conpre (versión oscura para footer)
```

**Especificaciones:**
- Formato: PNG con transparencia
- Tamaño recomendado: 200-250px de ancho, alto proporcional
- Versiones necesarias: color, blanco, negro/oscuro

**Fuente:**
- Logo disponible en: `Logo_CONCRETOS CONPRE.pdf`
- Requiere extracción y conversión a PNG

### 4.2 Paleta de Colores

**Colores Actuales de la Plantilla:**
- Primario: #FC6601 (naranja)
- Secundario: Negro/gris

**Colores de Conpre (según logo):**
- Verde
- Dorado/Amarillo
- Azul
- Rojo

**Decisión de Personalización:**

**Opción A - Adaptación Mínima:**
- Mantener estructura de colores de la plantilla
- Cambiar naranja (#FC6601) por color principal de Conpre (verde o azul)
- Archivo a modificar: `assets/css/style.css`

**Opción B - Personalización Completa:**
- Redefinir paleta completa basada en branding de Conpre
- Requiere búsqueda/reemplazo global en CSS

**Recomendación:** Opción A (más rápido, resultado profesional)

**Variables CSS a modificar:**
```css
/* En style.css - buscar y reemplazar */
#FC6601 → #[COLOR_PRIMARIO_CONPRE]
/* Ejemplo: #2E7D32 (verde) o #1976D2 (azul) */
```

### 4.3 SEO - Optimización On-Page

**Meta Tags - Página por Página:**

**index.html:**
```html
<title>Conpre Concretos - Concreto Premezclado en Manzanillo, Colima</title>
<meta name="description" content="Conpre Concretos: 10 años de experiencia en producción y entrega de concreto premezclado en Manzanillo. Flota propia, bombas de concreto, materiales certificados. Cotiza tu proyecto.">
<meta name="keywords" content="concreto premezclado Manzanillo, concreto Colima, venta de concreto, bomba de concreto, concreto f'c, concreto MR, Conpre">
```

**about.html:**
```html
<title>Nosotros - Conpre Concretos | 10 Años de Experiencia</title>
<meta name="description" content="Conpre Concretos es una empresa 100% manzanillense con 10 años sirviendo a la región. 2 plantas, 6 camiones, bombas de concreto propias. Calidad certificada.">
<meta name="keywords" content="conpre concretos, empresa de concreto Manzanillo, proveedor concreto Colima">
```

**services.html:**
```html
<title>Servicios - Conpre Concretos | Tiro Directo, Bombeado y Lanzado</title>
<meta name="description" content="Servicios de entrega de concreto en Manzanillo: tiro directo, bombeado (28m y 36m de alcance) y lanzado. Bombas propias, entregas oportunas.">
<meta name="keywords" content="tiro bombeado Manzanillo, bomba de concreto Colima, servicio de concreto, entrega de concreto">
```

**productos.html:**
```html
<title>Productos - Catálogo de Concreto F'c y MR | Conpre Concretos</title>
<meta name="description" content="Catálogo completo de concreto premezclado: F'c 100-500 kg/cm², MR 35-48, morteros. Resistencia rápida, impermeabilizante, aditivos SIKA. Manzanillo, Colima.">
<meta name="keywords" content="concreto f'c 250, concreto mr 40, mortero fluido, concreto resistencia rápida, precio concreto Manzanillo">
```

**project.html:**
```html
<title>Proyectos - Conpre Concretos | Portafolio de Obras Realizadas</title>
<meta name="description" content="Portafolio de proyectos: autoconstrucción, desarrollos residenciales, obra pública en Manzanillo y Colima. Más de 10 años de experiencia.">
<meta name="keywords" content="proyectos de concreto Manzanillo, obras realizadas, construcción Colima">
```

**contact.html:**
```html
<title>Contacto - Conpre Concretos | Solicita tu Cotización</title>
<meta name="description" content="Contacta a Conpre Concretos en Manzanillo. Camino a Aguas Negras S/N. Solicita cotización para tu proyecto. Atención personalizada.">
<meta name="keywords" content="cotizar concreto Manzanillo, contacto Conpre, proveedor concreto Colima">
```

**Schema Markup - LocalBusiness (en todas las páginas):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Conpre Concretos",
  "description": "Empresa de producción y entrega de concreto premezclado en Manzanillo, Colima",
  "url": "https://www.conpreconcretos.com",
  "telephone": "[PENDIENTE]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Camino a Aguas Negras S/N",
    "addressLocality": "Manzanillo",
    "addressRegion": "Colima",
    "postalCode": "[PENDIENTE]",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[PENDIENTE]",
    "longitude": "[PENDIENTE]"
  },
  "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
  "foundingDate": "2014-11",
  "image": "https://www.conpreconcretos.com/assets/img/logo.png"
}
</script>
```

### 4.4 Google Analytics & Search Console

**Configuración Necesaria:**
1. Crear cuenta de Google Analytics
2. Obtener ID de seguimiento (G-XXXXXXXXXX)
3. Insertar código de tracking en todas las páginas (antes de `</head>`)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

4. Configurar Google Search Console
5. Generar y subir sitemap.xml

### 4.5 Favicon

**Generar favicons de Conpre:**
- Usar logo o ícono de marca
- Generar todos los tamaños necesarios:
  - favicon.ico (16x16, 32x32)
  - apple-touch-icon (180x180)
  - android-icon (192x192)
  - etc.

**Herramienta recomendada:** https://realfavicongenerator.net/

**Reemplazar archivos en:** `assets/img/favicons/`

---

## 5. IMÁGENES REQUERIDAS

### 5.1 Checklist de Fotografías Necesarias

**Hero/Banner Principal (3 imágenes):**
- [ ] Camión revolcador de Conpre en acción (alta calidad)
- [ ] Bomba de concreto entregando en obra
- [ ] Vista de planta de producción o equipo trabajando

**Sección Nosotros:**
- [ ] Foto de las 2 plantas de producción
- [ ] Flota completa (6 camiones)
- [ ] Bombas de concreto (28m y 36m)
- [ ] Equipo de trabajo (opcional, foto grupal)

**Sección Servicios:**
- [ ] Tiro directo: camión descargando concreto
- [ ] Tiro bombeado: bomba en acción con alcance visible
- [ ] Tiro lanzado: aplicación especializada
- [ ] Detalle de servicio de vibrado

**Sección Productos:**
- [ ] Concreto siendo mezclado
- [ ] Diferentes aplicaciones (losa, columnas, piso)
- [ ] Materiales: cemento, agregados, aditivos SIKA
- [ ] Pruebas de resistencia (opcional)

**Sección Proyectos:**
- [ ] Proyecto Arking (fotos del sitio o camión en entrega)
- [ ] Club Deportivo CROM (obra terminada o en proceso)
- [ ] 4-6 proyectos adicionales con fotos de calidad

**Otras:**
- [ ] Mapa de ubicación/cobertura
- [ ] Certificaciones (si aplica)

**Especificaciones Técnicas:**
- Resolución mínima: 1920x1080 px (landscape), 1080x1920 (portrait)
- Formato: JPG (comprimido para web, <500KB por imagen)
- Calidad: Profesional, buena iluminación, enfoque nítido

**Alternativas si no hay fotos:**
- Usar fotos de stock relacionadas con concreto/construcción
- Sesión fotográfica profesional (costo adicional ~$3,000-5,000 MXN)

### 5.2 Optimización de Imágenes

**Proceso:**
1. Recibir imágenes originales de Conpre
2. Redimensionar a tamaños web-optimized
3. Comprimir sin pérdida significativa de calidad (TinyPNG, ImageOptim)
4. Renombrar con nombres descriptivos SEO-friendly:
   - ❌ IMG_1234.jpg
   - ✅ conpre-camion-concreto-manzanillo.jpg

**Estructura de carpetas:**
```
assets/img/
├── hero/
│   ├── conpre-hero-camion.jpg
│   ├── conpre-hero-bomba.jpg
│   └── conpre-hero-planta.jpg
├── about/
│   ├── conpre-planta-1.jpg
│   ├── conpre-flota.jpg
│   └── conpre-bombas.jpg
├── services/
│   ├── conpre-tiro-directo.jpg
│   ├── conpre-tiro-bombeado.jpg
│   └── conpre-tiro-lanzado.jpg
├── products/
│   ├── concreto-premezclado.jpg
│   └── concreto-aplicaciones.jpg
└── projects/
    ├── proyecto-arking.jpg
    ├── proyecto-crom.jpg
    └── [otros proyectos]
```

---

## 6. TIMELINE DE DESARROLLO

### Semana 1-2: Preparación y Personalización Inicial

**Días 1-3:**
- [x] Análisis de plantilla (completado)
- [x] Mapeo de contenidos (completado)
- [ ] Solicitar logo de Conpre en formato editable (PNG con transparencia)
- [ ] Solicitar fotografías de alta calidad
- [ ] Definir paleta de colores exacta
- [ ] Configurar dominio y hosting (si aún no está listo)

**Días 4-7:**
- [ ] Extraer logo de PDF y convertir a PNG (versiones: color, blanco, negro)
- [ ] Reemplazar logos en plantilla
- [ ] Modificar paleta de colores en CSS
- [ ] Personalizar index.html:
  - Hero section (3 slides con contenido de Conpre)
  - Sección features
  - Preview de servicios
  - Preview de proyectos
  - CTA
- [ ] Optimizar meta tags SEO de index.html

**Días 8-10:**
- [ ] Personalizar about.html:
  - Banner interno
  - Quiénes somos
  - Infraestructura
  - Valores/Misión/Visión
  - Valor agregado
- [ ] Optimizar SEO about.html

**Días 11-14:**
- [ ] Personalizar services.html:
  - 3 servicios principales (Directo, Bombeado, Lanzado)
  - Servicios complementarios
  - Proceso de trabajo
- [ ] Optimizar SEO services.html

### Semana 3: Desarrollo de Páginas Restantes

**Días 15-18:**
- [ ] Crear productos.html (duplicar services.html como base):
  - Catálogo de concretos F'c (8 productos)
  - Catálogo de concretos MR (6 productos)
  - Mortero fluido
  - Opciones de personalización (tiempos, aditivos)
  - Guía de selección
- [ ] Optimizar SEO productos.html

**Días 19-21:**
- [ ] Personalizar project.html:
  - Galería de proyectos (mínimo 4-6 proyectos)
  - Proyecto Arking
  - Proyecto CROM
  - Otros proyectos (con info de Conpre)
  - Categorías de proyectos atendidos
- [ ] Optimizar SEO project.html

### Semana 4: Contacto y Optimizaciones Finales

**Días 22-24:**
- [ ] Personalizar contact.html:
  - Información de contacto completa
  - Formulario funcional
  - Integración de Google Maps (coordenadas exactas)
  - Sección de cobertura
- [ ] Configurar backend del formulario (PHP mail o servicio de email)
- [ ] Optimizar SEO contact.html

**Días 25-28:**
- [ ] Actualizar header y footer en todas las páginas:
  - Menú de navegación correcto
  - Top bar con info de Conpre
  - Footer con 4 columnas
  - Links funcionales
- [ ] Implementar Schema Markup en todas las páginas
- [ ] Configurar Google Analytics
- [ ] Generar y configurar favicons
- [ ] Crear sitemap.xml
- [ ] Crear robots.txt

### Semana 5: Testing y Ajustes

**Días 29-31:**
- [ ] Testing de responsividad:
  - Desktop (1920px, 1366px, 1024px)
  - Tablet (768px, 1024px)
  - Mobile (375px, 414px, 360px)
- [ ] Testing de navegación (todos los links funcionando)
- [ ] Testing de formulario de contacto
- [ ] Validación de HTML (W3C Validator)
- [ ] Testing de velocidad (PageSpeed Insights)

**Días 32-35:**
- [ ] Corrección de bugs encontrados
- [ ] Optimización de imágenes (si es necesario)
- [ ] Ajustes de SEO (si es necesario)
- [ ] Validación final con cliente (presentación a Conpre)

### Semana 6: Lanzamiento

**Días 36-38:**
- [ ] Migración a servidor de producción
- [ ] Configuración de dominio (conpreconcretos.com o similar)
- [ ] Configuración de SSL (HTTPS)
- [ ] Pruebas en servidor de producción
- [ ] Configuración de Google Search Console
- [ ] Envío de sitemap a Google

**Días 39-42:**
- [ ] Monitoreo post-lanzamiento
- [ ] Ajustes menores si se requieren
- [ ] Capacitación a Conpre (si aplica)
- [ ] Entrega de documentación

**Total: 6 semanas (42 días)**

---

## 7. REQUISITOS TÉCNICOS DE HOSTING

### 7.1 Especificaciones Mínimas

**Servidor:**
- PHP 7.4 o superior (para formulario de contacto)
- MySQL (si se implementa sistema de gestión de contenidos en futuro)
- Espacio en disco: 2GB mínimo (para sitio + imágenes)
- Ancho de banda: 20GB/mes mínimo

**Recomendación confirmada:**
- **HostGator México - Plan Emprendedor**
- Costo: ~$551.25 MXN/año
- Incluye: SSL gratis, cpanel, email, suficiente para sitio institucional

**Dominio:**
- Opciones sugeridas:
  - conpreconcretos.com
  - conpre.mx
  - conpremanzanillo.com
- Costo aproximado: $200-400 MXN/año

### 7.2 Configuración Necesaria

**SSL Certificate:**
- Let's Encrypt (gratis) o certificado del hosting
- Forzar HTTPS en todas las páginas

**Email Corporativo:**
- info@conpreconcretos.com
- ventas@conpreconcretos.com
- cotizaciones@conpreconcretos.com

**Formulario de Contacto:**
- Configurar PHP mail o SMTP
- Email de destino: info@conpreconcretos.com
- Notificaciones automáticas al cliente

**Backups:**
- Configurar backups automáticos semanales
- Almacenar copia local

---

## 8. CHECKLIST DE ENTREGA

### 8.1 Archivos Finales

- [ ] Sitio web completo (6 páginas HTML funcionales)
- [ ] Assets optimizados (CSS, JS, imágenes)
- [ ] Favicons configurados
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] Código fuente organizado y comentado

### 8.2 Configuraciones

- [ ] Dominio apuntando correctamente
- [ ] Hosting configurado
- [ ] SSL activo (HTTPS)
- [ ] Formulario de contacto funcional
- [ ] Google Analytics configurado
- [ ] Google Search Console configurado
- [ ] Google Maps integrado
- [ ] Emails corporativos configurados

### 8.3 SEO

- [ ] Meta tags optimizados en todas las páginas
- [ ] Schema markup implementado
- [ ] Sitemap enviado a Google
- [ ] Keywords investigadas e implementadas
- [ ] URLs amigables
- [ ] Alt tags en todas las imágenes
- [ ] Velocidad de carga optimizada (>80 en PageSpeed)

### 8.4 Testing

- [ ] Navegación funcional en todas las páginas
- [ ] Responsividad verificada (desktop, tablet, mobile)
- [ ] Formularios probados y funcionando
- [ ] Links internos y externos verificados
- [ ] Compatibilidad cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Validación HTML sin errores críticos

### 8.5 Documentación

- [ ] Manual de usuario (cómo actualizar contenidos básicos)
- [ ] Credenciales de acceso (hosting, analytics, search console)
- [ ] Guía de mantenimiento
- [ ] Contactos de soporte

---

## 9. CONTINGENCIAS Y ALTERNATIVAS

### 9.1 Si NO hay fotografías de calidad disponibles

**Plan B:**
- Usar imágenes de stock relacionadas con concreto/construcción
- Fuentes recomendadas:
  - Unsplash (gratis)
  - Pexels (gratis)
  - Freepik (requiere atribución o licencia)

**Keywords de búsqueda:**
- "concrete mixer truck"
- "concrete pump"
- "construction site concrete"
- "ready mix concrete"
- "concrete plant"

**Limitación:** Menor autenticidad, no muestra equipos reales de Conpre

**Plan C (Ideal):**
- Contratar sesión fotográfica profesional
- Costo estimado: $3,000-5,000 MXN
- Beneficio: Imágenes únicas, branding fuerte, autenticidad

### 9.2 Si NO hay contenidos de texto completos

**Plan B:**
- Redactar textos genéricos profesionales basados en información disponible
- Usar información de documentos ya analizados:
  - Presentación Comercial CONPRE.pdf
  - Minutas de reunión
  - PRODUCTOS.xlsx

**Limitación:** Puede carecer de voz/tono específico de Conpre

**Plan C (Recomendado):**
- Entrevista de 2-3 horas con Conpre para extraer:
  - Historia y valores
  - Diferenciadores
  - Casos de éxito
  - Testimonios

### 9.3 Si el timeline de 6 semanas es insuficiente

**Plan de Lanzamiento en Fases:**

**Fase 1 - MVP (4 semanas):**
- Inicio (index.html)
- Nosotros (about.html)
- Servicios (services.html)
- Contacto (contact.html)
- **LANZAMIENTO**

**Fase 2 - Expansión (2 semanas adicionales):**
- Productos (productos.html)
- Proyectos (project.html)
- Blog (opcional, futuro)

**Ventaja:** Cumple deadline de 8 semanas del proyecto general (cotizador + sitio web)

---

## 10. PRÓXIMOS PASOS INMEDIATOS

### Acción 1: Validación de Contenidos (URGENTE - Esta Semana)

**Responsable:** Conpre + Teseo (coordinación)

**Pendientes críticos:**
1. **Logo en formato PNG**
   - Extraer de `Logo_CONCRETOS CONPRE.pdf`
   - Generar versiones: color, blanco, negro
   - Entregar a equipo de desarrollo

2. **Fotografías**
   - Listar qué fotos tiene disponibles Conpre
   - Definir si se requiere sesión fotográfica o usar stock
   - Deadline: Semana 2

3. **Textos Institucionales**
   - Misión, Visión, Valores
   - Historia de la empresa (más allá de "fundada en 2014")
   - Diferenciadores únicos
   - Deadline: Semana 2

4. **Datos de Contacto Completos**
   - Teléfono fijo
   - WhatsApp business
   - Email corporativo
   - Coordenadas exactas para Google Maps
   - Horarios de atención
   - Deadline: Semana 3

5. **Proyectos Destacados**
   - 4-6 proyectos con:
     - Nombre del proyecto/cliente
     - Ubicación
     - Tipo de concreto suministrado
     - Volumen
     - Foto (si está disponible)
     - Permiso de publicación
   - Deadline: Semana 3

### Acción 2: Configuración de Infraestructura (Semana 1-2)

**Responsable:** Teseo (backend) + Conpre (decisión)

1. **Decisión de Dominio**
   - Propuestas: conpreconcretos.com, conpre.mx, conpremanzanillo.com
   - Verificar disponibilidad
   - Comprar dominio

2. **Contratación de Hosting**
   - Confirmar HostGator Plan Emprendedor (~$551.25/año)
   - O alternativa equivalente
   - Configurar accesos

3. **Configuración de Emails**
   - info@[dominio]
   - ventas@[dominio]
   - cotizaciones@[dominio]

### Acción 3: Inicio de Desarrollo (Semana 2)

**Responsable:** Aurelia Sánchez (Frontend Teseo)

1. **Setup inicial**
   - Clonar plantilla Consik
   - Configurar entorno de desarrollo local
   - Crear repositorio Git (control de versiones)

2. **Personalización básica**
   - Reemplazar logos
   - Ajustar colores
   - Modificar meta tags básicos

3. **Desarrollo de index.html**
   - Hero section con contenido de Conpre
   - Secciones principales

### Acción 4: Coordinación con Desarrollo del Cotizador

**Importante:** El sitio web y el cotizador son proyectos paralelos pero independientes

**Consideraciones:**
- El sitio web NO incluye cotizador público (confidencialidad)
- El sitio web SÍ puede tener link a "solicitar cotización" (formulario de contacto)
- En futuro, se podría integrar acceso al cotizador para usuarios autorizados (login)

**Timeline coordinado:**
- Semanas 1-4: Aurelia trabaja en cotizador (80% tiempo)
- Semanas 5-6: Aurelia trabaja en sitio web (80% tiempo)
- Semana 7: Testing de ambos
- Semana 8: Lanzamiento de ambos

---

## RESUMEN EJECUTIVO

**Factibilidad:** ✅ VIABLE

**Plantilla:** Consik es adecuada para Conpre (industria construcción/concreto)

**Timeline:** 6 semanas (paralelo a desarrollo de cotizador)

**Riesgos Principales:**
1. Falta de contenidos (fotos, textos) de Conpre → Mitigable con stock y redacción
2. Timeline ajustado para Aurelia → Mitigable con priorización o recurso adicional

**Dependencias Críticas:**
- Logo de Conpre (PNG) - URGENTE
- Fotografías de calidad o decisión de usar stock - SEMANA 2
- Datos de contacto completos - SEMANA 3
- Contenidos de texto (misión, visión, proyectos) - SEMANA 2-3

**Inversión Adicional Potencial:**
- Sesión fotográfica profesional: $3,000-5,000 MXN (opcional pero recomendado)
- Redacción de contenidos (si Conpre no provee textos): Ya incluido en el servicio

**Resultado Esperado:**
Sitio web profesional, responsivo, optimizado para SEO, con 6 páginas funcionales que posicionan a Conpre como proveedor líder de concreto en Manzanillo.

---

**DOCUMENTO GENERADO POR:** Consultoría de Desarrollo de Sitio Web
**FECHA:** 15 de Noviembre de 2025
**VERSIÓN:** 1.0
**ESTADO:** Plan de Trabajo Aprobado - Pendiente Inicio de Ejecución
