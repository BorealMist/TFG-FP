<?php

require_once 'conexion.php';
//Asociamos input de form a variables 
//CAP 11 del manual PHP: sanear imputs, busca sanitizeString o similar para evitar problemas con imputs

$data = json_decode(file_get_contents('php://input'), true);

$tiempoSesion = $data['tiempoSesion'];
$nivelEducativo = $data['nivelEducativo'];
$regiones = $data['regiones'];
$edadPaciente = $data['edadPaciente'];


//Creamos consulta SQL
//Modificar tabla para añadir auto_increment en test_id
//PROBLEMA: la SUMA de tiempo de tests debe ser menor, no individualmente
//Asignamos un alias a la tabla test_cogni = t, para que sea más legible

$sql = "SELECT t.test_id, t.test_nombre, t.descripcion FROM tests_cogni AS t
        INNER JOIN funciones_cognitivas AS f ON t.categoria_id = f.categoria_id
        WHERE t.tiempo_requerido <= {$tiempoSesion} 
        AND t.edad_desde <= {$edadPaciente}
        AND t.edad_hasta >= {$edadPaciente}";

//concatenarlo o interpolar los valores de variable en la cadena 

/* foreach ($regiones as $region) {
    $sql .= " AND t.regiones_relac LIKE '%{$region}%' ";
} */

//Asignamos la query que aparezca a la variable $result

$resultado = $conn ->query($sql);

//Devolvemos el ID, nombre y descripción de los tests que aparezcan en la consulta
//Recuerda que esto lo muestra en consola: hay que modificar este fragmento para mostrar una lista de elementos HTML

//devuelvelo como json: hacer array asoc php -> json_encode
if($resultado->num_rows <= 0){
    echo json_encode(["errors"=>"No se encontraron tests que cumplan con los criterios relacionados."]) ;
    return;
}else{
    /* while($row = $resultado->fetch_assoc()){
        echo "ID: ".$row["test_id"]. " - Nombre: ".$row["test_nombre"]. "- Descripción: ".$row["descripcion"]."<br>";
    } */
   $resultado = $resultado->fetch_all(MYSQLI_ASSOC);
   echo json_encode($resultado, JSON_INVALID_UTF8_IGNORE);
   return;
}

//Código para mostrar json en una tabla html
//No muestra nada obv, no es un array, es un objeto json
header('Content-type:text/html;charset=utf-8');
echo "<table>";
 echo "<tr>";
  foreach(array_keys($resultado[0]) as $head){
     echo "<td>$head</td>";
     }
     echo "</tr>";

     foreach($resultado as $row){
       echo "<tr>";            
       foreach($row as $col){
      echo "<td>$col</td>";
    }
     echo "</tr>";
   }
   echo "</table>";

    return $resultado;

        
$conn->close();
var_dump($resultado);
//echo json_encode($resultado);
?>