<?php

if($_POST){
        $nombre= $_POST['nombre'];
        $apellido1=$_POST['primerApellido'];
        $apellido2=$_POST['segundoApellido'];
        $email=$_POST['email'];
        $usuario=$_POST['login'];
        $contraseña=$_POST['password'];

    $servername= "localhost";
    $username= "root";
    $password= "";
    $dbname= "laboratorio";

    //Creamos conexión con la base de datos

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die ("Connection failed:".$conn->connect_error);
    }

    //Validar que esten los campos rellenados

    if (empty($nombre) || empty($apellido1) || empty($apellido2) || empty($email) || empty($usuario) || empty($contraseña)){
        echo "Por favor, complete todos los campos del formulario.";
        return;
    }
    //Validación de email

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "El correo electrónico no tiene un formato válido.";
        return;
    }
    //Validación de contraseña
    if(strlen($contraseña)<4 || strlen($contraseña)>8) {
        echo "La contraseña debe tener entre 4 y 8 caracteres.";
        return;
    }

    //Verificar si existe el correo introducido en la base de datos

    $sql = "SELECT COUNT(*) as total FROM usuarios WHERE EMAIL = '$email'";
    $resultado = $conn->query($sql);

    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $total = $fila['total'];
    
        if ($total > 0) {
            echo "El correo electrónico existe en la base de datos. Introduce otro distinto";
            exit();
        } 
    } else {
        echo "Error al ejecutar la consulta: " . $conn->error;
    }

    //Insertar datos

    $sql="INSERT INTO usuarios(NOMBRE, PRIMER_APELLIDO, SEGUNDO_APELLIDO, EMAIL, USUARIO, CONTRASEÑA) 
    VALUES ('$nombre', '$apellido1','$apellido2', '$email', '$usuario', '$contraseña')";

    if($conn->query($sql)===TRUE){
        echo "Registro añadido correctamente";
    } else {
        echo "Error:".$sql."<br>".$conn->error;
    }

//Cerramos conexión

$conn->close();
}
?>