# Sistema de Desarrollo UX/UI

# Plan de Posicionamiento Digital: Ecosistema Conpre Concretos

## Objetivo General

Evolucionar la marca Conpre Concretos de "Proveedor local de concreto" a "Aliado estratégico de construcción en Manzanillo", centralizando sus servicios, generando confianza digital y estableciendo un sistema de captación de leads que convierta visitantes en clientes.

---

## FASE 1: Estrategia y UX Research (El Cimiento)

*El objetivo es entender a la audiencia y definir el camino para diferenciarse de CEMEX, FOLSIC y ADCC.*

### Tarea 1.1: Benchmarking Competitivo
Análisis de sitios de referentes locales y nacionales:
- **CEMEX México** (líder nacional, proceso digital completo)
- **Holcim México** (innovación en productos)
- **Concreteras regionales** (competencia directa: FOLSIC, ADCC)
- **Proveedores locales exitosos** (mejores prácticas de atención)

**Aspectos a evaluar:**
- Propuesta de valor visible
- Proceso de cotización (público vs. privado)
- Catálogo de productos y claridad técnica
- Elementos de confianza (certificaciones, testimonios, proyectos)
- Velocidad de respuesta y canales de contacto

### Tarea 1.2: Definición de User Personas
Crear 3-4 perfiles de usuario basados en la segmentación de Conpre:

| Persona | Descripción | Necesidad Principal | Canal Preferido |
|---------|-------------|---------------------|-----------------|
| **Don Miguel** (Autoconstructor) | Familia construyendo su vivienda, primera vez comprando concreto | Asesoría técnica, precio justo, confianza | WhatsApp, visita física |
| **Arq. Fernanda** (Constructora/Desarrolladora) | Profesional con múltiples proyectos, busca proveedor confiable | Entregas puntuales, calidad consistente, volumen | Email, teléfono directo |
| **Ing. Ramírez** (Obra Pública) | Responsable de licitaciones y proyectos gubernamentales | Documentación, cumplimiento normativo, garantías | Cotización formal, reuniones |
| **Carlos** (Contratista Independiente) | Maestro de obra con proyectos pequeños-medianos | Flexibilidad, precios competitivos, servicio rápido | WhatsApp, llamada |

### Tarea 1.3: Arquitectura de Información
**Sitemap Final:**

```
conpreconcretos.com/
├── index.html (Inicio)
│   ├── Hero + CTA principal
│   ├── Servicios destacados
│   ├── Por qué elegirnos
│   ├── Proyectos recientes
│   └── CTA secundario
│
├── about.html (Nosotros)
│   ├── Historia (Desde 2014)
│   ├── Misión, Visión, Valores
│   ├── Infraestructura (2 plantas, 6 camiones, 2 bombas)
│   ├── Equipo directivo
│   └── Diferenciadores
│
├── services.html (Servicios)
│   ├── Tiro Directo
│   ├── Tiro Bombeado (28m y 36m)
│   ├── Concreto para Tiro Lanzado
│   └── Servicios Complementarios
│
├── products.html (Productos)
│   ├── Concreto F'c (100-500 kg/cm²)
│   ├── Concreto MR (35-48)
│   ├── Mortero Fluido
│   └── Opciones (resistencia rápida, impermeabilizante, etc.)
│
├── project.html (Proyectos)
│   ├── Estadísticas (11+ años, 500+ proyectos)
│   ├── Tipos de proyectos
│   ├── Galería de obras
│   └── Testimonios
│
└── contact.html (Contacto)
    ├── Información de contacto
    ├── Formulario de cotización
    ├── Mapa de ubicación
    └── Área de cobertura
```

**Entregable:** Documento de Estrategia UX, Mapa del Sitio y Flujos de Usuario.

---

## FASE 2: UX Design & Wireframing (La Estructura)

*El objetivo es validar la funcionalidad y el flujo hacia la conversión (cotización) sin distracciones visuales.*

