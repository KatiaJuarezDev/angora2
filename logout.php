<?php
session_start();
session_unset(); // Elimina todas las variables de sesión
session_destroy(); // Destruye la sesión

// Redirecciona al usuario a la página principal o de login
header('Location: index.php');
exit();
