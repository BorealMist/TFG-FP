# TFG-FP
Repositorio para almacenar las distintas versiones del TFG del FP de Desarrollo Web. 
ÍNDICE 
1.	Análisis de necesidades del mercado	2
1.a. Introducción.	2
1.b. Justificación del proyecto	3
2. NeuroTeca: propuesta de diseño.	3
2.a. Descripción del proyecto y tecnologías escogidas.	3
1.	Planificación, seguimiento y evaluación de la ejecución.	4
3.a. Planificación.	4
3.b. Seguimiento.	5
3.c. Evaluación de la ejecución.	10
4. Manual de la aplicación.	11
5.	Valoración económica y humana del proyecto.	12
6.	Conclusiones	12
6. a. Opciones de mejora.	12
6. b. Dificultades encontradas y soluciones adaptadas.	13
6. c. Valoración personal.	14
7.	Bibliografía	15

 
1.	Análisis de necesidades del mercado

1.a. Introducción.

La neuropsicología es una rama especializada de la Psicología que se encarga de relacionar las regiones del encéfalo (desde los hemisferios cerebrales, sus cortezas y conexiones, hasta regiones más evolutivamente primitivas, como el sistema límbico o el tronco encefálico) con las funciones cognitivas que permiten a personas (y otros animales) relacionarse con su entorno, aprender y responder de la forma más adecuada posible: la atención, memoria, gnosias (reconocimiento de objetos), el control inhibitorio, la planificación, la iniciación de una tarea, etc.
Describir en esta memoria la extensión de esta disciplina escapa al objetivo del proyecto. Sin embargo, es importante dejar claro unas breves afirmaciones acerca de la neuropsicología y su relación con la sociedad, para entender las ventajas de crear un proyecto como este. Nuestro PFG consiste en una biblioteca digital de diferentes tests que permiten a un profesional de este campo evaluar a un paciente o usuario, y comprobar cuáles funciones cognitivas, emocionales y funcionales resultan alteradas, y en qué grado. 
La evaluación en neuropsicología es una parte fundamental en el proceso de rehabilitación o estimulación neurológica, en el que se trata de mejorar o mantener, en la medida de lo posible, las funciones del usuario. Para realizar una evaluación eficiente se requieren años de experiencia, un buen ojo clínico, y flexibilidad a la hora de evaluar. 
Uno de los mayores problemas a los que se enfrentaría un neuropsicólogo novel es la inabarcable cantidad de tests de evaluación que existen: pruebas de screening, tests específicos para cada función y subfunción (aunque lo normal es que se solapen), baterías de evaluación completas, todas ellas divididas en función de la edad del paciente, su nivel educativo, la región a la que pertenece, idioma, tiempo disponible para evaluar…
Como se puede intuir, elegir qué tests utilizar en cada caso es realmente difícil, aunque crucial. Hay que tener en cuenta tanto las características del propio usuario como su entorno, el tiempo de evaluación disponible y, por supuesto, la familiaridad del profesional con los tests y su corrección, así como la disponibilidad de éstos (es común que las pruebas de evaluación cuesten cientos de euros, debido principalmente a cuestiones de derechos de autor).  
En definitiva, la elección de tests es un proceso complejo y tedioso, en el que el conocimiento de las diferentes pruebas (y de conocer simplemente que existen) depende en gran medida del profesional, y puede tener que estructurar su plan de intervención en función a que tenga acceso a esos tests en cuestión. 


1.b. Justificación del proyecto

Las razones expuestas en el apartado anterior llevan a pensar que una herramienta digital para centralizar la mayoría de tests de evaluación posibles sería una ayuda de gran valor para profesionales, especialmente aquellos con poca experiencia. Poder recibir, tras definir de forma simple las características de un usuario a evaluar, un listado de tests apropiados sería una forma de asegurar que la persona recibe el mejor servicio posible, y que hay menos margen de error asociado a las decisiones del profesional novel. 
Es cierto que, con el paso de los años, los profesionales tienden a estandarizar su evaluación, pero eso puede acarrear malas prácticas, al tratar de utilizar una misma herramienta para todo. 
 Actualmente, no conocemos ninguna aplicación o web que recoja, de forma sencilla y accesible, listas de pruebas o baterías de evaluación neuropsicológica. Existe una extensa bibliografía acerca de la evaluación neuropsicológica y las buenas prácticas necesarias para ello. Por hacer unas breves menciones, la publicación The neuropsychological assessment (Ustarroz, 2008) en la revista Intervención Psicosocial, o el manual de evaluación neuropsicológica publicado por la Universitat Oberta de Catalunya (Álvarez Guerra et al., 2018) son comúnmente citados para justificar las elecciones en pruebas de evaluación. Pero, como hemos comentado, son manuales y publicaciones, que tienen como objetivo argumentar cómo se debe evaluar, no enumerar y recoger las pruebas posibles para ello. Por tanto, esta aplicación cubriría una necesidad que no ha sido resuelta aún.
