<?php
session_start(); // Asegúrate de iniciar la sesión

// Verificar si el usuario ha iniciado sesión
$isAuthenticated = isset($_SESSION['usuario_id']);
$usuarioNombre = $isAuthenticated ? $_SESSION['usuario_nombre'] : ''; // Obtener el nombre del usuario
$usuarioApellido = $_SESSION['usuario_apellido'];
$usuarioEmail = $_SESSION['usuario_email'];
$usuarioTelefono = $_SESSION['usuario_telefono'];
// Obtener el ID del usuario desde la sesión
$usuarioId = $_SESSION['usuario_id'];
$usuarioPassword = $_SESSION['usuario_password'];
$agregado = false;

$host = 'localhost';
$dbname = 'angora';
$username = 'root';
$password = '';

// Crear conexión
$conexion = new mysqli($host, $username, $password, $dbname);
    
// Consulta SQL para obtener las direcciones del usuario
$sql = "SELECT * FROM direccion WHERE idUsuario = $usuarioId";
$result = $conexion->query($sql);

// Verificar si la consulta devuelve resultados
if ($result->num_rows > 0) {
    // Asignar los valores de la primera dirección encontrada a variables individuales
    $row = $result->fetch_assoc(); // Obtiene solo la primera fila
    $calle = $row['calle'];
    $numero = $row['numero'];
    $codigo_postal = $row['codigo_postal'];
    $colonia = $row['colonia'];
    $pais = $row['pais'];
    $estado = $row['estado'];
    $ciudad = $row['ciudad'];
    $descripcion_hogar = $row['descripcion_hogar'];
    $agregado = true;
}

if (isset($_POST['logout'])) {
    // Eliminar todas las variables de sesión
    session_unset();
    // Destruir la sesión
    session_destroy();
    // Redirigir al usuario a la página de login o la página principal
    header('Location: index.php'); // O también podrías redirigir a index.html
    exit();
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuenta</title>
    <link rel="stylesheet" href="css/cuenta.css">
</head>
<body>

    <header>
        <nav>
            <div class="contenedor_nav">
                <a href="index.php">
                    <img id="logo" src="imagenes/angora_logo.png" alt="Logotipo de Angora Sport Shop">
                </a>
                <div class="contenedor_menu">
                    <ul class="menu_nav">
                        <li class="item_nav"><a href="#" class="item_link"><i>Men's</i></a></li>
                        <li class="item_nav"><a href="#" class="item_link"><i>Women's</i></a></li>
                    </ul>
                </div>
            </div>
            <div class="contenedor_perfil">
                <div id="contenedor_buscar">
                    <input type="text" name="buscar" id="buscar" placeholder="Buscar">
                </div>
                <a href="login.php"><img src="imagenes/login.png" alt="Login"></a>
                <a href="#"><img src="imagenes/corazon.png" alt="Lista de Deseos"></a>
                <a href="#"><img src="imagenes/bolsa_compras.png" alt="Compras"></a>
            </div>
        </nav>
    </header>

    <main class="principal">
        <h1>My Angora Account</h1>

        <div class="opciones">
            <div>
            <h2>Bienvenido a tu Perfil <?php echo $usuarioNombre; ?></h2>
            </div>

            <div class="cerrar-sesion">
                <form action="logout.php" method="POST">
                    <button type="submit" name="logout" class="boton-cerrar">Cerrar sesión</button>
                </form>
            </div>
        </div>  

        <div class="informacion-usuario">
            <div class="perfil">
                

                <div class="icono-perfil">
                    <img src="usuario.png" alt="">
                </div>

                <div class="informacion-perfil">
                    <div>
                        <p>Nombre(s) : <?php echo $usuarioNombre; ?></p>
                    </div>

                    <div>
                        <p>Apellido(s) : <?php echo $usuarioApellido; ?></p>
                    </div>

                    <div>
                        <p>Email : <?php echo $usuarioEmail; ?></p>
                    </div>

                    <div>
                        <p>Telefono : <?php echo $usuarioTelefono; ?></p>
                    </div>

                    <div>
                        <a href="editarUsuario.php">
                            <input type="submit" value="Editar" class="editar">
                        </a>
                        
                    </div>
                </div>
            </div>

            <div class="direccion">
                <h2>Direccion</h2>
                <div class="informacion-direccion">
                    <div class="datos-informacion">
                        <p>Calle : <?php echo $calle; ?></p>
                    </div>

                    <div class="datos-informacion">
                        <p>Numero : <?php echo $numero; ?></p>
                    </div>

                    <div class="datos-informacion">
                        <p>Colonia : <?php echo $colonia; ?></p>
                    </div>

                    <div class="datos-informacion">
                        <p>Codigo Postal : <?php echo $codigo_postal; ?></p>
                    </div>
                    <div class="datos-informacion">
                        <p>País : <?php echo $pais; ?></p>
                    </div>
                    <div class="datos-informacion">
                        <p>Estado : <?php echo $estado; ?></p>
                    </div>

                    <div class="datos-informacion">
                        <p>Ciudad : <?php echo $ciudad; ?></p>
                    </div>

                    <div class="datos-informacion">
                        <p>Descripcion del hogar : <?php echo $descripcion_hogar; ?></p>
                    </div>

                </div>
                <div class="botones-direccion">
                    
                    <div>
                        <a href="agregarDireccion.php">
                            <input type="submit" value="Agregar" class="agregar">
                        </a>
                    </div>
                    
                    
                    <div>
                        <a href="editarDireccion.php">
                            <input type="submit" value="Editar" class="editar">
                        </a>
                    </div>
                </div>

            </div>
        </div>

        
      

    </main>
    
</body>
</html>