### Tarea 2.1: Wireframes de Baja Fidelidad (Lo-Fi)

**Homepage:**
```
┌─────────────────────────────────────┐
│ [LOGO]    NAV    [CTA: Cotizar]     │
├─────────────────────────────────────┤
│                                     │
│   HERO: "Concreto de Calidad        │
│   Certificada en Manzanillo"        │
│                                     │
│   [CTA: Solicitar Cotización]       │
│                                     │
├─────────────────────────────────────┤
│  ┌───────┐  ┌───────┐  ┌───────┐   │
│  │Tiro   │  │Tiro   │  │Tiro   │   │
│  │Directo│  │Bombeado│ │Lanzado│   │
│  └───────┘  └───────┘  └───────┘   │
├─────────────────────────────────────┤
│  11+     500+    30km    100%       │
│  años    obras   radio   propios    │
├─────────────────────────────────────┤
│  ¿Por qué Conpre? (Diferenciadores) │
├─────────────────────────────────────┤
│  [FOOTER: Contacto + Redes]         │
└─────────────────────────────────────┘
```

**Formulario de Cotización:**
```
┌─────────────────────────────────────┐
│  SOLICITA TU COTIZACIÓN             │
├─────────────────────────────────────┤
│  [Nombre]           [Email]         │
│  [Teléfono]         [Tipo Proyecto] │
│  [Tipo Servicio ▼]  [Ubicación]     │
│  [Volumen m³]                       │
│  [Mensaje / Detalles]               │
│                                     │
│  [ENVIAR SOLICITUD]                 │
│                                     │
│  ⚠️ Cotización personalizada en 24h │
└─────────────────────────────────────┘
```

### Tarea 2.2: User Flow de Conversión

**Flujo Principal: Visitante → Lead**

```
[Búsqueda Google]
    ↓
[Página de Inicio o Servicios]
    ↓
[Explora contenido / Diferenciadores]
    ↓
[Identifica necesidad específica]
    ↓
┌─────────────────────────────────────┐
│  Decisión: ¿Cómo contactar?         │
├─────────────────────────────────────┤
│  WhatsApp → Respuesta inmediata     │
│  Formulario → Cotización formal     │
│  Teléfono → Consulta rápida         │
└─────────────────────────────────────┘
    ↓
[Seguimiento comercial]
    ↓
[Conversión a cliente]
```

**Flujo de Pre-llenado (Desde servicios):**
```
[Usuario en página de Servicios]
    ↓
[Click en "Cotizar Tiro Bombeado"]
    ↓
[Redirige a contact.html?servicio=tiro-bombeado]
    ↓
[Campo "Tipo de Servicio" pre-seleccionado]
    ↓
[Usuario completa datos restantes]
    ↓
[Envío → Lead calificado]
```

### Tarea 2.3: Prototipo Funcional Básico
- Validar que el camino hacia el formulario de contacto sea intuitivo
- Máximo 3 clicks desde cualquier página hasta el formulario
- CTAs visibles sin scroll (above the fold)
- WhatsApp flotante siempre accesible

**Entregable:** Prototipo en escala de grises en Figma/Sketch.

---

## FASE 3: UI Design & Branding System (La Identidad)

*Objetivo: Establecer una estética "Profesional & Confiable" que transmita solidez, calidad y cercanía local, diferenciándose de competidores genéricos.*

### Tarea 3.1: Moodboard Visual

**Conceptos clave:**
- **Solidez:** Como el concreto que venden
- **Frescura local:** Empresa manzanillense, no corporación fría
- **Profesionalismo:** Certificaciones, normativas, calidad
- **Accesibilidad:** Fácil de contactar, trato cercano

**Paleta de Colores:**

