<?php

require_once 'conexion.php';
require 'manejoDatos.php';

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    $data = array("message" => "No data found");
}

echo json_encode($data);


$conn->close();

?>