2. NeuroTeca: propuesta de diseño.

2.a. Descripción del proyecto y tecnologías escogidas.

La herramienta que vamos a desarrollar (a la que nos referimos actualmente como NeuroTeca, aunque es un placeholder) es una web sencilla, que recoge una serie de inputs del usuario en un formulario HTML y devuelve un listado de elementos almacenados en una base de datos SQL. 
La parte front-end de la web es una aplicación de una sola página, pero podría dividirse su contenido en tres páginas: una página de inicio, una de información sobre la aplicación, sus usos y limitaciones, y la última con un formulario en el que describir las características del paciente o usuario que se quiere evaluar. En un principio, existiría un registro de usuarios, en el que los profesionales podrían almacenar registros las evaluaciones de cada paciente, e incluso almacenar resultados y compararlos con los obtenidos a lo largo de las sucesivas evaluaciones a lo largo de los meses. Sin embargo, por limitaciones de tiempo y posibles problemas de seguridad y privacidad de datos, se ha decidió no introducir esta función (se hablará más de esto en la sección de opciones de mejora). 
Para realizar la parte que el usuario ve se ha decidido recurrir al framework Angular, que permite desarrollar aplicaciones de una sola página y alterar el contenido para mostrar las tres páginas descritas antes sin necesitar una gran carga del servidor. Además, es fácilmente escalable, es fácil añadir funciones y expandir en contenido invirtiendo poco tiempo. Las aplicaciones Angular también pueden ejecutarse dentro de entornos de desarrollo AMPP, como es el que se ha utilizado para el backend, base de datos y despliegue en servidor local (concretamente, XAMPP).
Angular cuenta con una extensa historia de desarrollo y una gran comunidad de usuarios, lo que lo hace sólido y fiable, además de contar con esquemas y soluciones fácilmente aplicables.
Como se ha indicado anteriormente, el backend se realiza mediante el entorno de desarrollo XAMPP, recurriendo a PHP para conectar la base de datos con el frontend y a JS para sanear los inputs del usuario que no son checkbox y requieren leer caracteres. 
Gracias a que existen paquetes como XAMPP, es posible comenzar a desarrollar una aplicación de principio a fin sin preocuparse de compatibilidades o problemas de instalación. El lenguaje PHP está perfectamente integrado para realizar querys como las que se requieren en esta app, tiene una sintaxis relativamente sencilla y soporta las bases de datos SQL más importantes, además de tener tal antigüedad que casi cualquier proyecto que se te ocurra ya existe de una forma u otra, por lo que el código usado es robusto y ha sido puesto a prueba en infinidad de ocasiones.
Por último, el sistema gestor de base de datos es MariaDB, utilizado a través de la herramienta gratuita phpMyAdmin incluida en el paquete XAMPP.  Recurrir a un SGBD tipo SQL ha sido una elección clara: los elementos con los que vamos a trabajar están fuertemente relacionados entre sí, todos ellos son tests que cuentan con las mismas características (función cognitiva principal que evalúa, rango de edad para el que puede aplicarse, tiempo de aplicación, y si es apto o no para personas con dificultades de visión) y la cantidad de información es pequeña, por lo que los tiempos de llamada de la petición no serán largos en ningún caso. Un sistema SQL nos permite recurrir a ordenes JOIN para seleccionar unos u otros tests en función a las características descritas en el HTML. 
La totalidad del proyecto puede encontrarse en el siguiente repositorio de GitHub: https://github.com/BorealMist/TFG-FP


1.	Planificación, seguimiento y evaluación de la ejecución.

