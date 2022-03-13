/*
HTTP:
Son las siglas para 'Hypertext Transfer Protocol', y es un protocolo de transferencia donde
se utiliza un sistema mediante el cual se permite la transferencia de información entre 
diferentes servicios y los clientes que utilizan páginas web.

Servidor HTTP:
Un servidor HTTP es una pieza de software que comprender URLs (direcciones web) y HTTP
(el protocolo que tu navegador usa para ver las páginas web).

HTTP Request:
La línea de salida de una petición HTTP se conoce como línea de petición. Siempre es la primeria
línea del mensaje de solicitud y contiene tres campos:
-Un método HTTP
-Un identificador universal de recursos (URI)
-Una versión del protocolo HTTP

HTTP Response:
Una vez que el servidor ha recibido y procesado la solicitud, éste debe devolver un mensaje
de respuesta HTTP hacia el cliente. El mensaje de respuesta se compone de una línea de estado y cero
o más campos de cabecera, seguida po una línea vacía.

Puerto TCP:
TCP usa el concepto de número de puerto para identificar a las aplicaciones emisoras y receptoras. Cada 
lado de la conexión TCP tiene asociado un número de puerto ( de 16 bits sin signo, con lo que existen
65536 puertos posibles) asignado por la aplicación emisora o receptora. Los puertos son clasificados en tres categorías:
1.-bien conocidos
2.-registrados
3.-dinámicos/privados

Métodos HTTP:
Hay varios métodos de HTTP para recuperar datos de un servidos, pero los más utilizados son
GET y POST. 
El método GET solicita un recurso del servidor indicado en el campo URI.
El método POST se utiliza para pasar explicitamente datos al servidor en el propio mensaje
de solicitud.

*/

var http = require(`http`);

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1'); 

//Al ejecutar node app con este código la terminal se queda estática, si quiero volver a escribir algo en
//la términal tengo que crear una nueva o matar esta y crear una
//Ya contiene el refactor para que quede con la notación de la flecha o de una function created on
//the fly.

//Accediendo en la web a localhost:1337 puedo observar el Hello world en la pantalla,
//y yendome a la sección de encabezados puedo ver el índice, y en líneas de código el hello world
//además puedo observar como está formada la página, el html, y algunas características importantes.

