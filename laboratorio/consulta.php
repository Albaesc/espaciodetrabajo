<?php
$servername= "localhost";
$username= "root";
$password= "";
$dbname= "laboratorio";

//Creamos conexión con la base de datos

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die ("Connection failed:".$conn->connect_error);
}

$consulta= "SELECT*FROM usuarios";
$result= mysqli_query($conn, $consulta);
if (!$result) {
    echo "No se ha podido realizar la consulta";
}
echo "<table border-collapse: separate; border= 1px;>";
echo "<tr>";
echo "<th><h1>Nombre</th></h1>";
echo "<th><h1>Primer Apellido</th></h1>";
echo "<th><h1>Segundo Apellido</th></h1>";
echo "<th><h1>Email</th></h1>";
echo "</tr>";

while ($colum= mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td><h2>".$colum['NOMBRE']."</td></h2>";
    echo "<td><h2>".$colum['PRIMER_APELLIDO']."</td></h2>";
    echo "<td><h2>".$colum['SEGUNDO_APELLIDO']."</td></h2>";
    echo "<td><h2>".$colum['EMAIL']."</td></h2>";
    echo "</tr>";
}
echo "</table>";

$conn->close();

echo '<a href="formulario.html">Volver al formulario</a>';

?>