| Color | Hex | Uso |
|-------|-----|-----|
| **Verde Conpre** (Primario) | #00a550 | CTAs, acentos, iconos activos |
| **Verde Oscuro** | #008540 | Hover states, encabezados |
| **Dorado** | #b49644 | Detalles premium, badges |
| **Negro Carbón** | #1b2a38 | Texto principal, fondos oscuros |
| **Gris Claro** | #f5f5f5 | Fondos secundarios |
| **Blanco** | #ffffff | Fondos principales, texto inverso |

**Tipografías:**
- **Títulos:** Epilogue (Bold, SemiBold) - Moderno, profesional
- **Cuerpo:** Rubik (Regular, Medium) - Legible, amigable

### Tarea 3.2: Design System (UI Kit)

**Componentes Core:**

```css
/* Variables CSS */
:root {
  --theme-color: #00a550;
  --theme-color-dark: #008540;
  --gold-accent: #b49644;
  --dark: #1b2a38;
  --gray-light: #f5f5f5;
  --white: #ffffff;

  --font-title: 'Epilogue', sans-serif;
  --font-body: 'Rubik', sans-serif;

  --radius-sm: 0;      /* Estilo industrial */
  --radius-md: 4px;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.12);
}
```

**Botones:**
| Tipo | Uso | Estilo |
|------|-----|--------|
| `.vs-btn` (Primario) | CTAs principales | Verde sólido, texto blanco |
| `.vs-btn.style2` | CTAs secundarios | Borde verde, fondo transparente |
| `.whatsapp-btn` | Contacto rápido | Verde WhatsApp #25D366 |

**Tarjetas:**
| Tipo | Uso |
|------|-----|
| `.service-block` | Servicios en home |
| `.project-type-card` | Tipos de proyecto |
| `.contact-info-card` | Info de contacto |
| `.stat-card` | Estadísticas/contadores |

**Iconos:**
- FontAwesome 5 Pro para iconografía general
- SVG custom para servicios específicos (camión, bomba, concreto)

### Tarea 3.3: Diseño de Interfaz de Alta Fidelidad (Hi-Fi)

