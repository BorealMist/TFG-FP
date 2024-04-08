<?php

//Asociamos input de form a variables 

$tiempoSesion = $_POST['tiempoSesion'];
$nivelEducativo = $_POST['nivelEducativo'];
$regiones = $_POST['regiones'];
$edadPaciente = $_POST['edadPaciente'];

//Creamos consulta SQL
//Modificar tabla para añadir auto_increment en test_id
//PROBLEMA: la SUMA de tiempo de tests debe ser menor, no individualmente
//Asignamos un alias a la tabla test_cogni = t, para que sea más legible

$sql = "SELECT t.test_id, t.test_nombre, t.descripcion FROM test_cogni AS t
        INNER JOIN funciones_cognitivas AS f ON t.categoria_id = f.categoria_id
        WHERE t.tiempo_requerido <= $tiempoSesion 
        AND t.edad_desde <= $edadPaciente
        AND t.edad_hasta >= $edadPaciente";

foreach ($regiones as $region) {
    $sql .= " AND t.regiones_relac LIKE '%$region%' ";
}

//Asignamos la query que aparezca a la variable $result

$resultado = $conn ->query($sql);

//Devolvemos el ID, nombre y descripción de los tests que aparezcan en la consulta
if($resultado->num_rows <= 0){
    echo "No se encontraron tests que cumplan con los criterios relacionados.";
}else{
    while($row = $resultado->fetch_assoc()){
        echo "ID: ".$row["test_id"]. " - Nombre: ".$row["test_nombre"]. "- Descripción: ".$row["descripcion"]."<br>";
    }
}

$conn->close();
?>