
<?php

    $servername = "localhost";
    $username = "root"; //hay que cambiarlo a un usuario en phpMyAdmin
    $password = "";
    $database = "neurotfg";

    //Creamos conexión
    $conn = new mysqli($servername, $username, $password, $database);

    //Revisamos que ha conectado
    if($conn -> connect_error){
        die("Error de conexión: ". $conn->connect_error);

    }
?>