**Home Hero:**
```
┌─────────────────────────────────────────────────┐
│ [Imagen de fondo: obra con camión Conpre]       │
│                                                 │
│   CONCRETO PREMEZCLADO                          │
│   DE CALIDAD CERTIFICADA                        │
│   EN MANZANILLO                                 │
│                                                 │
│   10+ años construyendo confianza.              │
│   Flota propia, materiales SIKA,                │
│   entregas puntuales.                           │
│                                                 │
│   [COTIZAR PROYECTO]  [LLAMAR AHORA]            │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Sección de Estadísticas (Contadores animados):**
```
┌──────────┬──────────┬──────────┬──────────┐
│   11+    │   500+   │   30km   │   100%   │
│  años    │ proyectos│  radio   │ propios  │
└──────────┴──────────┴──────────┴──────────┘
```

**Cards de Servicios:**
- Imagen de fondo con overlay
- Icono representativo
- Título del servicio
- Descripción breve
- CTA "Cotizar" con pre-llenado

**Entregable:** Archivo de Figma con el Diseño Final y Prototipo Interactivo.

---

## FASE 4: Contenido y Comunicación (Copywriting UX)

*Objetivo: Implementar una narrativa con intención que guíe al usuario a la acción, reforzando confianza y diferenciación local.*

### Tarea 4.1: Integración de Copys Estratégicos

**Hero Section:**
- **Headline:** "Concreto Premezclado de Calidad Certificada en Manzanillo"
- **Subheadline:** "10 años construyendo confianza. Entregas puntuales, materiales certificados, servicio personalizado."
- **CTA Principal:** "Solicitar Cotización"
- **CTA Secundario:** "Llamar Ahora"

**Propuesta de Valor por Segmento:**

| Segmento | Copy |
|----------|------|
| Autoconstrucción | "Tu Primera Losa Merece el Mejor Concreto" |
| Desarrolladores | "El Socio que Necesitas para tus Desarrollos" |
| Obra Pública | "Experiencia y Confiabilidad para Infraestructura Crítica" |

**Trust Badges:**
```
✓ 11 Años de Experiencia
✓ Materiales Certificados (SIKA, CPC40)
✓ Flota 100% Propia (6 camiones + 2 bombas)
✓ Entregas Puntuales Garantizadas
✓ Empresa 100% Manzanillense
✓ Asesoría Técnica Sin Costo
```

### Tarea 4.2: Optimización de Microcopys

**Formulario de Contacto:**

| Campo | Placeholder | Helper Text |
|-------|-------------|-------------|
| Nombre | "Ej: Juan Pérez García" | - |
| Email | "tucorreo@ejemplo.com" | - |
| Teléfono | "314 123 4567" | - |
| Tipo Proyecto | "Selecciona tipo de proyecto" | - |
| Tipo Servicio | "Selecciona tipo de servicio" | Pre-llenado si viene de servicios |
| Ubicación | "Ej: Zona Centro, Manzanillo" | - |
| Volumen | "Ej: 10" | "(Aproximado, si lo conoces)" |
| Mensaje | "Describe tu proyecto..." | - |

**Mensajes de Estado:**

| Tipo | Mensaje |
|------|---------|
| Éxito | "¡Tu solicitud ha sido enviada con éxito! Te contactaremos en 24 horas hábiles." |
| Error | "Hubo un error al enviar tu solicitud. Intenta nuevamente o llámanos directamente." |
| Validación | "Por favor completa todos los campos obligatorios." |

**Nota de Formulario:**
> ⚠️ Este formulario NO genera cotizaciones automáticas. Nuestro equipo se pondrá en contacto contigo dentro de 24 horas hábiles para brindarte una cotización personalizada.

### Tarea 4.3: Configuración de Canales de Contacto

**WhatsApp Business:**
- Mensaje de bienvenida automático
- Catálogo de servicios básico
- Respuestas rápidas para consultas frecuentes

**Flujo de WhatsApp sugerido:**
```
Usuario: [Click en botón WhatsApp]
    ↓
Bot: "¡Hola! Gracias por contactar a Conpre Concretos.
     ¿En qué podemos ayudarte?

     1️⃣ Cotización de concreto
     2️⃣ Información de servicios
     3️⃣ Estado de mi pedido
     4️⃣ Hablar con un asesor"
```

**Entregable:** Documento final de Copys optimizados para SEO y conversión.

---

## FASE 5: SEO y Posicionamiento Local

*Objetivo: Posicionar a Conpre Concretos como la opción #1 en búsquedas locales de concreto en Manzanillo.*

### Tarea 5.1: Optimización On-Page

**Meta Tags por Página:**

| Página | Title | Description |
|--------|-------|-------------|
| Inicio | "Conpre Concretos - Concreto Premezclado en Manzanillo" | "10 años de experiencia en producción y entrega de concreto premezclado en Manzanillo, Colima. Flota propia, materiales SIKA, entregas puntuales." |
| Nosotros | "Sobre Nosotros - Conpre Concretos Manzanillo" | "Empresa 100% manzanillense con 10 años sirviendo a la región. 2 plantas, 6 camiones, bombas propias." |
| Servicios | "Servicios de Concreto - Tiro Directo, Bombeado, Lanzado" | "Entrega de concreto en Manzanillo: tiro directo, bombeado (28m y 36m) y para tiro lanzado. Equipos propios." |
| Productos | "Catálogo de Concreto - F'c, MR, Morteros" | "Concreto premezclado F'c 100-500, MR 35-48, morteros. Resistencia rápida, impermeabilizante integral." |
| Proyectos | "Proyectos - Portafolio Conpre Concretos" | "Proyectos realizados en Manzanillo y Colima. Autoconstrucción, desarrollos residenciales, obra pública." |
| Contacto | "Contacto - Cotiza tu Proyecto de Concreto" | "Contacta a Conpre Concretos. Camino a Aguas Negras S/N, Manzanillo. WhatsApp: 314 145 0639." |

**Keywords Objetivo:**

| Tipo | Keywords |
|------|----------|
| Principales | concreto premezclado Manzanillo, concreto Colima, venta concreto Manzanillo |
| Servicios | bomba de concreto Manzanillo, tiro bombeado Colima, entrega concreto |
| Productos | concreto f'c 250, concreto MR 40, mortero fluido Manzanillo |
| Long-tail | precio concreto Manzanillo, concreto para losa casa, concreto resistencia rápida |

### Tarea 5.2: Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Conpre Concretos",
  "description": "Producción y distribución de concreto premezclado en Manzanillo, Colima",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Camino a Aguas Negras S/N",
    "addressLocality": "Manzanillo",
    "addressRegion": "Colima",
    "addressCountry": "MX"
  },
  "telephone": "+52-314-145-0639",
  "email": "contacto@conpreconcretos.com",
  "url": "https://conpreconcretos.com",
  "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 19.1264,
      "longitude": -104.3214
    },
    "geoRadius": "30000"
  }
}
```

