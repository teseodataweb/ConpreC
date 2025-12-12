# DOCUMENTO DE VALIDACIÓN - CONTENIDOS POR PÁGINA Y COMPONENTE
## SITIO WEB CONPRE CONCRETOS

**Fecha:** 15 de Noviembre de 2025
**Propósito:** Validación de contenidos antes de implementación
**Para revisión de:** Conpre Concretos (Janet Rodríguez, José Luis Rodríguez)
**Preparado por:** Teseo Data Lab - Área de Desarrollo Web

---

## INSTRUCCIONES DE REVISIÓN

Este documento presenta **todos los contenidos del sitio web organizados por página y componente**.

**Por favor revise:**
- ✅ Textos: ¿Son precisos? ¿Reflejan la identidad de Conpre?
- ✅ Datos técnicos: ¿Números, capacidades, especificaciones son correctos?
- ✅ Imágenes requeridas: ¿Tienen estas fotos? ¿Necesitan tomarlas?
- ⚠️ Pendientes marcados: Datos que necesitamos que proporcionen

**Leyenda de Estados:**
- ✅ **COMPLETO:** Contenido listo, solo requiere aprobación
- ⚠️ **REQUIERE DATO:** Necesitamos información de Conpre para completar
- 📸 **REQUIERE IMAGEN:** Foto necesaria para este componente

---

## ÍNDICE DE PÁGINAS

