<?php

require_once 'conexion.php';
//Asociamos input de form a variables 
//CAP 11 del manual PHP: sanear imputs, busca sanitizeString o similar para evitar problemas con imputs

$data = json_decode(file_get_contents('php://input'), true);

$tiempoSesion = $data['tiempoSesion'];
$nivelEducativo = $data['nivelEducativo'];
$edadPaciente = $data['edadPaciente'];


//Creamos consulta SQL
//Asignamos un alias a la tabla test_cogni = t, para que sea más legible

$sql = "SELECT t.test_id, t.test_nombre, t.descripcion, t.tiempo_requerido FROM tests_cogni AS t
        INNER JOIN funciones_cognitivas AS f ON t.categoria_id = f.categoria_id
        WHERE t.tiempo_requerido <= {$tiempoSesion} 
        AND t.edad_desde <= {$edadPaciente}
        AND t.edad_hasta >= {$edadPaciente}";


//Asignamos la query que aparezca a la variable $resulto

$resultado = $conn ->query($sql);

//Devolvemos el ID, nombre y descripción de los tests que aparezcan en la consulta

if($resultado->num_rows <= 0){
    echo json_encode(["errors"=>"No se encontraron tests que cumplan con los criterios relacionados."]) ;
    return;
}else{

   $resultado = $resultado->fetch_all(MYSQLI_ASSOC);
   $tiempoTotal = 0;
   $numeroSesiones = count($resultado);
   for($i = 0; $i<count($resultado); $i++){
    $tiempoTotal += $resultado[$i]["tiempo_requerido"];
    if($tiempoTotal > $tiempoSesion){
      $numeroSesiones = $i-1;
      break;
    }elseif($tiempoTotal == $tiempoSesion){
      $numeroSesiones = $i;
      break;
    }
   }
   $resultado = array_slice($resultado, 0, $numeroSesiones+1);
   echo json_encode($resultado, JSON_INVALID_UTF8_IGNORE);
   return $resultado;

}

        
$conn->close();
var_dump($resultado);

?>