### Tarea 5.3: Google My Business

**Optimización de Perfil:**
- Categoría principal: "Proveedor de concreto"
- Fotos de alta calidad (plantas, camiones, obras)
- Horarios actualizados
- Descripción optimizada con keywords
- Posts regulares (nuevos proyectos, tips)
- Gestión activa de reseñas

**Entregable:** Guía de SEO Local y configuración de Google My Business.

---

## FASE 6: Analytics y Medición

*Objetivo: Establecer métricas claras para medir el éxito del sitio y optimizar continuamente.*

### Tarea 6.1: Configuración de Google Analytics 4

**Eventos Clave a Trackear:**

| Evento | Trigger | Objetivo |
|--------|---------|----------|
| `form_submit` | Envío de formulario contacto | Leads generados |
| `click_whatsapp` | Click en botón WhatsApp | Contactos directos |
| `click_phone` | Click en teléfono | Llamadas |
| `scroll_depth` | 25%, 50%, 75%, 100% | Engagement |
| `cta_click` | Click en CTAs | Interés en servicios |
| `service_view` | Vista de servicio específico | Interés por servicio |

**KPIs Principales:**

| Métrica | Baseline | Objetivo 6 meses |
|---------|----------|------------------|
| Leads/mes (formulario) | 0 | 20+ |
| Contactos WhatsApp/mes | N/A | 50+ |
| Tráfico orgánico/mes | 0 | 500+ |
| Posición "concreto Manzanillo" | N/A | Top 5 |
| Tasa de conversión | N/A | >3% |
| Tiempo en sitio | N/A | >2 min |

### Tarea 6.2: Dashboard de Métricas

**Reporte Mensual:**
```
┌─────────────────────────────────────────────────┐
│  MÉTRICAS CONPRE CONCRETOS - [MES/AÑO]         │
├─────────────────────────────────────────────────┤
│  TRÁFICO                                        │
│  ├─ Visitas totales: XXX                        │
│  ├─ Usuarios únicos: XXX                        │
│  ├─ Tráfico orgánico: XX%                       │
│  └─ Tráfico directo: XX%                        │
├─────────────────────────────────────────────────┤
│  CONVERSIONES                                   │
│  ├─ Formularios enviados: XX                    │
│  ├─ Clicks WhatsApp: XX                         │
│  ├─ Clicks teléfono: XX                         │
│  └─ Tasa de conversión: X.X%                    │
├─────────────────────────────────────────────────┤
│  ENGAGEMENT                                     │
│  ├─ Páginas/sesión: X.X                         │
│  ├─ Tiempo promedio: X:XX                       │
│  └─ Tasa de rebote: XX%                         │
├─────────────────────────────────────────────────┤
│  SEO                                            │
│  ├─ Posición promedio: XX                       │
│  ├─ Impresiones: XXX                            │
│  └─ CTR: X.X%                                   │
└─────────────────────────────────────────────────┘
```

