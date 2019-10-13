<?php
//llamando a los campos
$nombre = $_POST ['nombre'];
$apellido = $_POST ['apellido'];
$correo = $_POST ['correo'];
$mensaje = $_POST ['mensaje'];

//Datos para el correo 
//$destinatario = "nor-lab@nor-lab.com.ar";
$destinatario = "nor-lab@nor-lab.com.ar";
$asunto = "Contacto desde WEB NORLAB";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje";

//Enviando mensaje

mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html');

?>