3.a. Planificación. 
Debido a las limitaciones temporales, el proyecto se diseñó en el plazo de una semana. Se acordó, en un principio, no recurrir a ningún framework, debido a la simplicidad de la web. Sin embargo, debido al conocimiento de parte del equipo de Angular, se decidió finalmente realizar la parte front-end con esa herramienta, para poder modificar  los archivos .html más rápidamente. 
Se distribuyó el desarrollo del proyecto de la siguiente forma acorde al tiempo disponible: 8 semanas de trabajo. 
1.	2 semanas para el desarrollo front-end. A la hora de diseñar una página o aplicación fullstack, es recomendable generalmente comenzar por la parte que el usuario va a ver, como explica Lane Wagner en FreeCodeCamp (https://www.freecodecamp.org/news/how-to-build-a-full-stack-application-from-start-to-finish/). Se realizó una sencilla aplicación de Angular con tres páginas: una que contiene información sobre el proyecto, otra que explica brevemente cómo se usa y por último, la que contiene el formulario y la tabla que envía y recoge información a la base de datos.
2.	2 semanas para diseñar y desarrollar la base de datos. En la práctica, esta fase se realizó conjuntamente al desarrollo front-end, ya que hay que modificar el formulario en función a lo que queramos buscar. La base de datos es sencilla, cuenta con una serie de tests que sirven de espectro relativamente amplio de las distintas funciones que pueden evaluar los tests. 
3.	2. Semanas para desarrollar la parte back-end. La conexión entre la página web y la base de datos se realizó enteramente con PHP, sin recurrir a frameworks. 
4.	2 semanas para testeo, mejoras y realización de la memoria. Las últimas semanas del trabajo están dedicadas a comprobar el correcto funcionamiento de la web con distintos casos y mejorar el diseño de la página web. 

3.b. Seguimiento.

Durante las primeras semanas, se cumplió ampliamente con las expectativas de tiempo del proyecto. El prototipo del front-end se desarrolló rápidamente, así como el esquema de la base de datos. A continuación, se muestran imágenes de las primeras versiones del proyecto. 
 
Imagen 1: esquema de la base de datos en PHPMyAdmin

Esta imagen muestra la estructura de la base de datos, que no fue modificada sustancialmente durante el curso del proyecto. Cuenta con dos tablas, una que categoriza los tests cognitivos y otra las funciones cognitivas, para poder seleccionar en la búsqueda en función de qué habilidades quiere el profesional evaluar y estructurar más claramente los tests. La columna categoría_id sirve de clave primaria para la tabla de funciones, y foránea para la de tests. El resto de las columnas indican:
•	test_id: cada prueba tiene asociado un id numérico para poder trabajar con ellos.
•	test_nombre: el nombre de cada prueba.
•	categoría_id: la función cognitiva a la que pertenece cada test. Por ejemplo, el test D2 evalúa principalmente la capacidad atencional. 
•	descripción: breve texto que explica en qué consiste el test.
•	edad_desde: cada test está baremado para una población concreta, en función a distintas variables. Por ejemplo, el test PASAT de atención no tiene puntuaciones baremadas para personas menores de 15 años, por lo que no sería apropiado para evaluar a un niño. 
•	edad_hasta: igual que la columna anterior, indicando hasta qué edad puedes pasar esa prueba. 
•	Nivel_educativo: dividido en 3 niveles: primaria, secundaria y terciaria, relacionados respectivamente con 11, 16 o más de 16 años de educación formal. 
•	regiones_relacionadas: qué áreas cerebrales están relacionadas con afectaciones en esas funciones cognitivas (por ejemplo, la capacidad atencional está fuertemente relacionada con el lóbulo frontal, más concretamente con la corteza prefrontal). En un principio, la aplicación permitía al usuario escoger qué áreas cerebrales tenía dañadas el paciente (en caso de contar con esa información en una derivación desde el hospital), pero se consideró demasiado complejo y no ayudaba mucho al neuropsicólogo. Se mantiene a título informativo. 
•	tiempo_requerido: mostrado en minutos, indica el tiempo promedio que se tarda en pasar esa prueba. 
Como se ha indicado, la base de datos no se modificó sustancialmente. Se consideró que, aunque no se utilizasen las regiones cerebrales relacionadas para el formulario de lectura de la base de datos, podría ser útil en un futuro para restringir más las consultas o dar información relevante de las áreas encefálicas. 

La parte del front-end también se mantuvo, en líneas generales, igual que al principio del proyecto. Así se diseñaron las 3 vistas al comienzo del desarrollo: 
 
Imagen 2: Vista de la pestaña "Inicio" del front-end.
Esta sería la vista de inicio, en la que se explica para qué sirve esta página y a quién va dirigido su uso. También se explicaría muy brevemente la disciplina de la Neuropsicología y qué problema se estima que se resuelve mediante esta aplicación.


 
Imagen 3:Vista de la pestaña "Información".


Esta vista explicaría el funcionamiento, en líneas generales, de la aplicación, indicando al usuario qué debe incluir en cada campo del test y qué devolverá la base de datos. En este momento del desarrollo incluía el Lorem Ipsum para comprobar que mostraba correctamente el texto y evaluar el contraste de la imagen.

 
Imagen 4: Prototipo de la pestaña "Test".

Por último, la imagen superior muestra el prototipo del formulario que el usuario rellenaría para que la página le muestre el listado de pruebas de evaluación neuropsicológica más apropiado para el paciente que quiere evaluar. Como se puede ver, aún no se había diseñado un estilo para esta pestaña. No se quería que fuese muy agresivo ni complejo, para centrar la atención en el propio formulario y que no hubiese problemas de carga. Así se ve en las versiones posteriores:

 
Imagen 5: Segunda versión de la pestaña “Test”. Incluye una tabla donde se muestran las pruebas. 

La conexión al servidor está realizada, esencialmente, con dos archivos .php, uno que conecta a la base de datos y el otro que se encarga de recoger los datos acorde a lo seleccionado en el formulario y mostrarlo en pantalla en una tabla. 

 
Imagen 6: Conexión a la base de datos a través de PHP.

Dado que el despliegue se está haciendo de forma local, mediante XAMPP, no es importante cambiar el usuario o la contraseña. Sin embargo, si la aplicación se subiese a un servidor externo sí sería imperativo utilizar un tipo de seguridad más estricto y parsear la contraseña. 
A continuación, se muestra un fragmento del código PHP que recoge y devuelve la información de la base de datos, con comentarios explicando el funcionamiento.
Los principios que rigen este sencillo código se explican con claridad en el libro Learning PHP, MySQL and JavaScript, de Robin Nixon (2018). 
 
 
Imagen 6: Parte del código que maneja la información de la base de datos.
3.c. Evaluación de la ejecución.
Dado que este punto está relacionado con el quinto apartado, Conclusiones, se será breve a la hora de explicar las dificultades que han podido surgir al realizar el proyecto.
La primera es inherente a realizar un proyecto por parejas: es necesario estructurar una serie de reuniones (al menos una a la semana) para poder poner en común los avances que se han hecho, las dificultades que se están encontrando y posibles cambios en la página web. Realizar esto es indudablemente complicado, más cuando ambos integrantes compaginan la realización de este proyecto con el trabajo. 
En un principio, la aplicación avanzaba a buen ritmo, siendo capaces de tener un esquema fullstack rápidamente, con una página relativamente funcional. Sin embargo, con el paso de las semanas, fue haciéndose más difícil dedicar el tiempo necesario para cumplir con las metas autoimpuestas para llegar a tiempo a las entregas. Además, habría sido necesario planear con más tiempo las tecnologías usadas, no sólo sopesando su utilidad si no nuestro conocimiento y soltura con ellas. Una vez que ha pasado un tiempo, es poco probable poder aprender un framework de cero para resolver un problema (por ejemplo, utilizar Laravel o Laragon para el backend o el despliegue de la aplicación). 

4. Manual de la aplicación. 
El funcionamiento de la aplicación es muy sencillo: el usuario sólo tiene que rellenar los campos necesarios: la edad del paciente, su nivel educativo, el tiempo total del que dispone y las funciones cognitivas principales que quiere evaluar. Por tanto, se explicará brevemente cómo hacer funcionar la aplicación en otro sistema, y las tecnologías que se necesitan para ello.
Tecnologías necesarias:
•	Editor de código.
•	XAMPP, WAMPP u otro paquete de despliegue de aplicaciones.
•	Node.js.
•	Angular.ts.
Lo primero será acudir al repositorio de GitHub y descargar la aplicación (o utilizar fork): https://github.com/BorealMist/TFG-FP . A continuación, abre XAMPP e introduce la carpeta con todos los contenidos dentro de la carpeta “/htdocs”. Una vez que tanto Node.js como Angular hayan sido correctamente instalados, abre la consola CMD. Hay que dirigirse hasta la carpeta /neurotest introduciendo este comando: “cd C:\Programas\xampp\htdocs\TFG-FP\NeuroTest “.  Una vez ahí, se introduce el siguiente comando en la consola para montar la página web mediante Angular y poder ver modificaciones hechas al momento: “ng build –watch”. Este proceso puede tardar unos minutos. Una vez montado, el siguiente paso es abrir cualquier navegador, y acceder a la página “localhost” (previamente activado el servidor y la base de datos de XAMPP, se puede encontrar el código SQL en el repositorio para montar la base de datos mediante una sola query). En este servidor local aparecerá la carpeta “neurotest”, y una vez se acceda se verá la página en cuestión. 
Esta breve explicación es suficiente para poder lanzar la aplicación en un servidor local, incluso creando la base de datos de cero. 





5.	Valoración económica y humana del proyecto. 

Este sencillo proyecto busca resolver un problema muy concreto dentro de una población (también) limitada: el objetivo es facilitar a los neuropsicólogos, especialmente los que aún carecen de experiencia, el escoger unas u otras pruebas para la evaluación. También tiene la función de actuar de simple repositorio, en el que se podrían ir añadiendo, con la ayuda de más profesionales del campo, todos las pruebas y baterías que se conocen, para tener una centralización y facilitar su búsqueda. 
El proyecto, por tanto, tiene un impacto muy limitado, pero en su concreción está esa eficacia: no se conocen, al menos para los autores de este proyecto, alternativas a esta idea. Generalmente, la forma de escoger pruebas está limitada por el contexto: al empezar tu trabajo como neuropsicólogo, utilizarás las pruebas que aprendieras a usar durante las prácticas, limitando tus opciones y posiblemente haciendo la evaluación menos eficaz de lo que podría ser. Si es cierto que la mayoría de las pruebas son de pago (y no especialmente asequibles), pero es importante conocer un amplio espectro de alternativas para elegir la mejor opción.
A nivel económico, la concreción de la aplicación hace que sea barato mantenerla y escalarla: no sería una tarea difícil ampliar el número de pruebas sin necesidad de ocupar una gran cantidad de espacio, incluso se podría extender el tipo de prueba a otras disciplinas (logopedia, terapia ocupacional, etc.), y crear distintas bases de datos para cada tipo. 
Por estas razones, se considera que el proyecto cumple con unos objetivos concretos que además no son caros de modificar o ampliar, y responden a unas necesidades que hasta ahora no se habían cubierto, posiblemente por el poco tiempo que ha tenido la neuropsicología para desarrollarse. 

6.	Conclusiones
6. a. Opciones de mejora.  
•	Es importante realizar un buen UML que defina toda la aplicación, desde el el front-end al back-end, que explique incluso cómo se compondrán las tablas de la base de datos. En esta ocasión no contamos con el tiempo suficiente para dedicarlo a ello, pero en proyectos futuros no se debería saltar este paso.
•	Mejor planificación y unificación de tecnologías. La limitación de tiempo y falta de conocimiento en frameworks hizo que se realizase básicamente in proyecto Frankenstein. Será mucho más sencillo y elegante, en un futuro, hacer la página con frameworks diseñados para colaborar entre ellos (por ejemplo, recurrir a Laravel para el backend). Como no se trabajaron durante el curso, no se vio apropiado, debido a la curva de dificultad.
•	Habría sido más interesante utilizar JavaScript para modificar el DOM de la página, y explicar el funcionamiento del test en la propia pestaña. También serviría para mostrar la tabla con los tests sin tener que bajar o sin utilizar otra pestaña más. 
•	Podría añadirse una función para modificar la elección de alguno de los tests sin tener que realizar de nuevo el cuestionario entero. 
•	Incluir, como se planeó en un principio, un sistema de registro de usuarios, para almacenar las distintas listas de tests para cada paciente asociado a un neuropsicólogo. Por restricciones de tiempo no ha podido llevarse a cabo.

6. b. Dificultades encontradas y soluciones adaptadas.   
El problema principal que encontramos fue la compatibilidad entre las diferentes tecnologías que se utilizaron para realizar la web, especialmente debido al reducido tiempo disponible para realizar el proyecto. Esta situación no es extraña de encontrarse en entornos laborales, concretamente cuando se trabaja con empresas pequeñas (como start-ups), en las que se requiere y valora una capacidad de flexibilidad y adaptación, así como modificar tecnologías para adaptarlas a versiones más modernas o a las que el resto del equipo conozca para trabajar con ellas.
Disponer de semejante número de opciones a la hora de realizar la web es apabullante: entre las opciones se encuentran paquetes enteros diseñados para hacer una web fullstack, ecosistemas como el de Spring de Java, incluso aplicaciones sencillas de desarrollo, como WordPress. Así mismo, las opciones para desplegar aplicaciones también son variadas, y nuestro conocimiento sobre redes y servidores es limitado, por lo que no nos sentíamos cómodos utilizando otras herramientas para ello que no fueran las enseñadas durante el curso, como es el caso de XAMPP.
En cuanto a problemas más concretos durante el desarrollo, se encuentran los siguientes:
•	Dificultades a la hora de diseñar y modificar los archivos html de forma rápida e intuitiva, sin duplicar código. Se optó por recurrir a Angular en las primeras fases del desarrollo para ello.
•	En un principio, se planteó utilizar una base de datos NoSQL, debido a la rapidez de procesamiento y una mayor compatibilidad con Angular. Sin embargo, ya que los datos de la base están fuertemente relacionados entre sí, y se trabaja con sólo dos tablas, se decidió realizar en MariaDB.
•	Relacionado con la base de datos, cuando se desarrolló el código php que recoge los datos de la base en función al contenido del formulario, ocurría un problema de compatibilidad debido al cotejamiento de la base, que no era “utf8mb4_unicode_uni”, mostrando un error fatal en cuanto se lanzaba la petición. La aplicación no indicaba cuál era el problema, probablemente debido a que se trataba de un software externo, por lo que se requirieron varias pruebas para resolverlo, entre ellas crear una copia de la base de datos en MySQL.
•	Parte del código que mostraba las pruebas seleccionadas en la tabla no funcionaba correctamente. Esto se debe a un problema de compatibilidad con Angular, en el que hay que indicar en cada componente qué información muestra. Los componentes han de ser creados mediante comandos en la consola CMD; hacerlo manualmente resultará en problemas de compatibilidad.
•	En ocasiones, las imágenes de fondo de la página no se muestran. Para resolverlo, se creó un gradiente de color como fondo: si la imagen no carga, sí aparece el gradiente, manteniendo un buen diseño.  

6. c. Valoración personal.  
Como suele ocurrir cuando se realiza un proyecto durante semanas, se termina con cierto sabor agridulce: cuanto más se hace más se aprende, y se encuentran nuevas y más eficientes formas de realizar el proyecto desde un principio. Claro está, no puede cambiarse todo el esquema cada vez que esto ocurra, porque acabaríamos por no presentar nada. Es importante trabajar las expectativas que se tienen de realizar una página web.
Habría sido óptimo contar con algo más de tiempo y haber podido repartirlo de forma más eficiente. Los cambios en tecnologías y las obligaciones de la vida diaria dificultan llevar a cabo el diseño y desarrollo de una web de la forma que los autores habríamos querido. También consideramos que no nos hemos apoyado lo suficiente en proyectos ya realizados, tanto propios (en los repositorios de GitHub de ambos autores) como ajenos. Utilizar bases probadas, tried and tested, es una práctica común y recomendada dentro del desarrollo web: si no está roto, no lo arregles. Siempre es buena idea seguir prácticas que se ha demostrado que funcionan.
Dado que la temática gira en torno a la salud y las funciones cognitivas, nos habría gustado poder dar más prioridad a la accesibilidad de la página, que actualmente no es muy notoria. Esta sería una prioridad de continuar desarrollando el proyecto en un futuro: incluir más descripciones, ayudas auditivas, manejo con teclado, etc. Al ser una aplicación sencilla, la carga de trabajo no es grande, pero sí es necesaria una sólida planificación y fase de pruebas. 
A pesar de ello, nos enorgullece pensar que hemos realizado el primer proyecto que conocemos que aborde esta problemática. Sería muy interesante verlo expandido hasta convertirse en un repositorio de pruebas de todo tipo de disciplinas de la salud y la educación. 
Para concluir y resumir, creemos que el proyecto abre la puerta a solucionar un problema muy concreto, pero que facilitaría el día a día de profesionales de la salud (no sólo neuropsicólogos) a la hora de evaluar a pacientes, una fase crítica en el proceso de intervención. Agradecemos la oportunidad de poder haber realizado esta web, aunque nos gustaría continuar construyendo sobre estos fundamentos para hacerla más funcional (incluir registro de usuarios, más tests, etc.), accesible, elegante y rápida. El desarrollo web es un proceso de evolución constante, y consideramos que este proyecto no es una excepción: puede seguir adaptándose y mejorando con cada nueva versión.



7.	Bibliografía 

•	«Neuropsychological Assessment», Javier Ustarroz, 2008.
•	«Manual de evaluación neuropsicológica», Álvarez Guerra et al., 2018.
•	«How to build a full-stack application, from start to finish», Lane Wranger, 2021.
•	« Learning PHP, MySQL and JavaScript», Robin Nixon, 2018.

