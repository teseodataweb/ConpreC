<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configuración del correo
    $to = "contacto@conpreconcretos.com";
    $subject = "Nueva solicitud de cotización";

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

    // Crear el cuerpo del correo
    $body = "
    <html>
    <head>
      <title>Nueva solicitud de cotización</title>
    </head>
    <body>
      <h2>Detalles de la solicitud</h2>
      <p><strong>Nombre:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Teléfono:</strong> $phone</p>
      <p><strong>Tipo de Proyecto:</strong> $project_type</p>
      <p><strong>Tipo de Servicio:</strong> $service_type</p>
      <p><strong>Ubicación:</strong> $location</p>
      <p><strong>Volumen Estimado:</strong> $volume</p>
      <p><strong>Mensaje:</strong><br>" . nl2br($message) . "</p>
    </body>
    </html>
    ";

    // Cabeceras del correo
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $name <$email>" . "\r\n";

    // Enviar correo
    if (mail($to, $subject, $body, $headers)) {
        echo "¡Tu solicitud ha sido enviada con éxito!";
    } else {
        echo "Hubo un error al enviar tu solicitud. Intenta nuevamente.";
    }
} else {
    echo "Método de solicitud no permitido.";
}
?>