**Entregable:** Dashboard de Analytics y reporte mensual automatizado.

---

## FASE 7: Mejora Continua y Optimización

*Objetivo: Iterar sobre el diseño y contenido basándose en datos reales de usuario.*

### Tarea 7.1: A/B Testing

**Tests Prioritarios:**

| Elemento | Variante A | Variante B | Métrica |
|----------|------------|------------|---------|
| CTA Hero | "Solicitar Cotización" | "Cotizar Mi Proyecto" | Click rate |
| Formulario | 7 campos | 5 campos (mínimo) | Completion rate |
| WhatsApp | Botón flotante | Barra inferior | Click rate |
| Trust badges | 4 badges | 6 badges | Tiempo en sección |

### Tarea 7.2: Feedback de Usuarios

**Encuesta Post-Contacto:**
```
1. ¿Qué te pareció la facilidad para contactarnos? (1-5)
2. ¿Encontraste la información que buscabas? (Sí/No)
3. ¿Qué información adicional te hubiera gustado encontrar?
4. ¿Recomendarías nuestro sitio? (NPS 0-10)
```

### Tarea 7.3: Roadmap de Mejoras

**Corto Plazo (1-3 meses):**
- [ ] Implementar chat en vivo
- [ ] Agregar calculadora de volumen de concreto
- [ ] Crear sección de FAQs interactiva
- [ ] Optimizar velocidad de carga

**Mediano Plazo (3-6 meses):**
- [ ] Blog con contenido educativo
- [ ] Casos de éxito detallados
- [ ] Video institucional
- [ ] Testimonios en video

**Largo Plazo (6-12 meses):**
- [ ] Portal de clientes (estado de pedidos)
- [ ] Cotizador básico público (rangos de precio)
- [ ] Integración con CRM
- [ ] App móvil de seguimiento

---

## RESUMEN DE ENTREGABLES POR FASE

| Fase | Entregables | Estado |
|------|-------------|--------|
| **Fase 1: UX Research** | Documento de Estrategia, User Personas, Sitemap | ✅ Completado |
| **Fase 2: UX Design** | Wireframes Lo-Fi, User Flows, Prototipo básico | ✅ Completado |
| **Fase 3: UI Design** | Moodboard, UI Kit, Diseño Hi-Fi en Figma | ✅ Completado |
| **Fase 4: Copywriting** | Copys estratégicos, Microcopys, Mensajes | ✅ Completado |
| **Fase 5: SEO** | Meta tags, Schema markup, Google My Business | ✅ Completado |
| **Fase 6: Analytics** | GA4 configurado, Dashboard, KPIs | ✅ Completado |
| **Fase 7: Optimización** | A/B Tests, Feedback, Roadmap | 🔄 En proceso |

---

## ANEXO: Checklist de Implementación

### Pre-Lanzamiento
```
[✓] Colores de marca aplicados (verde #00a550)
[✓] Meta tags SEO actualizados
[✓] lang="es" en todos los HTML
[✓] Contenido placeholder eliminado
[✓] Enlaces verificados y funcionales
[✓] Formulario de contacto testeado
[✓] Responsive verificado
[✓] Google Analytics instalado
[✓] Favicon actualizado
[✓] robots.txt y sitemap.xml
```

### Post-Lanzamiento
```
[ ] Verificar indexación en Google Search Console
[ ] Configurar Google My Business
[ ] Monitorear métricas primera semana
[ ] Solicitar primeras reseñas a clientes
[ ] Ajustar según feedback inicial
```

---

**Documento Generado:** Sistema de Desarrollo UX/UI - Conpre Concretos
**Fecha:** Enero 2026
**Versión:** 1.0
**Basado en:** Documentación integral del proyecto CONPRE × TESEO DATA LAB