1. [PÁGINA DE INICIO (index.html)](#1-página-de-inicio)
2. [PÁGINA NOSOTROS (about.html)](#2-página-nosotros)
3. [PÁGINA SERVICIOS (services.html)](#3-página-servicios)
4. [PÁGINA PRODUCTOS (productos.html)](#4-página-productos)
5. [PÁGINA PROYECTOS (project.html)](#5-página-proyectos)
6. [PÁGINA CONTACTO (contact.html)](#6-página-contacto)
7. [COMPONENTES GLOBALES (Header, Footer, Navegación)](#7-componentes-globales)
8. [SEO Y METADATOS](#8-seo-y-metadatos)

---

# 1. PÁGINA DE INICIO

**Archivo:** index.html
**Propósito:** Primera impresión, captar atención, presentar propuesta de valor

---

## 1.1 COMPONENTE: Hero Banner / Slider Principal

**Ubicación:** Parte superior de la página (full screen)
**Tipo:** Slider con 3 diapositivas rotativas
**Estado:** ✅ COMPLETO (textos) | 📸 REQUIERE IMÁGENES (3)

### SLIDE 1

**IMAGEN DE FONDO REQUERIDA:** 📸
- Descripción: Camión revolcador de Conpre en acción, entregando concreto
- Especificaciones: 1920x1080px mínimo, landscape, buena iluminación
- Sugerencia: Camión con logo de Conpre visible, en obra activa

**TÍTULO:**
```
Concreto Premezclado de Calidad en Manzanillo
```

**SUBTÍTULO:**
```
10 años de experiencia entregando soluciones en concreto para
autoconstrucción, desarrollos residenciales y obra pública
```

**BOTÓN CALL TO ACTION:**
- Texto: "Solicitar Cotización"
- Link: contact.html (página de contacto)
- Color: [Verde/Azul según paleta Conpre]

---

### SLIDE 2

**IMAGEN DE FONDO REQUERIDA:** 📸
- Descripción: Bomba de concreto de Conpre en operación (28m o 36m)
- Especificaciones: 1920x1080px, mostrando el alcance/brazo de la bomba
- Sugerencia: Bomba en altura, entregando concreto a edificio o estructura

**TÍTULO:**
```
Bombas de Concreto de 28m y 36m de Alcance
```

**SUBTÍTULO:**
```
Entregamos en el lugar exacto que necesitas con nuestro equipo
especializado y operadores certificados
```

**BOTÓN CALL TO ACTION:**
- Texto: "Conocer Servicios"
- Link: services.html
- Color: [Verde/Azul según paleta Conpre]

---

### SLIDE 3

**IMAGEN DE FONDO REQUERIDA:** 📸
- Descripción: Vista de planta de producción de Conpre o equipo trabajando
- Especificaciones: 1920x1080px, imagen que transmita profesionalismo
- Sugerencia: Instalaciones de la planta, flota de camiones, o equipo humano

**TÍTULO:**
```
100% Empresa Manzanillense
```

**SUBTÍTULO:**
```
Conocemos las necesidades de nuestra región. Materiales certificados,
agregados de Río Armería y 10 años construyendo confianza
```

**BOTÓN CALL TO ACTION:**
- Texto: "Nosotros"
- Link: about.html
- Color: [Verde/Azul según paleta Conpre]

---

## 1.2 COMPONENTE: Barra de Características / Features

**Ubicación:** Inmediatamente después del hero slider
**Tipo:** Grid de 4 columnas (responsivo: 2x2 en tablet, 1 columna en móvil)
**Estado:** ✅ COMPLETO

### FEATURE 1

**ICONO:** 🚚 Camión (ícono de FontAwesome: fa-truck)
**TÍTULO:**
```
Flota Propia
```
**TEXTO:**
```
6 camiones revolvedores y 2 bombas de concreto de 28m y 36m
```

---

### FEATURE 2

**ICONO:** ✓ Certificado / Escudo de calidad (fa-certificate o fa-shield-check)
**TÍTULO:**
```
Materiales Certificados
```
**TEXTO:**
```
Cemento CPC40, agregados de Río Armería, aditivos SIKA
```

---

### FEATURE 3

**ICONO:** ⏰ Reloj (fa-clock)
**TÍTULO:**
```
Entrega Oportuna
```
**TEXTO:**
```
Cobertura de ~30 km, entregas puntuales y programadas
```

---

### FEATURE 4

**ICONO:** ⭐ Estrella (fa-star)
**TÍTULO:**
```
10 Años de Experiencia
```
**TEXTO:**
```
Desde 2014 sirviendo a Manzanillo y Colima con excelencia
```

---

## 1.3 COMPONENTE: Sección "¿Por Qué Conpre?"

**Ubicación:** Después de features
**Tipo:** Sección de texto + imagen lateral
**Estado:** ✅ COMPLETO (texto) | 📸 REQUIERE IMAGEN (1)

**IMAGEN REQUERIDA:** 📸
- Descripción: Planta de producción de Conpre o camiones en fila
- Ubicación en layout: Lado derecho
- Especificaciones: 800x600px mínimo

**TÍTULO DE SECCIÓN:**
```
¿Por Qué Elegir Conpre Concretos?
```

**TEXTO:**
```
Durante 10 años, hemos sido testigos y parte del crecimiento de Manzanillo,
suministrando concreto premezclado para cientos de proyectos que han
transformado nuestra ciudad. Desde la primera columna de una vivienda familiar
hasta estructuras de infraestructura pública, cada metro cúbico que entregamos
lleva nuestro compromiso con la calidad, puntualidad y servicio personalizado.

Como empresa 100% manzanillense, entendemos las necesidades de construir en
nuestra región y nos enorgullece contribuir al desarrollo de nuestra comunidad,
un proyecto a la vez.
```

**BOTÓN:**
- Texto: "Conocer Más Sobre Nosotros"
- Link: about.html

---

## 1.4 COMPONENTE: Preview de Servicios

**Ubicación:** Mitad de la página
**Tipo:** Grid de 3 columnas (servicios principales)
**Estado:** ✅ COMPLETO (textos) | 📸 REQUIERE IMÁGENES (3)

**TÍTULO DE SECCIÓN:**
```
Nuestros Servicios
```

**SUBTÍTULO:**
```
Soluciones de entrega adaptadas a cada tipo de proyecto
```

---

### SERVICIO 1: Tiro Directo

**IMAGEN REQUERIDA:** 📸
- Descripción: Camión revolcador descargando concreto directamente
- Especificaciones: 600x400px, formato cuadrado o landscape

**ICONO:** 🚚 (fa-truck)
**TÍTULO:**
```
Tiro Directo
```
**TEXTO:**
```
Entrega directa desde el camión revolcador. Ideal para losas,
cimientos y proyectos con acceso vehicular.
```
**BOTÓN:**
- Texto: "Ver Detalles"
- Link: services.html#tiro-directo

---

### SERVICIO 2: Tiro Bombeado

**IMAGEN REQUERIDA:** 📸
- Descripción: Bomba de concreto en acción, mostrando alcance
- Especificaciones: 600x400px

**ICONO:** 🏗️ (fa-building)
**TÍTULO:**
```
Tiro Bombeado
```
**TEXTO:**
```
Bombas de 28m y 36m de alcance. Solución para edificios,
zonas de difícil acceso y proyectos en altura.
```
**BOTÓN:**
- Texto: "Ver Detalles"
- Link: services.html#tiro-bombeado

---

### SERVICIO 3: Tiro Lanzado

**IMAGEN REQUERIDA:** 📸
- Descripción: Aplicación de concreto lanzado (si tienen foto) o imagen ilustrativa
- Especificaciones: 600x400px

**ICONO:** 🎯 (fa-bullseye)
**TÍTULO:**
```
Tiro Lanzado
```
**TEXTO:**
```
Aplicación especializada mediante lanzado neumático.
Ideal para recubrimientos y superficies irregulares.
```
**BOTÓN:**
- Texto: "Ver Detalles"
- Link: services.html#tiro-lanzado

---

**BOTÓN FINAL DE SECCIÓN:**
- Texto: "Ver Todos los Servicios"
- Link: services.html
- Estilo: Botón destacado, centrado

---

## 1.5 COMPONENTE: Cifras / Estadísticas

**Ubicación:** Después de servicios
**Tipo:** Sección con fondo de color o imagen con overlay
**Estado:** ✅ COMPLETO

**TÍTULO DE SECCIÓN:**
```
Conpre Concretos en Números
```

**ESTADÍSTICAS (4 columnas):**

### Estadística 1
**NÚMERO:** `10+`
**DESCRIPCIÓN:** `Años de Experiencia`

### Estadística 2
**NÚMERO:** `2`
**DESCRIPCIÓN:** `Plantas de Producción`

### Estadística 3
**NÚMERO:** `6`
**DESCRIPCIÓN:** `Camiones Revolvedores`

### Estadística 4
**NÚMERO:** `30 m³/h`
**DESCRIPCIÓN:** `Capacidad de Producción`

**OPCIONAL - Estadísticas adicionales (si tienen datos):**
- Número de proyectos completados
- Metros cúbicos entregados total
- Clientes satisfechos

---

## 1.6 COMPONENTE: Preview de Proyectos / Galería

**Ubicación:** Sección inferior de homepage
**Tipo:** Galería de 3-4 proyectos destacados
**Estado:** ⚠️ REQUIERE DATOS | 📸 REQUIERE IMÁGENES (3-4)

**TÍTULO DE SECCIÓN:**
```
Proyectos Destacados
```

**SUBTÍTULO:**
```
Cientos de proyectos completados en Manzanillo y Colima
```

---

### PROYECTO 1: Arking Diseño y Construcción

**IMAGEN REQUERIDA:** 📸
- Descripción: Foto del proyecto Arking o camión de Conpre en sitio
- Especificaciones: 500x400px

**TÍTULO:**
```
Arking Diseño y Construcción
```
**UBICACIÓN:**
```
Venustiano Carranza, Manzanillo
```
**TIPO:**
```
Construcción Residencial
```
**BOTÓN:**
- Texto: "Ver Proyecto"
- Link: project.html

---

### PROYECTO 2: Club Deportivo CROM

**IMAGEN REQUERIDA:** 📸
- Descripción: Foto del Club Deportivo CROM
- Especificaciones: 500x400px

**TÍTULO:**
```
Club Deportivo CROM
```
**UBICACIÓN:**
```
Manzanillo, Colima
```
**TIPO:**
```
Instalaciones Deportivas
```
**BOTÓN:**
- Texto: "Ver Proyecto"
- Link: project.html

---

### PROYECTO 3 Y 4

⚠️ **PENDIENTE:** Necesitamos que Conpre proporcione:
- 2 proyectos adicionales destacados
- Nombre del proyecto
- Ubicación
- Tipo de proyecto
- 1 foto por proyecto (500x400px)

---

**BOTÓN FINAL DE SECCIÓN:**
- Texto: "Ver Todos los Proyectos"
- Link: project.html
- Estilo: Botón destacado

---

## 1.7 COMPONENTE: Call to Action Final

**Ubicación:** Antes del footer
**Tipo:** Sección de CTA con fondo destacado
**Estado:** ✅ COMPLETO

**FONDO:** Color sólido (verde/azul Conpre) o imagen con overlay oscuro

**TÍTULO:**
```
¿Necesitas Concreto para tu Proyecto?
```

**SUBTÍTULO:**
```
Contáctanos para una cotización personalizada y sin compromiso
```

**BOTONES (2):**
1. **Botón Principal:**
   - Texto: "Solicitar Cotización"
   - Link: contact.html
   - Estilo: Botón blanco o color contrastante

2. **Botón Secundario:**
   - Texto: "Llamar Ahora"
   - Link: tel:[TELÉFONO - PENDIENTE]
   - Estilo: Botón outline/transparente

⚠️ **PENDIENTE:** Número de teléfono para el link

---

## 1.8 SEO - PÁGINA DE INICIO

**Estado:** ✅ COMPLETO

**TITLE TAG:**
```html
<title>Conpre Concretos - Concreto Premezclado en Manzanillo, Colima</title>
```

**META DESCRIPTION:**
```html
<meta name="description" content="Conpre Concretos: 10 años de experiencia en producción y entrega de concreto premezclado en Manzanillo. Flota propia, bombas de concreto, materiales certificados. Cotiza tu proyecto.">
```

**META KEYWORDS:**
```html
<meta name="keywords" content="concreto premezclado Manzanillo, concreto Colima, venta de concreto, bomba de concreto, concreto f'c, concreto MR, Conpre">
```

---

# 2. PÁGINA NOSOTROS

**Archivo:** about.html
**Propósito:** Contar la historia de Conpre, generar confianza, mostrar infraestructura

---

## 2.1 COMPONENTE: Banner Interno / Breadcrumb

**Ubicación:** Parte superior de la página
**Tipo:** Banner con título y navegación
**Estado:** ✅ COMPLETO | 📸 REQUIERE IMAGEN DE FONDO (1)

**IMAGEN DE FONDO REQUERIDA:** 📸
- Descripción: Vista amplia de instalaciones de Conpre o equipo trabajando
- Especificaciones: 1920x400px, landscape, puede tener overlay oscuro

**TÍTULO:**
```
Acerca de Conpre Concretos
```

**BREADCRUMB:**
```
Inicio > Nosotros
```

---

## 2.2 COMPONENTE: Quiénes Somos

**Ubicación:** Primera sección de contenido
**Tipo:** Texto + imagen lateral
**Estado:** ✅ COMPLETO (texto) | 📸 REQUIERE IMAGEN (1)

**IMAGEN REQUERIDA:** 📸
- Descripción: Foto representativa de Conpre (planta, flota, equipo)
- Ubicación en layout: Lado derecho o izquierdo
- Especificaciones: 700x500px

**TÍTULO:**
```
Conpre Concretos - 10 Años Construyendo Manzanillo
```

**TEXTO:**
```
Conpre Concretos es una empresa 100% manzanillense fundada en 2014 con la
misión de ofrecer concreto premezclado de calidad certificada y servicio
personalizado a nuestra región.

A lo largo de 10 años, hemos crecido de manera sostenida, pasando de ser un
proveedor local a convertirnos en un aliado estratégico para cientos de
proyectos de autoconstrucción, desarrollos residenciales y obra pública en
Manzanillo y Colima.

Hoy contamos con 2 plantas de producción, 6 camiones revolvedores, 2 bombas
de concreto y un equipo de 18 profesionales comprometidos con la excelencia.
Pero más allá de nuestra infraestructura, lo que realmente nos distingue es
nuestro compromiso con la calidad, nuestra identidad local y la confianza que
nuestros clientes depositan en nosotros proyecto tras proyecto.
```

---

## 2.3 COMPONENTE: Nuestra Historia / Timeline

**Ubicación:** Después de "Quiénes Somos"
**Tipo:** Timeline visual (línea de tiempo)
**Estado:** ✅ COMPLETO

**TÍTULO DE SECCIÓN:**
```
Nuestra Historia
```

**TIMELINE (6 hitos):**

### 2014 - Fundación
```
Inicio de operaciones como empresa familiar manzanillense.
Primera planta en funcionamiento.
```

### 2015-2017 - Consolidación
```
Crecimiento de cartera de clientes en autoconstrucción.
Incorporación de desarrollos residenciales. Ampliación de flota.
```

### 2018-2020 - Expansión
```
Segunda planta de producción. Adquisición de bombas de concreto
propias (28m y 36m). Incremento de capacidad productiva.
```

### 2021-2023 - Diversificación
```
Entrada al segmento de obra pública. Ampliación de catálogo de productos.
Soluciones especializadas (resistencias rápidas, impermeabilizantes).
```

### 2024 - Modernización
```
Implementación de tecnología digital (sistema de cotización).
Optimización de procesos logísticos. Presencia web institucional.
```

### 2025 - 10 Años de Experiencia
```
Consolidación como proveedor líder local. Cientos de proyectos completados.
18 colaboradores especializados. Compromiso renovado con Manzanillo.
```

---

## 2.4 COMPONENTE: Nuestra Infraestructura

**Ubicación:** Mitad de página
**Tipo:** Grid de elementos con iconos/imágenes
**Estado:** ✅ COMPLETO (textos) | 📸 REQUIERE IMÁGENES (3)

**TÍTULO DE SECCIÓN:**
```
Nuestra Infraestructura
```

**SUBTÍTULO:**
```
Equipos propios, calidad garantizada
```

---

### ELEMENTO 1: Plantas de Producción

**IMAGEN REQUERIDA:** 📸
- Descripción: Foto de una de las plantas de producción
- Especificaciones: 500x350px

**ICONO:** 🏭 (fa-industry)
**TÍTULO:**
```
2 Plantas de Producción
```
**TEXTO:**
```
Capacidad: ~30 m³/hora por planta
Cobertura: ~30 km cada una
Ubicadas estratégicamente en Manzanillo
```

---

### ELEMENTO 2: Flota de Entrega

**IMAGEN REQUERIDA:** 📸
- Descripción: Flota de camiones revolvedores (6 camiones si es posible)
- Especificaciones: 500x350px

**ICONO:** 🚚 (fa-truck)
**TÍTULO:**
```
Flota de Entrega
```
**TEXTO:**
```
6 camiones revolvedores de última generación
2 bombas de concreto (alcances de 28m y 36m)
Equipos propios, mantenimiento preventivo continuo
```

---

### ELEMENTO 3: Equipo Humano

**IMAGEN REQUERIDA:** 📸 (OPCIONAL)
- Descripción: Equipo de trabajo de Conpre (foto grupal)
- Especificaciones: 500x350px
- Nota: Si no hay foto, puede omitirse la imagen y usar solo icono

**ICONO:** 👥 (fa-users)
**TÍTULO:**
```
Equipo Humano
```
**TEXTO:**
```
18 colaboradores especializados
Operadores certificados
Personal capacitado continuamente
Compromiso con la excelencia en servicio
```

---

## 2.5 COMPONENTE: Misión, Visión y Valores

**Ubicación:** Después de Infraestructura
**Tipo:** Sección con tabs o acordeón
**Estado:** ✅ COMPLETO

**TÍTULO DE SECCIÓN:**
```
Nuestra Filosofía
```

---

### TAB 1: MISIÓN

**TÍTULO:**
```
Misión
```

**TEXTO:**
```
Proveer soluciones integrales en concreto premezclado de la más alta calidad
a constructores, desarrolladores y particulares en Manzanillo y la región de
Colima, garantizando entregas oportunas, materiales certificados y un servicio
personalizado que contribuya al desarrollo de nuestra comunidad.
```

---

### TAB 2: VISIÓN

**TÍTULO:**
```
Visión
```

**TEXTO:**
```
Ser la empresa líder en producción y distribución de concreto premezclado en
Manzanillo y Colima, reconocida por nuestra excelencia operativa, innovación
en servicios y compromiso inquebrantable con la calidad, consolidándonos como
la primera opción para todo tipo de proyectos de construcción en la región.
```

---

### TAB 3: VALORES

**TÍTULO:**
```
Valores
```

**Lista de valores (6 elementos):**

**1. Calidad**
```
Utilizamos únicamente materiales certificados que cumplen con las normas
mexicanas más estrictas. Cemento CPC40, agregados de Río Armería y
aditivos SIKA.
```

**2. Compromiso**
```
Cada proyecto es importante para nosotros. Nos comprometemos con los plazos,
las especificaciones acordadas y la satisfacción total de nuestros clientes.
```

**3. Servicio Personalizado**
```
Ofrecemos asesoría técnica sin costo, cotizaciones personalizadas y
flexibilidad para adaptarnos a necesidades específicas.
```

**4. Identidad Local**
```
Somos una empresa 100% manzanillense con raíces profundas en nuestra comunidad.
Esto nos impulsa a ofrecer un servicio cercano y comprometido.
```

**5. Innovación y Mejora Continua**
```
Invertimos constantemente en tecnología, capacitación y mejora de procesos
para ofrecer servicios más eficientes.
```

**6. Responsabilidad y Transparencia**
```
Operamos con honestidad, ofreciendo información clara sobre nuestros productos,
precios justos y procesos transparentes.
```

---

## 2.6 COMPONENTE: Nuestro Valor Agregado / Diferenciadores

**Ubicación:** Sección final antes del CTA
**Tipo:** Grid de 4-5 elementos con iconos
**Estado:** ✅ COMPLETO

**TÍTULO DE SECCIÓN:**
```
¿Por Qué Elegir Conpre?
```

**SUBTÍTULO:**
```
Diferenciadores que nos hacen únicos
```

---

### DIFERENCIADOR 1

**ICONO:** ✓ (fa-check-circle)
**TÍTULO:**
```
Materiales Certificados
```
**TEXTO:**
```
Cemento CPC40/CPC40 RS, agregados de Río Armería, aditivos SIKA.
Cumplimiento normativo NMX-C-414 y NMX-C-155.
```

---

### DIFERENCIADOR 2

**ICONO:** 🏠 (fa-home)
**TÍTULO:**
```
100% Empresa Local
```
**TEXTO:**
```
Conocemos nuestra región: clima, suelos, logística.
18 empleos locales, compromiso con Manzanillo.
```

---

### DIFERENCIADOR 3

**ICONO:** 🚛 (fa-truck-moving)
**TÍTULO:**
```
Equipos Propios
```
**TEXTO:**
```
Flota y bombas 100% propias (NO subcontratamos). Control total
sobre calidad, puntualidad y servicio.
```

---

### DIFERENCIADOR 4

**ICONO:** 📊 (fa-chart-line)
**TÍTULO:**
```
Experiencia Diversificada
```
**TEXTO:**
```
10 años atendiendo autoconstrucción, desarrollos residenciales,
obra pública y proyectos comerciales.
```

---

### DIFERENCIADOR 5

**ICONO:** ⏰ (fa-clock)
**TÍTULO:**
```
Puntualidad Garantizada
```
**TEXTO:**
```
Sistema de logística optimizado, entregas exactas, soporte durante
el vaciado, seguimiento post-entrega.
```

---

## 2.7 COMPONENTE: Call to Action

**Ubicación:** Final de página antes del footer
**Tipo:** CTA destacado
**Estado:** ✅ COMPLETO

**TÍTULO:**
```
¿Listo para Comenzar tu Proyecto?
```

**TEXTO:**
```
Conoce más sobre nuestros productos y servicios
```

**BOTONES (2):**
1. "Ver Nuestros Productos" → productos.html
2. "Solicitar Cotización" → contact.html

---

## 2.8 SEO - PÁGINA NOSOTROS

**Estado:** ✅ COMPLETO

**TITLE TAG:**
```html
<title>Nosotros - Conpre Concretos | 10 Años de Experiencia en Manzanillo</title>
```

**META DESCRIPTION:**
```html
<meta name="description" content="Conpre Concretos es una empresa 100% manzanillense con 10 años sirviendo a la región. 2 plantas, 6 camiones, bombas de concreto propias. Calidad certificada.">
```

**META KEYWORDS:**
```html
<meta name="keywords" content="conpre concretos, empresa de concreto Manzanillo, proveedor concreto Colima, historia Conpre">
```

---

# 3. PÁGINA SERVICIOS

**Archivo:** services.html
**Propósito:** Detallar tipos de entrega y servicios complementarios

---

## 3.1 COMPONENTE: Banner Interno

**Estado:** ✅ COMPLETO | 📸 REQUIERE IMAGEN DE FONDO

**IMAGEN DE FONDO REQUERIDA:** 📸
- Descripción: Bomba de concreto o camión en acción
- Especificaciones: 1920x400px

**TÍTULO:**
```
Nuestros Servicios
```

**BREADCRUMB:**
```
Inicio > Servicios
```

---

## 3.2 COMPONENTE: Introducción

**Estado:** ✅ COMPLETO

**TEXTO:**
```
En Conpre Concretos ofrecemos soluciones completas de entrega de concreto
premezclado, adaptándonos a las necesidades específicas de cada proyecto.
Contamos con equipos propios y operadores certificados para garantizar
un servicio profesional y confiable.
```

---

## 3.3 COMPONENTE: Servicios Principales (3 servicios)

**Tipo:** Grid de 3 columnas o secciones individuales completas
**Estado:** ✅ COMPLETO (textos) | 📸 REQUIERE IMÁGENES (3)

---

### SERVICIO 1: Tiro Directo

**IMAGEN REQUERIDA:** 📸
- Descripción: Camión descargando concreto directamente a obra
- Especificaciones: 800x500px

**ICONO:** 🚚 (fa-truck)

**TÍTULO:**
```
Tiro Directo
```

**DESCRIPCIÓN:**
```
Entrega directa del concreto desde el camión revolcador al punto de vaciado.
Ideal para proyectos con acceso vehicular directo y sin restricciones de altura.
```

**VENTAJAS (lista de puntos):**
- ✓ Menor costo (no requiere equipo especializado adicional)
- ✓ Ideal para losas, cimientos, pisos y banquetas
- ✓ Rápida descarga (hasta 8 m³ en minutos)
- ✓ Perfecto para áreas amplias con acceso despejado

**APLICACIONES TÍPICAS:**
```
• Viviendas residenciales (losas, columnas, cimientos)
• Estacionamientos y patios
• Banquetas y guarniciones
• Pisos industriales de fácil acceso
• Cimentaciones superficiales
```

---

### SERVICIO 2: Tiro Bombeado

**IMAGEN REQUERIDA:** 📸
- Descripción: Bomba de Conpre en acción, mostrando el brazo extendido
- Especificaciones: 800x500px

**ICONO:** 🏗️ (fa-building)

**TÍTULO:**
```
Tiro Bombeado
```

**DESCRIPCIÓN:**
```
Entrega mediante bombas de concreto de alta precisión con alcances de 28 y 36
metros. Solución ideal para proyectos de difícil acceso, edificios de varios
niveles o áreas donde el camión no puede llegar directamente.
```

**VENTAJAS (lista de puntos):**
- ✓ Alcance vertical y horizontal (28m y 36m disponibles)
- ✓ Precisión en el punto de vaciado
- ✓ Menor tiempo y mano de obra en colocación
- ✓ **Bombas PROPIAS** (no subcontratamos, control total)
- ✓ Operadores certificados y experimentados
- ✓ Capacidad para maniobrar en espacios reducidos

**NUESTROS EQUIPOS:**
```
• Bomba de 28 metros de alcance
• Bomba de 36 metros de alcance
• Ambas con operadores certificados
• Mantenimiento preventivo continuo
```

**APLICACIONES TÍPICAS:**
```
• Edificios de varios niveles
• Áreas de difícil acceso (terrenos irregulares, pendientes)
• Proyectos donde el camión no puede acercarse
• Estructuras en altura (columnas, losas de niveles superiores)
• Obras en espacios urbanos congestionados
• Proyectos con restricciones de horario (bombeo más rápido)
```

---

### SERVICIO 3: Tiro Lanzado

**IMAGEN REQUERIDA:** 📸 (OPCIONAL - puede usar imagen ilustrativa si no tienen)
- Descripción: Aplicación de concreto lanzado
- Especificaciones: 800x500px

**ICONO:** 🎯 (fa-bullseye)

**TÍTULO:**
```
Tiro Lanzado
```

**DESCRIPCIÓN:**
```
Aplicación especializada de concreto mediante lanzado neumático (shotcrete).
Ideal para recubrimientos, superficies irregulares y estructuras que requieren
adherencia superior.
```

**VENTAJAS (lista de puntos):**
- ✓ Aplicación en superficies verticales o irregulares
- ✓ Adherencia superior al concreto convencional
- ✓ Versatilidad en aplicación (túneles, taludes, piscinas)
- ✓ Menor uso de cimbra y encofrados

**APLICACIONES TÍPICAS:**
```
• Piscinas y albercas (revestimiento)
• Recubrimientos de taludes y túneles
• Refuerzos estructurales
• Estabilización de suelos
• Reparaciones especializadas
```

---

## 3.4 COMPONENTE: Servicios Complementarios

**Ubicación:** Después de servicios principales
**Tipo:** Lista o grid de servicios adicionales
**Estado:** ✅ COMPLETO

**TÍTULO DE SECCIÓN:**
```
Servicios Complementarios
```

---

### SERVICIO COMPLEMENTARIO 1

**ICONO:** 🚜 (fa-pump-soap o fa-cog)
**TÍTULO:**
```
Servicio de Bombeo Independiente
```
**DESCRIPCIÓN:**
```
Renta de bomba de concreto para trabajos con concreto de otras fuentes.
Incluye operador especializado. Bombas de 28m y 36m disponibles.
```

---

### SERVICIO COMPLEMENTARIO 2

**ICONO:** ⚙️ (fa-cog)
**TÍTULO:**
```
Renta de Vibrador
```
**DESCRIPCIÓN:**
```
Equipo para compactación adecuada del concreto. Garantiza eliminación de
burbujas de aire y mejora la resistencia final de la estructura.
```

---

### SERVICIO COMPLEMENTARIO 3

**ICONO:** 🔧 (fa-wrench)
**TÍTULO:**
```
Tendido de Tubería
```
**DESCRIPCIÓN:**
```
Servicio especializado de colocación de tuberías previo al vaciado de concreto.
Coordinación con equipo del cliente para instalaciones hidráulicas o eléctricas.
```

---

## 3.5 COMPONENTE: Proceso de Trabajo

**Ubicación:** Sección inferior de la página
**Tipo:** Timeline o pasos numerados
**Estado:** ✅ COMPLETO

**TÍTULO DE SECCIÓN:**
```
Nuestro Proceso de Trabajo
```

**SUBTÍTULO:**
```
De la consulta inicial hasta la entrega final
```

---

**PASO 1:**
```
Contacto Inicial
El cliente nos contacta vía teléfono, WhatsApp o formulario web.
Recabamos información sobre el proyecto.
```

**PASO 2:**
```
Cotización Personalizada
Evaluamos necesidades del proyecto (tipo de concreto, volumen, ubicación).
Generamos cotización detallada con vigencia especificada.
```

**PASO 3:**
```
Programación de Entrega
Confirmación de fecha y hora. Coordinación logística.
Preparación del equipo (camión o bomba según requerimiento).
```

**PASO 4:**
```
Entrega en Sitio
Llegada puntual. Control de calidad en sitio.
Soporte técnico durante el vaciado de concreto.
```

**PASO 5:**
```
Seguimiento Post-Entrega
Verificación de satisfacción. Soporte técnico si se requiere.
Documentación entregada (remisión, especificaciones técnicas).
```

---

## 3.6 COMPONENTE: Call to Action

**Estado:** ✅ COMPLETO

**TÍTULO:**
```
¿Necesitas Asesoría Sobre Qué Servicio Se Adapta Mejor a tu Proyecto?
```

**BOTÓN:**
- Texto: "Contáctanos"
- Link: contact.html

---

## 3.7 SEO - PÁGINA SERVICIOS

**Estado:** ✅ COMPLETO

**TITLE TAG:**
```html
<title>Servicios - Conpre Concretos | Tiro Directo, Bombeado y Lanzado</title>
```

**META DESCRIPTION:**
```html
<meta name="description" content="Servicios de entrega de concreto en Manzanillo: tiro directo, bombeado (28m y 36m de alcance) y lanzado. Bombas propias, entregas oportunas.">
```

**META KEYWORDS:**
```html
<meta name="keywords" content="tiro bombeado Manzanillo, bomba de concreto Colima, servicio de concreto, entrega de concreto">
```

---

# 4. PÁGINA PRODUCTOS

**Archivo:** productos.html (NUEVA PÁGINA)
**Propósito:** Presentar catálogo completo de productos y guía de selección

---

## 4.1 COMPONENTE: Banner Interno

**Estado:** ✅ COMPLETO | 📸 REQUIERE IMAGEN DE FONDO

**IMAGEN DE FONDO REQUERIDA:** 📸
- Descripción: Concreto siendo mezclado o muestras de diferentes productos
- Especificaciones: 1920x400px

**TÍTULO:**
```
Catálogo de Productos
```

**BREADCRUMB:**
```
Inicio > Productos
```

---

## 4.2 COMPONENTE: Introducción

**Estado:** ✅ COMPLETO

**TÍTULO:**
```
El Concreto Adecuado para Cada Aplicación
```

**TEXTO:**
```
No todos los proyectos son iguales, y no todos requieren el mismo tipo de
concreto. En Conpre Concretos ofrecemos un catálogo completo de productos,
desde concretos de resistencia básica hasta soluciones especializadas de
ultra-alta resistencia, concretos para pavimentos y opciones personalizadas
con impermeabilizantes, resistencias rápidas y aditivos especiales.

Nuestro equipo técnico está disponible para asesorarte sin costo sobre cuál
es el producto ideal para tu proyecto, considerando factores como la aplicación
estructural, las condiciones del sitio y tus objetivos de tiempo y presupuesto.
```

---

## 4.3 COMPONENTE: Categoría 1 - Concreto por Resistencia (F'c)

**Ubicación:** Primera categoría de productos
**Tipo:** Tabla o grid de productos
**Estado:** ✅ COMPLETO

**TÍTULO DE CATEGORÍA:**
```
Concreto por Resistencia a la Compresión (F'c)
```

**DESCRIPCIÓN:**
```
El concreto F'c se mide por su resistencia a la compresión en kg/cm² a los 28 días.
Es el más utilizado para elementos estructurales como columnas, trabes, losas y cimientos.
```

---

**FORMATO DE PRESENTACIÓN:** Tabla o Cards

| Producto | Resistencia | Aplicaciones Típicas |
|----------|-------------|---------------------|
| **Concreto F'c 100 kg/cm²** | Baja resistencia | Rellenos, plantillas de nivelación, pisos no estructurales |
| **Concreto F'c 150 kg/cm²** | Resistencia moderada | Banquetas, guarniciones, firmes ligeros, contrapisos |
| **Concreto F'c 200 kg/cm²** | Resistencia estándar | Losas de vivienda, pisos residenciales, cimentaciones superficiales |
| **Concreto F'c 250 kg/cm²** | Resistencia media-alta | Columnas, trabes residenciales, losas de azotea, estructuras de 1-2 niveles |
| **Concreto F'c 300 kg/cm²** | Alta resistencia | Estructuras de varios niveles, cimentaciones profundas, edificios comerciales |
| **Concreto F'c 350 kg/cm²** | Muy alta resistencia | Edificios de altura, puentes, estructuras sometidas a cargas elevadas |
| **Concreto F'c 400 kg/cm²** | Resistencia premium | Infraestructura crítica, proyectos de ingeniería especializada |
| **Concreto F'c 500 kg/cm²** | Resistencia ultra-alta | Proyectos especiales de alta exigencia estructural |

---

## 4.4 COMPONENTE: Categoría 2 - Concreto para Pavimentos (MR)

**Estado:** ✅ COMPLETO

**TÍTULO DE CATEGORÍA:**
```
Concreto para Pavimentos (MR - Módulo de Ruptura)
```

**DESCRIPCIÓN:**
```
El concreto MR se mide por su resistencia a la flexión (kg/cm²) y está diseñado
específicamente para pavimentos, pisos industriales y superficies que soportan
tráfico vehicular.
```

---

| Producto | Módulo de Ruptura | Aplicación |
|----------|-------------------|------------|
| **Concreto MR 35** | 35 kg/cm² | Pavimentos ligeros, accesos peatonales, banquetas |
| **Concreto MR 38** | 38 kg/cm² | Pavimentos estándar, calles residenciales |
| **Concreto MR 40** | 40 kg/cm² | Pavimentos medianos, estacionamientos comerciales |
| **Concreto MR 42** | 42 kg/cm² | Pavimentos pesados, vías urbanas con tráfico constante |
| **Concreto MR 45** | 45 kg/cm² | Pavimentos industriales, naves, zonas de carga |
| **Concreto MR 48** | 48 kg/cm² | Pavimentos ultra-resistentes, zonas de alto tráfico pesado |

---

## 4.5 COMPONENTE: Categoría 3 - Otros Productos

**Estado:** ✅ COMPLETO

**TÍTULO DE CATEGORÍA:**
```
Otros Productos
```

---

### PRODUCTO: Mortero Fluido 80kg

**ICONO:** 🧱 (fa-fill-drip)

**DESCRIPCIÓN:**
```
Mortero auto-nivelante de alta fluidez. Ideal para rellenos, nivelaciones y
reparaciones. Fácil aplicación, sin necesidad de vibrado. Resistencia adecuada
para aplicaciones no estructurales.
```

**APLICACIONES:**
```
• Rellenos de cavidades
• Nivelación de pisos
• Reparaciones de superficies
• Relleno de espacios en instalaciones
```

---

## 4.6 COMPONENTE: Opciones de Personalización

**Ubicación:** Después del catálogo de productos
**Tipo:** Sección con opciones configurables
**Estado:** ✅ COMPLETO

**TÍTULO DE SECCIÓN:**
```
Personaliza Tu Concreto
```

**DESCRIPCIÓN:**
```
Además de elegir la resistencia adecuada, puedes personalizar tu concreto con
opciones de tiempo de fraguado y aditivos especiales según las necesidades de
tu proyecto.
```

---

### SUBSECCIÓN 1: Tiempos de Fraguado

**TÍTULO:**
```
Opciones de Tiempo de Fraguado
```

**OPCIONES (lista con checkmarks):**
- ✓ **Resistencia Normal (28 días)** - Estándar, costo optimizado
- ✓ **Resistencia Rápida 14 días** - Reducción de tiempos moderada
- ✓ **Resistencia Rápida 7 días** - Ideal para proyectos con plazos ajustados
- ✓ **Resistencia Rápida 3 días** - Obras urgentes, remodelaciones
- ✓ **Resistencia Rápida 2 días** - Proyectos express
- ✓ **Resistencia Rápida 1 día** - Ultra-rápida, situaciones críticas

**NOTA:**
```
Las resistencias rápidas utilizan aditivos acelerantes de fraguado SIKA.
Consulta con nuestro equipo técnico para determinar la opción ideal según
tu cronograma de obra.
```

---

### SUBSECCIÓN 2: Aditivos y Modificadores

**TÍTULO:**
```
Aditivos y Modificadores Disponibles
```

**OPCIONES (lista con checkmarks):**
- ✓ **Impermeabilizante Integral** - Para cisternas, cimientos, sótanos, contacto con agua
- ✓ **Fibra de Polipropileno** - Control de fisuras por contracción, mayor tenacidad
- ✓ **Grava 3/8"** - Granulometría específica para aplicaciones particulares
- ✓ **Color Integral** - Pigmentación del concreto (disponibilidad de colores por consultar)
- ✓ **Revenimiento Controlado 14cm** - Trabajabilidad media
- ✓ **Revenimiento Controlado 18cm** - Alta trabajabilidad para bombeo

---

## 4.7 COMPONENTE: Guía de Selección

**Ubicación:** Sección inferior
**Tipo:** Acordeón o tabs por tipo de proyecto
**Estado:** ✅ COMPLETO

**TÍTULO DE SECCIÓN:**
```
¿Cómo Elegir el Concreto Adecuado?
```

**SUBTÍTULO:**
```
Recomendaciones por tipo de proyecto
```

---

### GUÍA 1: Para Vivienda Residencial

**TÍTULO:**
```
Vivienda Residencial (1-2 niveles)
```

**RECOMENDACIONES:**
```
• Cimientos: F'c 200-250 kg/cm²
• Columnas y trabes: F'c 250-300 kg/cm²
• Losas: F'c 200-250 kg/cm²
• Pisos y firmes: F'c 150-200 kg/cm²
• Banquetas: F'c 150 kg/cm²

Opcional: Impermeabilizante integral en cimientos y cisternas
```

---

### GUÍA 2: Para Obra Comercial/Industrial

**TÍTULO:**
```
Obra Comercial e Industrial
```

**RECOMENDACIONES:**
```
• Estructuras (columnas, trabes): F'c 300-400 kg/cm²
• Pisos industriales: MR 45-48
• Estacionamientos: MR 40-42
• Cimentaciones: F'c 300-350 kg/cm²

Opcional: Resistencia rápida para reducir tiempos de obra
```

---

### GUÍA 3: Para Infraestructura

**TÍTULO:**
```
Infraestructura y Obra Pública
```

**RECOMENDACIONES:**
```
• Puentes y viaductos: F'c 350-400 kg/cm²
• Carreteras y vialidades: MR 40-48
• Obras hidráulicas: F'c 300-350 kg/cm² + impermeabilizante
• Túneles: Concreto lanzado con fibra

Consulta especificaciones técnicas del proyecto
```

---

## 4.8 COMPONENTE: Call to Action

**Estado:** ✅ COMPLETO

**TÍTULO:**
```
¿No Estás Seguro Qué Producto Necesitas?
```

**SUBTÍTULO:**
```
Nuestro equipo técnico te asesora sin costo
```

**BOTONES (2):**
1. "Solicitar Asesoría Técnica" → contact.html
2. "Ver Servicios de Entrega" → services.html

---

**NOTA IMPORTANTE (al pie de página):**
```
Los precios de nuestros productos se determinan según el tipo de concreto,
volumen requerido, ubicación del proyecto y especificaciones adicionales
(resistencia rápida, aditivos, tipo de entrega). Contáctanos para una
cotización personalizada y exacta.
```

---

## 4.9 SEO - PÁGINA PRODUCTOS

**Estado:** ✅ COMPLETO

**TITLE TAG:**
```html
<title>Productos - Catálogo de Concreto F'c y MR | Conpre Concretos Manzanillo</title>
```

**META DESCRIPTION:**
```html
<meta name="description" content="Catálogo completo de concreto premezclado: F'c 100-500 kg/cm², MR 35-48, morteros. Resistencia rápida, impermeabilizante, aditivos SIKA. Manzanillo, Colima.">
```

**META KEYWORDS:**
```html
<meta name="keywords" content="concreto f'c 250, concreto mr 40, mortero fluido, concreto resistencia rápida, precio concreto Manzanillo">
```

---

# 5. PÁGINA PROYECTOS

**Archivo:** project.html
**Propósito:** Mostrar portafolio de proyectos completados

---

## 5.1 COMPONENTE: Banner Interno

**Estado:** ✅ COMPLETO | 📸 REQUIERE IMAGEN DE FONDO

**IMAGEN DE FONDO REQUERIDA:** 📸
- Descripción: Obra en construcción o proyecto terminado
- Especificaciones: 1920x400px

**TÍTULO:**
```
Nuestros Proyectos
```

**BREADCRUMB:**
```
Inicio > Proyectos
```

---

## 5.2 COMPONENTE: Introducción

**Estado:** ✅ COMPLETO

**TÍTULO:**
```
10 Años Construyendo Manzanillo
```

**TEXTO:**
```
A lo largo de 10 años, hemos participado en cientos de proyectos en Manzanillo
y Colima, desde viviendas residenciales hasta infraestructura pública de gran escala.
Cada proyecto es un testimonio de nuestro compromiso con la calidad, puntualidad
y servicio profesional.
```

---

## 5.3 COMPONENTE: Galería de Proyectos

**Tipo:** Grid de proyectos (2-3 columnas)
**Estado:** ⚠️ 2 PROYECTOS COMPLETOS | ⚠️ REQUIERE 4-6 PROYECTOS ADICIONALES

---

### PROYECTO 1: Arking Diseño y Construcción

**Estado:** ✅ COMPLETO | 📸 REQUIERE IMAGEN

**IMAGEN REQUERIDA:** 📸
- Descripción: Proyecto Arking o camión de Conpre en sitio
- Especificaciones: 700x500px

**TÍTULO:**
```
Arking Diseño y Construcción
```

**UBICACIÓN:**
```
Venustiano Carranza, Manzanillo, Colima
```

**TIPO DE PROYECTO:**
```
Construcción Residencial
```

**DETALLES:**
```
Producto Suministrado: Concreto F'c 250 kg/cm², tiro directo
Volumen: 7 m³
Fecha de Ejecución: Noviembre 2025
```

**DESCRIPCIÓN (opcional, si tienen más info):**
```
Proyecto de construcción residencial en zona urbana de Manzanillo.
Suministro de concreto para elementos estructurales con especificación
F'c 250 kg/cm².
```

---

### PROYECTO 2: Club Deportivo CROM - ICCE Construcciones

**Estado:** ✅ COMPLETO | 📸 REQUIERE IMAGEN

**IMAGEN REQUERIDA:** 📸
- Descripción: Instalaciones del Club Deportivo CROM
- Especificaciones: 700x500px

**TÍTULO:**
```
Club Deportivo CROM
```

**CLIENTE:**
```
ICCE Construcciones
```

**UBICACIÓN:**
```
Manzanillo, Colima
```

**TIPO DE PROYECTO:**
```
Instalaciones Deportivas
```

**DETALLES:**
```
Productos Suministrados:
- Concreto F'c 200-350 kg/cm² (múltiples resistencias)
- Tiro bombeado con bombas de Conpre
- Resistencia rápida a 15 días
- Impermeabilizante integral en elementos específicos

Fecha de Ejecución: Septiembre 2025
```

**DESCRIPCIÓN:**
```
Proyecto de instalaciones deportivas que requirió soluciones especializadas
de concreto con diferentes resistencias, bombeo de precisión y resistencia
rápida para cumplir con el cronograma de obra.
```

---

### PROYECTOS 3-8

⚠️ **PENDIENTE DE CONPRE:** Necesitamos 4-6 proyectos adicionales con la siguiente información:

**DATOS REQUERIDOS POR PROYECTO:**
- Nombre del proyecto o cliente (si tienen permiso de publicar)
- Ubicación (zona de Manzanillo o ciudad)
- Tipo de proyecto (residencial, comercial, industrial, público)
- Tipo de concreto suministrado
- Volumen aproximado (opcional)
- Fecha (mes y año)
- 1 fotografía del proyecto (700x500px)
- Breve descripción (2-3 líneas - opcional)

**SUGERENCIAS DE PROYECTOS PARA INCLUIR:**
- Desarrollo residencial (fraccionamiento)
- Obra pública (carretera, puente, edificio gubernamental)
- Proyecto comercial (plaza, centro comercial, nave industrial)
- Autoconstrucción destacada (vivienda unifamiliar con características especiales)
- Proyecto con bombeo especializado (edificio de varios niveles)
- Proyecto con concreto MR (pavimento, estacionamiento)

---

## 5.4 COMPONENTE: Tipos de Proyectos Atendidos

**Ubicación:** Después de galería
**Tipo:** Grid de 4 categorías
**Estado:** ✅ COMPLETO

**TÍTULO DE SECCIÓN:**
```
Tipos de Proyectos que Atendemos
```

---

### CATEGORÍA 1: Autoconstrucción

**ICONO:** 🏠 (fa-home)
**TÍTULO:**
```
Autoconstrucción
```
**DESCRIPCIÓN:**
```
• Viviendas individuales
• Ampliaciones y remodelaciones
• Garages, cisternas, albercas
• Asesoría personalizada para constructores particulares
```

---

### CATEGORÍA 2: Desarrollos Residenciales

**ICONO:** 🏘️ (fa-city)
**TÍTULO:**
```
Desarrollos Residenciales
```
**DESCRIPCIÓN:**
```
• Conjuntos habitacionales
• Fraccionamientos
• Edificios departamentales
• Coordinación con desarrolladoras
```

---

### CATEGORÍA 3: Obra Pública

**ICONO:** 🏛️ (fa-landmark)
**TÍTULO:**
```
Obra Pública
```
**DESCRIPCIÓN:**
```
• Infraestructura vial (carreteras, vialidades)
• Edificios gubernamentales
• Proyectos de servicios públicos
• Cumplimiento de especificaciones técnicas rigurosas
```

---

### CATEGORÍA 4: Obra Comercial e Industrial

**ICONO:** 🏭 (fa-industry)
**TÍTULO:**
```
Obra Comercial e Industrial
```
**DESCRIPCIÓN:**
```
• Naves industriales
• Centros comerciales y plazas
• Almacenes y bodegas
• Pisos industriales de alta resistencia
```

---

## 5.5 COMPONENTE: Call to Action

**Estado:** ✅ COMPLETO

**TÍTULO:**
```
¿Tienes un Proyecto en Mente?
```

**SUBTÍTULO:**
```
Cotiza tu proyecto con nosotros, sin compromiso
```

**BOTÓN:**
- Texto: "Solicitar Cotización"
- Link: contact.html

---

## 5.6 SEO - PÁGINA PROYECTOS

**Estado:** ✅ COMPLETO

**TITLE TAG:**
```html
<title>Proyectos - Conpre Concretos | Portafolio de Obras en Manzanillo</title>
```

**META DESCRIPTION:**
```html
<meta name="description" content="Portafolio de proyectos: autoconstrucción, desarrollos residenciales, obra pública en Manzanillo y Colima. Más de 10 años de experiencia.">
```

**META KEYWORDS:**
```html
<meta name="keywords" content="proyectos de concreto Manzanillo, obras realizadas Conpre, construcción Colima, portafolio concreto">
```

---

# 6. PÁGINA CONTACTO

**Archivo:** contact.html
**Propósito:** Facilitar contacto y cotizaciones

---

## 6.1 COMPONENTE: Banner Interno

**Estado:** ✅ COMPLETO | 📸 REQUIERE IMAGEN DE FONDO

**IMAGEN DE FONDO REQUERIDA:** 📸
- Descripción: Oficinas de Conpre o imagen de contacto/comunicación
- Especificaciones: 1920x400px

**TÍTULO:**
```
Contáctanos
```

**BREADCRUMB:**
```
Inicio > Contacto
```

---

## 6.2 COMPONENTE: Introducción

**Estado:** ✅ COMPLETO

**TÍTULO:**
```
Estamos Listos para Atender tu Proyecto
```

**TEXTO:**
```
Contáctanos por el medio de tu preferencia. Nuestro equipo está disponible
para brindarte asesoría técnica, resolver tus dudas y generarte una cotización
personalizada sin compromiso.
```

---

## 6.3 COMPONENTE: Información de Contacto

**Ubicación:** Lado izquierdo de la página
**Tipo:** Lista de datos de contacto con iconos
**Estado:** ⚠️ REQUIERE DATOS DE CONPRE

---

### DIRECCIÓN

**ICONO:** 📍 (fa-map-marker-alt)
**TÍTULO:**
```
Oficinas
```
**TEXTO:**
```
Camino a Aguas Negras S/N
Manzanillo, Colima, México
C.P. [PENDIENTE]
```

⚠️ **PENDIENTE:** Código postal

---

### TELÉFONO

**ICONO:** 📞 (fa-phone)
**TÍTULO:**
```
Teléfono
```
**TEXTO:**
```
[TELÉFONO FIJO - PENDIENTE]
```

⚠️ **PENDIENTE:** Número de teléfono fijo de Conpre

---

### WHATSAPP

**ICONO:** 💬 (fa-whatsapp)
**TÍTULO:**
```
WhatsApp
```
**TEXTO:**
```
[WHATSAPP BUSINESS - PENDIENTE]
```
**BOTÓN:**
- Texto: "Enviar Mensaje"
- Link: https://wa.me/52[NÚMERO]

⚠️ **PENDIENTE:** Número de WhatsApp Business (10 dígitos sin espacios)

---

### EMAIL

**ICONO:** ✉️ (fa-envelope)
**TÍTULO:**
```
Email
```
**TEXTO:**
```
[EMAIL - PENDIENTE]
```
**SUGERENCIAS:**
- info@conpreconcretos.com
- ventas@conpreconcretos.com
- cotizaciones@conpreconcretos.com

⚠️ **PENDIENTE:** Email corporativo de Conpre

---

### HORARIOS

**ICONO:** ⏰ (fa-clock)
**TÍTULO:**
```
Horario de Atención
```
**TEXTO:**
```
Lunes a Viernes: 8:00 AM - 6:00 PM
Sábado: 8:00 AM - 2:00 PM
Domingo: Cerrado
```

**NOTA ADICIONAL:**
```
Para entregas de concreto en horarios especiales,
contáctanos con anticipación.
```

---

## 6.4 COMPONENTE: Formulario de Contacto

**Ubicación:** Lado derecho de la página
**Tipo:** Formulario HTML con validación
**Estado:** ✅ COMPLETO (estructura) | ⚠️ REQUIERE CONFIGURACIÓN BACKEND

**TÍTULO DEL FORMULARIO:**
```
Solicita tu Cotización
```

**TEXTO INTRODUCTORIO:**
```
Completa el siguiente formulario con los detalles de tu proyecto y uno de
nuestros asesores se pondrá en contacto contigo dentro de las próximas 24
horas hábiles.
```

---

### CAMPOS DEL FORMULARIO:

**CAMPO 1: Nombre Completo**
- Tipo: text
- Placeholder: "Ej: Juan Pérez García"
- Requerido: Sí
- Validación: Mínimo 3 caracteres

**CAMPO 2: Email**
- Tipo: email
- Placeholder: "tucorreo@ejemplo.com"
- Requerido: Sí
- Validación: Formato de email válido

**CAMPO 3: Teléfono**
- Tipo: tel
- Placeholder: "314 123 4567"
- Requerido: Sí
- Validación: 10 dígitos

**CAMPO 4: Tipo de Proyecto**
- Tipo: select (dropdown)
- Requerido: Sí
- Opciones:
  - "Selecciona una opción" (valor vacío, por defecto)
  - "Autoconstrucción"
  - "Desarrollo Residencial"
  - "Obra Pública"
  - "Obra Comercial/Industrial"
  - "Otro"

**CAMPO 5: Ubicación del Proyecto**
- Tipo: text
- Placeholder: "Ej: Zona Centro, Manzanillo"
- Requerido: Sí

**CAMPO 6: Volumen Estimado (m³)**
- Tipo: number
- Placeholder: "Ej: 10"
- Requerido: No (opcional)
- Nota debajo del campo: "(Aproximado, si lo conoces)"

**CAMPO 7: Mensaje / Detalles del Proyecto**
- Tipo: textarea
- Placeholder: "Describe tu proyecto: tipo de concreto que necesitas, fecha estimada de entrega, detalles adicionales..."
- Requerido: Sí
- Validación: Mínimo 20 caracteres
- Filas: 5

**BOTÓN DE ENVÍO:**
- Texto: "Enviar Solicitud"
- Estilo: Botón destacado con color Conpre
- Acción: Submit del formulario

---

**NOTA IMPORTANTE (debajo del formulario):**
```
⚠️ Este formulario NO genera cotizaciones automáticas. Nuestro equipo se
pondrá en contacto contigo dentro de 24 horas hábiles para brindarte una
cotización personalizada que considere todos los detalles de tu proyecto.
```

---

**CONFIGURACIÓN BACKEND REQUERIDA:**

⚠️ **PENDIENTE:** Configurar destino del formulario
- Opción A: Email directo via PHP mail() → enviar a info@conpreconcretos.com
- Opción B: Servicio de terceros (FormSpree, Netlify Forms, etc.)
- Opción C: Backend personalizado con base de datos

---

## 6.5 COMPONENTE: Google Maps

**Ubicación:** Sección inferior de la página
**Tipo:** Iframe de Google Maps embebido
**Estado:** ⚠️ REQUIERE COORDENADAS EXACTAS

**TÍTULO DE SECCIÓN:**
```
Encuéntranos
```

**MAPA:**

⚠️ **PENDIENTE:** Necesitamos las coordenadas GPS exactas de:
- Camino a Aguas Negras S/N, Manzanillo, Colima

**INSTRUCCIONES PARA CONPRE:**
1. Ir a Google Maps
2. Buscar la dirección exacta de las oficinas/planta
3. Click derecho en el punto exacto → "¿Qué hay aquí?"
4. Copiar las coordenadas que aparecen (ejemplo: 19.0545, -104.3186)
5. Enviarnos esas coordenadas

**CÓDIGO DEL IFRAME (placeholder):**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d[COORDENADAS]"
  width="100%"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

## 6.6 COMPONENTE: Sección de Cobertura

**Ubicación:** Debajo del mapa
**Tipo:** Texto informativo
**Estado:** ✅ COMPLETO

**TÍTULO:**
```
Área de Cobertura
```

**TEXTO:**
```
Atendemos proyectos en un radio de aproximadamente 30 kilómetros desde
nuestras plantas de producción, cubriendo Manzanillo y comunidades cercanas
en Colima.

Si tu proyecto está fuera de esta área, contáctanos para evaluar la
factibilidad de entrega.
```

---

## 6.7 COMPONENTE: Call to Action Secundario

**Ubicación:** Final de página
**Tipo:** CTA con opciones de contacto directo
**Estado:** ⚠️ REQUIERE DATOS

**TÍTULO:**
```
¿Prefieres Llamar Directamente?
```

**TEXTO:**
```
Nuestro equipo está disponible para atenderte
```

**BOTONES (2):**

**BOTÓN 1:**
- Texto: "📞 Llamar Ahora"
- Link: tel:[TELÉFONO]
- Estilo: Botón con ícono de teléfono

**BOTÓN 2:**
- Texto: "💬 WhatsApp"
- Link: https://wa.me/52[WHATSAPP]
- Estilo: Botón verde WhatsApp

⚠️ **PENDIENTE:** Números de teléfono y WhatsApp

---

## 6.8 SEO - PÁGINA CONTACTO

**Estado:** ✅ COMPLETO

**TITLE TAG:**
```html
<title>Contacto - Conpre Concretos | Solicita tu Cotización en Manzanillo</title>
```

**META DESCRIPTION:**
```html
<meta name="description" content="Contacta a Conpre Concretos en Manzanillo. Camino a Aguas Negras S/N. Solicita cotización para tu proyecto. Atención personalizada.">
```

**META KEYWORDS:**
```html
<meta name="keywords" content="cotizar concreto Manzanillo, contacto Conpre, proveedor concreto Colima, solicitar concreto">
```

---

# 7. COMPONENTES GLOBALES

**Elementos que aparecen en todas las páginas**

---

## 7.1 COMPONENTE: Header / Encabezado

**Ubicación:** Parte superior de todas las páginas
**Estado:** ✅ COMPLETO (estructura) | ⚠️ REQUIERE DATOS | 📸 REQUIERE LOGO

---

### TOP BAR (Barra Superior)

**LADO IZQUIERDO:**
```
10 años de experiencia en concreto premezclado
```

**LADO DERECHO:**

**Elemento 1:**
- Icono: 📍 (fa-map-marker-alt)
- Texto: "Camino a Aguas Negras S/N, Manzanillo, Colima"

**Elemento 2:**
- Icono: ✉️ (fa-envelope)
- Texto: "[EMAIL - PENDIENTE]"
- Link: mailto:[EMAIL]

⚠️ **PENDIENTE:** Email corporativo

---

### LOGO

**UBICACIÓN:** Centro-izquierda del header principal

📸 **REQUIERE LOGO DE CONPRE:**
- Formato: PNG con transparencia
- Versiones necesarias:
  - **Logo a color:** Para header con fondo blanco (logo.png)
  - **Logo blanco:** Para header sticky con fondo oscuro (logo-white.png)
  - **Logo negro:** Para footer (logo-black.png)
- Dimensiones recomendadas: 200-250px ancho, alto proporcional
- Fuente: Extraer de Logo_CONCRETOS CONPRE.pdf

**ACCIÓN NECESARIA:**
- Extraer logo del PDF
- Crear versiones en PNG (color, blanco, negro)
- Optimizar para web

---

### MENÚ DE NAVEGACIÓN

**ESTRUCTURA:**

**Item 1:** Inicio
- Link: index.html

**Item 2:** Nosotros
- Link: about.html

**Item 3:** Servicios
- Link: services.html

**Item 4:** Productos
- Link: productos.html

**Item 5:** Proyectos
- Link: project.html

**Item 6:** Contacto
- Link: contact.html

---

### BOTÓN CTA EN HEADER

**TEXTO:**
```
Cotizar Proyecto
```
**LINK:** contact.html
**ESTILO:** Botón destacado con color Conpre (verde o azul)

---

## 7.2 COMPONENTE: Footer / Pie de Página

**Ubicación:** Final de todas las páginas
**Tipo:** Footer de 4 columnas
**Estado:** ✅ COMPLETO (estructura) | ⚠️ REQUIERE DATOS | 📸 REQUIERE LOGO

---

### COLUMNA 1: Sobre Conpre

**LOGO:** 📸
- Logo de Conpre (versión oscura/negra)
- Tamaño: 150-180px ancho

**TEXTO:**
```
Conpre Concretos es una empresa 100% manzanillense con 10 años de
experiencia en la producción y entrega de concreto premezclado de
calidad certificada.
```

**REDES SOCIALES:**

⚠️ **PENDIENTE:** Confirmar si Conpre tiene redes sociales activas

Si tienen redes, incluir iconos con links a:
- 📘 Facebook: [URL - PENDIENTE]
- 📷 Instagram: [URL - PENDIENTE]
- 💼 LinkedIn: [URL - PENDIENTE] (opcional)

Si NO tienen redes, omitir esta subsección.

---

### COLUMNA 2: Enlaces Rápidos

**TÍTULO:**
```
Enlaces Rápidos
```

**LISTA DE ENLACES:**
- Inicio → index.html
- Nosotros → about.html
- Servicios → services.html
- Productos → productos.html
- Proyectos → project.html
- Contacto → contact.html

---

### COLUMNA 3: Nuestros Productos

**TÍTULO:**
```
Nuestros Productos
```

**LISTA DE ENLACES:**
- Concreto F'c → productos.html#fc
- Concreto MR → productos.html#mr
- Mortero Fluido → productos.html#mortero
- Servicio de Bombeo → services.html#bombeado

---

### COLUMNA 4: Contacto

**TÍTULO:**
```
Contacto
```

**INFORMACIÓN:**

**Dirección:**
- Icono: 📍
- Texto: "Camino a Aguas Negras S/N, Manzanillo, Colima"

**Teléfono:**
- Icono: 📞
- Texto: "[TELÉFONO - PENDIENTE]"
- Link: tel:[TELÉFONO]

⚠️ **PENDIENTE:** Teléfono

**WhatsApp:**
- Icono: 💬
- Texto: "[WHATSAPP - PENDIENTE]"
- Link: https://wa.me/52[NÚMERO]

⚠️ **PENDIENTE:** WhatsApp

**Email:**
- Icono: ✉️
- Texto: "[EMAIL - PENDIENTE]"
- Link: mailto:[EMAIL]

⚠️ **PENDIENTE:** Email

---

### COPYRIGHT BAR

**UBICACIÓN:** Barra inferior del footer (fondo más oscuro)

**TEXTO:**
```
© 2025 Conpre Concretos. Todos los derechos reservados.
```

**CRÉDITO DESARROLLO:**
```
Desarrollado por Teseo Data Lab
```

**OPCIONAL - Links legales (si aplican):**
- Aviso de Privacidad
- Términos y Condiciones

---

## 7.3 COMPONENTE: Mobile Menu (Menú Móvil)

**Estado:** ✅ COMPLETO (estructura heredada de plantilla)

**FUNCIONALIDAD:**
- Hamburger menu icon (☰)
- Slide-in menu lateral
- Mismos items que menú desktop
- Logo de Conpre en la parte superior
- Botón de cerrar (×)

**CONTENIDO:**
- Mismo contenido que menú de navegación desktop
- Adaptado para dispositivos móviles

---

# 8. SEO Y METADATOS

**Elementos técnicos de optimización**

---

## 8.1 Schema Markup - LocalBusiness

**Ubicación:** En el `<head>` de TODAS las páginas
**Tipo:** JSON-LD
**Estado:** ⚠️ REQUIERE DATOS COMPLETOS

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Conpre Concretos",
  "description": "Empresa de producción y entrega de concreto premezclado en Manzanillo, Colima",
  "url": "https://www.conpreconcretos.com",
  "telephone": "[PENDIENTE]",
  "email": "[PENDIENTE]",
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
  "image": "https://www.conpreconcretos.com/assets/img/logo.png",
  "priceRange": "$$",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "[PENDIENTE]",
      "longitude": "[PENDIENTE]"
    },
    "geoRadius": "30000"
  }
}
</script>
```

⚠️ **PENDIENTES:**
- Teléfono
- Email
- Código postal
- Coordenadas GPS (latitud y longitud)
- URL del dominio definitivo

---

## 8.2 Google Analytics

**Estado:** ⚠️ PENDIENTE CONFIGURACIÓN

**ACCIÓN NECESARIA:**
1. Crear cuenta de Google Analytics para Conpre
2. Obtener ID de seguimiento (formato: G-XXXXXXXXXX)
3. Implementar código de tracking en todas las páginas

**CÓDIGO A INSERTAR (antes de `</head>`):**
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

⚠️ **PENDIENTE:** ID de Google Analytics

---

## 8.3 Google Search Console

**Estado:** ⚠️ PENDIENTE CONFIGURACIÓN

**ACCIÓN NECESARIA POST-LANZAMIENTO:**
1. Crear cuenta en Google Search Console
2. Verificar propiedad del sitio
3. Enviar sitemap.xml
4. Monitorear indexación y errores

---

## 8.4 Favicon

**Estado:** 📸 REQUIERE GENERACIÓN

📸 **ACCIÓN NECESARIA:**
1. Usar logo de Conpre (o ícono simplificado)
2. Generar favicons en todos los tamaños necesarios:
   - favicon.ico (16x16, 32x32)
   - apple-touch-icon.png (180x180)
   - android-icon.png (192x192)
   - favicon-32x32.png
   - favicon-16x16.png
3. Reemplazar archivos en: `assets/img/favicons/`

**HERRAMIENTA RECOMENDADA:**
https://realfavicongenerator.net/

---

## 8.5 Sitemap.xml

**Estado:** ⚠️ PENDIENTE GENERACIÓN

**ACCIÓN NECESARIA:**
Generar sitemap.xml con las 6 páginas del sitio:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.conpreconcretos.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.conpreconcretos.com/about.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.conpreconcretos.com/services.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.conpreconcretos.com/productos.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.conpreconcretos.com/project.html</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.conpreconcretos.com/contact.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

⚠️ **PENDIENTE:** URL del dominio definitivo

---

## 8.6 Robots.txt

**Estado:** ⚠️ PENDIENTE GENERACIÓN

**CONTENIDO SUGERIDO:**
```
User-agent: *
Allow: /

Sitemap: https://www.conpreconcretos.com/sitemap.xml
```

⚠️ **PENDIENTE:** URL del dominio definitivo

---

# 9. RESUMEN DE PENDIENTES

**Datos críticos que necesitamos de Conpre para completar el sitio:**

---

## 9.1 DATOS DE CONTACTO (ALTA PRIORIDAD)

- [ ] **Teléfono fijo** de oficinas
- [ ] **WhatsApp Business** (número de 10 dígitos)
- [ ] **Email corporativo** (sugerencia: info@conpreconcretos.com)
- [ ] **Código postal** de la dirección
- [ ] **Coordenadas GPS exactas** (latitud y longitud para Google Maps)

---

## 9.2 INFORMACIÓN COMPLEMENTARIA (MEDIA PRIORIDAD)

- [ ] **Redes sociales:** ¿Tienen Facebook, Instagram, LinkedIn? (URLs si existen)
- [ ] **Formas de pago aceptadas:** Efectivo, transferencia, cheque, crédito, etc.
- [ ] **Vigencia de cotizaciones:** ¿Cuántos días son válidas las cotizaciones?
- [ ] **Políticas de tiempos de espera:** ¿Costos adicionales si el sitio no está listo?
- [ ] **Certificaciones específicas:** ¿Tienen certificaciones o membresías? (AMCI, Cámara de Comercio, etc.)

---

## 9.3 CONTENIDOS ADICIONALES (DESEABLE)

- [ ] **Proyectos destacados:** 4-6 proyectos adicionales con:
  - Nombre del proyecto/cliente
  - Ubicación
  - Tipo de proyecto
  - Tipo de concreto suministrado
  - Fecha
  - 1 foto por proyecto (700x500px)
  - Permiso de publicación

- [ ] **Testimonios de clientes:** 3-5 testimonios reales (nombres pueden ser anónimos si prefieren)

- [ ] **Estadísticas adicionales** (si tienen):
  - Número total de proyectos completados
  - Metros cúbicos entregados en 10 años
  - Número de clientes atendidos

---

## 9.4 IMÁGENES REQUERIDAS (ALTA PRIORIDAD)

📸 **TOTAL: 19-25 fotografías necesarias**

**POR PÁGINA:**

**Inicio (6-7 fotos):**
- [ ] 3 imágenes hero slider (1920x1080px cada una)
- [ ] 1 imagen sección "Por qué Conpre" (800x600px)
- [ ] 3 imágenes preview servicios (600x400px cada una)

**Nosotros (3-4 fotos):**
- [ ] 1 imagen banner interno (1920x400px)
- [ ] 1 imagen "Quiénes somos" (700x500px)
- [ ] 1 imagen plantas de producción (500x350px)
- [ ] 1 imagen flota de camiones (500x350px)
- [ ] 1 imagen equipo humano (500x350px) - OPCIONAL

**Servicios (4 fotos):**
- [ ] 1 imagen banner interno (1920x400px)
- [ ] 1 imagen tiro directo (800x500px)
- [ ] 1 imagen tiro bombeado (800x500px)
- [ ] 1 imagen tiro lanzado (800x500px) - puede ser ilustrativa

**Productos (1 foto):**
- [ ] 1 imagen banner interno (1920x400px)

**Proyectos (6-10 fotos):**
- [ ] 1 imagen banner interno (1920x400px)
- [ ] 1 foto proyecto Arking (700x500px)
- [ ] 1 foto Club Deportivo CROM (700x500px)
- [ ] 4-6 fotos proyectos adicionales (700x500px cada una)

**Contacto (1 foto):**
- [ ] 1 imagen banner interno (1920x400px)

---

## 9.5 BRANDING (CRÍTICO)

📸 **Logo de Conpre:**
- [ ] Logo en formato PNG con transparencia
- [ ] 3 versiones necesarias:
  - Logo a color (para header con fondo claro)
  - Logo blanco (para header sticky con fondo oscuro)
  - Logo negro/oscuro (para footer)
- Fuente: Logo_CONCRETOS CONPRE.pdf
- Acción: Extraer y convertir

**Paleta de Colores:**
- [ ] Confirmar colores exactos de la marca (verde, azul, dorado, rojo)
- [ ] Códigos hexadecimales (#XXXXXX) de cada color
- Sugerencia: Si no tienen códigos exactos, podemos extraerlos del logo

---

## 9.6 INFRAESTRUCTURA WEB (PENDIENTE DECISIÓN)

- [ ] **Dominio:** ¿Qué dominio prefieren?
  - Opción 1: conpreconcretos.com
  - Opción 2: conpre.mx
  - Opción 3: conpremanzanillo.com
  - Otra sugerencia:

- [ ] **Hosting:** Confirmar contratación
  - Recomendación: HostGator Plan Emprendedor (~$551.25 MXN/año)
  - ¿Proceder con esta opción o tienen otra preferencia?

- [ ] **Emails corporativos:** ¿Qué cuentas necesitan?
  - info@[dominio]
  - ventas@[dominio]
  - cotizaciones@[dominio]
  - Otras:

- [ ] **Google Analytics:** ¿Tienen cuenta o creamos una nueva?

---

# 10. PRÓXIMOS PASOS

**Flujo de trabajo recomendado:**

---

## FASE 1: VALIDACIÓN DE CONTENIDOS (AHORA)

**ACCIÓN DE CONPRE:**
1. Revisar este documento completo
2. Validar que todos los textos sean correctos (misión, visión, valores, descripciones)
3. Confirmar números y datos técnicos (capacidades, equipos, años de experiencia)
4. Aprobar o solicitar cambios en redacción

**TIEMPO ESTIMADO:** 2-3 días

---

## FASE 2: RECOPILACIÓN DE PENDIENTES (PRIORITARIO)

**ACCIÓN DE CONPRE:**
1. Proporcionar DATOS DE CONTACTO (teléfono, WhatsApp, email, coordenadas GPS)
2. Proporcionar o tomar FOTOGRAFÍAS necesarias (ver checklist sección 9.4)
3. Proporcionar LOGO en PNG (o autorizar extracción del PDF)
4. Proporcionar información de PROYECTOS ADICIONALES (4-6 proyectos)
5. Decidir sobre DOMINIO web

**TIEMPO ESTIMADO:** 1 semana

---

## FASE 3: IMPLEMENTACIÓN EN HTML (TESEO)

**ACCIÓN DE TESEO:**
1. Extraer y preparar logo
2. Personalizar colores de la plantilla según branding Conpre
3. Implementar todos los contenidos en las páginas HTML
4. Optimizar imágenes
5. Configurar SEO (meta tags, schema markup)
6. Configurar formulario de contacto
7. Integrar Google Maps

**TIEMPO ESTIMADO:** 2 semanas

---

## FASE 4: TESTING Y AJUSTES (TESEO)

**ACCIÓN DE TESEO:**
1. Testing de responsividad (desktop, tablet, mobile)
2. Testing de navegación (todos los links funcionando)
3. Testing de formulario
4. Validación de HTML (W3C)
5. Testing de velocidad (PageSpeed Insights)
6. Corrección de bugs

**TIEMPO ESTIMADO:** 1 semana

---

## FASE 5: VALIDACIÓN FINAL Y AJUSTES (CONPRE + TESEO)

**ACCIÓN CONJUNTA:**
1. Presentación del sitio completo a Conpre
2. Revisión y feedback
3. Ajustes finales según comentarios
4. Aprobación final

**TIEMPO ESTIMADO:** 3-5 días

---

## FASE 6: LANZAMIENTO (TESEO)

**ACCIÓN DE TESEO:**
1. Contratación de dominio y hosting (con datos de Conpre)
2. Configuración de SSL (HTTPS)
3. Migración del sitio a servidor de producción
4. Configuración de emails corporativos
5. Configuración de Google Analytics
6. Configuración de Google Search Console
7. Envío de sitemap
8. Go-Live

**TIEMPO ESTIMADO:** 3-5 días

---

## FASE 7: MONITOREO POST-LANZAMIENTO (TESEO)

**ACCIÓN DE TESEO:**
1. Monitoreo de funcionamiento (48-72 horas)
2. Ajustes menores si se requieren
3. Capacitación básica a Conpre (si aplica)
4. Entrega de documentación y credenciales

**TIEMPO ESTIMADO:** 1 semana

---

## TIMELINE TOTAL ESTIMADO

**Si Conpre proporciona pendientes en 1 semana:**
- Total: 5-6 semanas desde validación de contenidos hasta lanzamiento

**Si hay retrasos en entrega de pendientes:**
- El timeline se extenderá proporcionalmente

---

# 11. FORMATO DE ENTREGA DE PENDIENTES

**Para facilitar la recopilación, sugerimos este formato:**

---

## PLANTILLA PARA CONPRE (COPIAR Y LLENAR)

```
=== DATOS DE CONTACTO ===

Teléfono Fijo:
WhatsApp Business:
Email Corporativo:
Código Postal:
Coordenadas GPS (latitud, longitud):

=== REDES SOCIALES ===

Facebook: [URL o "No tenemos"]
Instagram: [URL o "No tenemos"]
LinkedIn: [URL o "No tenemos"]

=== INFORMACIÓN OPERATIVA ===

Formas de pago aceptadas:
Vigencia de cotizaciones (días):
Certificaciones/Membresías: [Listar o "Ninguna actualmente"]

=== PROYECTOS ADICIONALES ===

PROYECTO 3:
- Nombre/Cliente:
- Ubicación:
- Tipo:
- Concreto suministrado:
- Volumen (opcional):
- Fecha:
- Foto disponible: [Sí/No]

PROYECTO 4:
- Nombre/Cliente:
- Ubicación:
- Tipo:
- Concreto suministrado:
- Volumen (opcional):
- Fecha:
- Foto disponible: [Sí/No]

[Repetir para proyectos 5 y 6 si los tienen]

=== ESTADÍSTICAS ADICIONALES (opcional) ===

Proyectos totales completados:
Metros cúbicos entregados (total aproximado):
Número de clientes atendidos:

=== TESTIMONIOS (opcional) ===

Testimonio 1:
- Nombre del cliente:
- Proyecto:
- Testimonio: "..."
- ¿Podemos publicar su nombre?: [Sí/No/Anónimo]

[Repetir para 2-3 testimonios más]

=== DECISIONES WEB ===

Dominio preferido:
Hosting: [HostGator recomendado o tienen otra preferencia]
Emails corporativos necesarios:

=== PALETA DE COLORES (si tienen códigos exactos) ===

Verde: #
Azul: #
Dorado: #
Rojo: #
[Si no tienen códigos, escribir "Extraer del logo"]
```

---

# FIN DEL DOCUMENTO DE VALIDACIÓN

---

**RESUMEN EJECUTIVO:**

✅ **COMPLETO Y LISTO:**
- Todos los textos (misión, visión, valores, descripciones, CTAs)
- Estructura de las 6 páginas
- SEO (meta tags, keywords, descriptions)
- Componentes globales (header, footer, navegación)
- FAQs y propuestas de valor

⚠️ **PENDIENTE DE CONPRE:**
- Datos de contacto (teléfono, WhatsApp, email, coordenadas)
- Logo en PNG (extraer de PDF)
- 19-25 fotografías
- 4-6 proyectos adicionales
- Información complementaria (redes sociales, formas de pago, etc.)
- Decisión sobre dominio

📸 **IMÁGENES CRÍTICAS:**
- Logo (3 versiones)
- 6-7 fotos homepage
- 3-4 fotos página Nosotros
- 4 fotos página Servicios
- 6-10 fotos página Proyectos
- Banners internos

**TIEMPO TOTAL ESTIMADO HASTA LANZAMIENTO:** 5-6 semanas (dependiente de velocidad de entrega de pendientes por Conpre)

---

**PRÓXIMA ACCIÓN INMEDIATA:**

1. **Conpre revisa este documento** (2-3 días)
2. **Conpre proporciona datos de contacto y logo** (URGENTE - 1 semana)
3. **Teseo inicia implementación** (en paralelo con recopilación de fotos)

---

**DOCUMENTO GENERADO POR:** Teseo Data Lab - Consultoría de Desarrollo Web
**FECHA:** 15 de Noviembre de 2025
**VERSIÓN:** 1.0 - Documento de Validación Completo
**PARA:** Conpre Concretos (Janet Rodríguez, José Luis Rodríguez)
**ESTADO:** Listo para revisión y aprobación
