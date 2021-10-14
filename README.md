     |----------------------------------------------|
     |                                              |
     |                                              |
     |                  PushApp                     |
     |            Guía de instalación               |
     |                                              |
     |                                              |
     |----------------------------------------------|

¡Hola! Bienvenidos a la guía de instalación de PushApp. Es importante seguir estos
pasos para lograr una ejecución correcta del sitio, por lo que se pide especial
atención a los mismos.

Si usted ya instalo la API, proceda directamente al paso (3). En caso contrario,
comience por el caso (1).

[Paso 1] Primero, debemos instalar la API para comunicarnos con el servidor. Para esto:

1) Abrir una consola de comandos
2) Asegurarse de tener instalado node.js.
	
	2.1) En caso de tenerlo, asegurarse que sea superior a la versión 14.18.0
	
	2.2) Caso contrario, se puede descargar de https://nodejs.org/en/ 
	(disponible para todos los sistemas operativos)
	
	2.3) Para verificar la correcta instalación, correr en la consola el
	comando ```node --version```
	
3) Una vez instalado, colocarse en la terminal sobre la carpeta donde se encuentra
la API. 
4) Allí, ejecutar el comando ```npm install``` y aguarde a que se 
instale (esto peude tardar unos minutos, el sistema se está encargando de traer
todas las dependencias)
5) ¡Listo! La API se encuentra instalada.

[Paso 2] Una vez instalada la API, procedemos a inicializarla:

1)  Tomar la misma consola donde ejecutamos el ```npm install```, o inicializar una nueva y situarse sobre la carpeta de la API
2) Ejecutar el comando ```npm start```. Esto debería desplegar algunos mensajes, entre ellos “Server is ready to take our messages". Una vez que veamos esto, quiere decir que la API esta funcionando.
3) Para acceder a la documentación de la misma, uno debe ingresar al link "http://localhost:8088/docs/"

[Paso 3] Una vez que tenemos la API funcionando, es necesario pasar al proceso de instalación del TP:
1) Abrir otra consola, y situarse esta vez en la carpeta principal (es decir, una antes de la carpeta de la API, o la primera carpeta que tenemos cuando descomprimimos el .rar).
2) Allí, ejecutar el comando ```npm install```, y esperar nuevamente a que concluya
3) Una vez que esto termina, ejecutar el comando “npm serve” y el sitio web ya se podrá acceder desde la URL “http://localhost:8080”

Una vez realizados todos estos pasos, deberia ser posible visualizar la 
página correctamente. En caso que esto no ocurra, intentar de nuevo los pasos.
Si los problemas persisten, por favor contactarnos a la casilla de mail:
"PushApp@gmail.com" para resolver inquietudes.



Integrantes:
	- De Simone, Franco // 61100
	- Dizenhaus, Manuel // 61101
	- Cornidez, Milagros // 61432
	- Abancens, Alberto // 62581
