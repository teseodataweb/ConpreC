# Configurar Eventos Clave (Conversiones) en GA4

**Propiedad:** Conpre Concretos (G-HPNQDJCTML)
**Cuenta:** TESEO DATA LAB

---

## Pasos para marcar eventos como conversiones

### 1. Acceder al panel de Google Analytics 4
- Ir a https://analytics.google.com
- Seleccionar la propiedad **Conpre Concretos**

### 2. Navegar a la configuracion de eventos
- En el menu lateral izquierdo, ir a **Administrar** (icono de engranaje)
- En la columna de Propiedad, hacer clic en **Eventos**

### 3. Marcar los siguientes eventos como "Evento clave"
Buscar cada evento en la lista y activar el toggle de **"Marcar como evento clave"**:

| Evento | Descripcion | Prioridad |
|---|---|---|
| **form_submit** | Envio exitoso del formulario de cotizacion | ALTA |
| **generate_lead** | Lead generado (evento recomendado de GA4) | ALTA |
| **click_phone** | Clic en enlace de telefono | ALTA |
| **click_whatsapp** | Clic en boton de WhatsApp | ALTA |

### 4. Verificar en Tiempo Real
- Ir a **Informes > Tiempo real**
- Abrir el sitio web en otra pestana
- Hacer clic en el boton de WhatsApp o telefono
- Verificar que el evento aparece en la seccion "Eventos clave" del informe en tiempo real

---

## Notas
- Los eventos `form_submit` y `generate_lead` se disparan unicamente cuando el formulario se envia exitosamente (post-respuesta del servidor)
- El evento `form_start` se dispara cuando el usuario hace focus por primera vez en cualquier campo del formulario
- Estos cambios se reflejan en los reportes de GA4 despues de 24-48 horas
- Una vez marcados como eventos clave, los reportes de Adquisicion mostraran las conversiones por canal
