<?php
// Cargar PHPMailer
require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // =====================================================
    // CONFIGURACIÓN SMTP - EDITAR ESTOS VALORES
    // =====================================================
    $smtp_host = "mail.conpreconcretos.com";  // o el servidor SMTP de tu hosting
    $smtp_port = 465;                          // Puerto SSL (465) o TLS (587)
    $smtp_secure = "ssl";                      // "ssl" para puerto 465, "tls" para 587
    $smtp_user = "contacto@conpreconcretos.com";
    $smtp_pass = "He^PH,9a*ZrW";

    $to_email = "contacto@conpreconcretos.com";
    // =====================================================

    // Recopilar y limpiar datos del formulario
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $project_type = htmlspecialchars(trim($_POST["project_type"]));
    $service_type = isset($_POST["service_type"]) ? htmlspecialchars(trim($_POST["service_type"])) : "No especificado";
    $location = htmlspecialchars(trim($_POST["location"]));
    $volume = isset($_POST["volume"]) ? htmlspecialchars(trim($_POST["volume"])) : "No especificado";
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validar campos obligatorios
    if (empty($name) || empty($email) || empty($phone) || empty($project_type) || empty($location) || empty($message)) {
        echo "Por favor completa todos los campos obligatorios.";
        exit;
    }

    // Validar formato de email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor ingresa un correo electrónico válido.";
        exit;
    }

    // Crear el cuerpo del correo en HTML
    $body = "
    <html>
    <head>
      <title>Nueva solicitud de cotización</title>
    </head>
    <body style='font-family: Arial, sans-serif; line-height: 1.6;'>
      <h2 style='color: #333;'>Nueva solicitud de cotización - CONPRE</h2>
      <table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
        <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Nombre:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>$name</td></tr>
        <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Email:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>$email</td></tr>
        <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Teléfono:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>$phone</td></tr>
        <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Tipo de Proyecto:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>$project_type</td></tr>
        <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Tipo de Servicio:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>$service_type</td></tr>
        <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Ubicación:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>$location</td></tr>
        <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Volumen Estimado:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>$volume</td></tr>
        <tr><td style='padding: 10px; border-bottom: 1px solid #ddd;'><strong>Mensaje:</strong></td><td style='padding: 10px; border-bottom: 1px solid #ddd;'>" . nl2br($message) . "</td></tr>
      </table>
      <p style='color: #666; font-size: 12px; margin-top: 20px;'>Este correo fue enviado desde el formulario de contacto de conpreconcretos.com</p>
    </body>
    </html>
    ";

    // Configurar PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host       = $smtp_host;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtp_user;
        $mail->Password   = $smtp_pass;
        $mail->SMTPSecure = $smtp_secure;
        $mail->Port       = $smtp_port;
        $mail->CharSet    = 'UTF-8';

        // Opciones SSL para evitar errores de certificado en algunos hostings
        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ];

        // Remitente y destinatario
        $mail->setFrom($smtp_user, 'CONPRE Concretos - Sitio Web');
        $mail->addAddress($to_email);
        $mail->addReplyTo($email, $name);

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = "Nueva solicitud de cotización - $name";
        $mail->Body    = $body;
        $mail->AltBody = "Nombre: $name\nEmail: $email\nTeléfono: $phone\nTipo de Proyecto: $project_type\nServicio: $service_type\nUbicación: $location\nVolumen: $volume\nMensaje: $message";

        $mail->send();
        echo "¡Tu solicitud ha sido enviada con éxito! Nos comunicaremos contigo a la brevedad.";

    } catch (Exception $e) {
        echo "Hubo un error al enviar tu solicitud. Por favor intenta nuevamente o contáctanos directamente.";
        // Para depuración (comentar en producción):
        // echo " Error: " . $mail->ErrorInfo;
    }
} else {
    echo "Método de solicitud no permitido.";
}
?>
