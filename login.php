<?php
// Datos de conexión
$host = 'localhost'; // Dirección del servidor de la base de datos
$dbname = 'angora'; // Nombre de la base de datos
$username = 'root'; // Usuario de la base de datos
$password = ''; // Contraseña del usuario

// Crear conexión
$conexion = new mysqli($host, $username, $password, $dbname);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
} 

$alertas = [];


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Verificar si se envió el formulario de login o de registro
    if (isset($_POST['form_type']) && $_POST['form_type'] === 'login') {
        /// Procesar el formulario de Iniciar Sesión
        $email = $_POST['email'];
        $password = $_POST['password'];

        

        // Aquí podrías hacer la verificación en la base de datos, por ejemplo:
        $sql = "SELECT * FROM usuarios WHERE email = '$email' AND password = '$password'";
        $resultado = $conexion->query($sql);

        if ($resultado && $resultado->num_rows > 0) {
            // Redireccionar a la página principal después de un login exitoso
            header('Location: /index.html');
            
            // Asegura que el script se detenga aquí
        }
        else {
            if(empty($email)) {
                $alertas = 'El email es obligatorio';
            }
            
            if(empty($password)) {
                $alertas = 'El password es obligatorio';
            }

            if($password !== $_SESSION['password']) {
                $alertas = 'La contraseña es incorrecta';
            }  
            if($email !== $_SESSION['email']) {
                $alertas = 'Usuario no valido o inexistente';
            }

            
            
            if(empty($alertas)) {
                header('Location: /login.php');
            }

            echo $alertas;
            
        } 
        

        // Aquí puedes añadir la lógica para verificar el login en la base de datos
       // echo "Formulario de Login enviado con el correo: $email";
    } elseif (isset($_POST['form_type']) && $_POST['form_type'] === 'register') {
        // Procesar el formulario de Registro
        $id = $_POST['id'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $email = $_POST['email'];
        $telefono = $_POST['telefono'];
        $password = $_POST['password'];
        $admin = $_POST['admin'] ?? 0;
        $sql = "INSERT INTO usuarios (nombre, apellido, email, telefono, password) 
                VALUES ('$nombre', '$apellido', '$email', '$telefono', '$password')";
        $conexion->query($sql);
        if($conexion) {
            header('Location : /login.php');
        }
        
        // Aquí puedes añadir la lógica para guardar los datos de registro en la base de datos
        //echo "Formulario de Registro enviado con el nombre: $nombre $apellido";
    }

    
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Login </title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link rel="icon" href="imagenes/angoraFavicon.png" type="image/x-icon">
</head>


<body>
    <header>
        <nav>
            <div class="contenedor_nav">
                <a href="index.html">
                    <img id="logo" src="imagenes/angora_logo.png" alt="Logotipo de Angora Sport Shop">
                </a>
                
            </div>
            <div class="contenedor_perfil">
                <a href="login.php"> <img src="imagenes/login.png" alt="Login"> </a>
                <a href="#"> <img src="imagenes/corazon.png" alt="Lista de Deseos"> </a>
                <a href="#"> <img src="imagenes/bolsa_compras.png" alt="Compras"> </a>
            </div>
        </nav>
    </header>

    <div class="centrar">

        

        <div class="container-form login">
            <div class="information">
                 <div class="info-childs">
                    <h2>¡Bienvenido Nuevamente!</h2>
                    <p>Si aún no tienes tu cuenta registrate</p>
                    <input type="button" value="Registrarse" id="sign-up">
                </div>
            </div>
            <div class="form-information">
                <div class="form-information-childs">
                    <h2>Iniciar Sesión</h2>
                    <div class="icons">
    
                    </div>
                    <p>o Iniciar Sesión con una cuenta</p>
                    <form action="" class="form" method="POST">
                        <input type="hidden" name="form_type" value="login"> <!-- Identificador de formulario -->
                        <label for="email">
                            <i class='bx bx-envelope' ></i>
                            <input type="email" placeholder="Tu Correo Electronico" name="email" id="email" >
                        </label for="">
                        <label for="password">
                            <i class='bx bx-lock-alt' ></i>
                            <input type="password" placeholder="Tu Contraseña" name="password" id="password">
                        </label>
                        <input type="submit" value="Iniciar Sesión">
                    </form>
    
                </div>
            </div>
        </div>

        <div class="container-form register hide">
            <div class="information">
                 <div class="info-childs">
                    <h2>Bienvenido</h2>
                    <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                    <input type="button" value="Iniciar Sesión" id="sign-in">
                </div>
            </div>

            <div class="form-information">
                <div class="form-information-childs">
                    <h2>Crear una cuenta</h2>
                    <div class="icons">
    
                    </div>
                    <form action="" class="form" method="POST">
                        <input type="hidden" name="form_type" value="register"> <!-- Identificador de formulario --> 
                        <label for="nombre">
                            <i class='bx bx-user'></i>
                            <input type="text" name="nombre" id="nombre" placeholder="Tu Nombre">
                        </label>
                        <label for="apellido">
                            <i class='bx bx-user'></i>
                            <input type="text" name="apellido" id="apellido" placeholder="Apellido">
                        </label>
                        <label for="email">
                            <i class='bx bx-envelope' ></i>
                            <input type="email" placeholder="Tu Correo Electronico" name="email" id="email">
                        </label for="">
                        <label for="telefono">
                            <i class='bx bx-lock-alt' ></i>
                            <input type="tel" placeholder="Tu Telefono" name="telefono" id="telefono">
                        </label>

                        <label for="password">
                            <i class='bx bx-lock-alt' ></i>
                            <input type="password" placeholder="Tu Contraseña" name="password" id="password">
                        </label>
                        <input type="submit" value="Registrarse">
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>