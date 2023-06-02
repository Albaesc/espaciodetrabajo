<!doctype html>
<html lang=es>

    <head>
        <meta charset="utf-8">
        <title> Formulario de registro </title>
        <link href="EstiloForm.css" rel="stylesheet" type="text/css">
    </head>

    <body>

        <div class="registration-form">

            <form class="form" method="POST" action="">
                <h2> Registro </h2>
                <label for="nombre"> Nombre </label>
                <input type="text" placeholder="Rellene este campo" name="nombre" class="input" required/>

                <label for="apellido"> Apellido </label>
                <input type="text" placeholder="Rellene este campo" name="apellido" class="input" required/>

                <label for="email"> Email </label>
                <input type="text" placeholder="Rellene este campo" name="email" class="input" required/>

                <button name="submit">Suscribirse</button>

                <!--Añadiremos en el mismo archivo el código php, el cual se comunicará con nuestra base de datos--> 

    <?php
        if ($_POST){
            $nombre = $_POST ['nombre'];
            $apellido = $_POST ['apellido'];
            $email = $_POST ['email'];


        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "practica";

        //Creamos conexion con la base de datos

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die ("Connection failed:".$conn->connect_error);
        }

        $sql = "INSERT INTO usuario (NOMBRE, APELLIDO, EMAIL)
        VALUES ('$nombre', '$apellido', '$email')";

        if($conn->query($sql)===TRUE){
            echo "Registro añadido correctamente";
        } else {
            echo "Error:" .$sql."<br>".$conn->error;
        }

        //Por ultimo cerramos conexion con base de datos

        $conn->close();

        }
    ?>
            </form>
        </div>
    </body>
</html>
