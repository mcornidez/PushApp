API v3.0.1:
-----------
La siguiente actualización resuelve el siguiente problema:
* El error 400 (Bad Request) "Data constraint - UNIQUE constraint failed: Cycle_Exercise.cycleId, Cycle_Exercise.order" generado por la ruta PUT /cycles/{cycleId}/exercises/{exerciseId}.

Instalación de la actualización del API:
----------------------------------------
1) Descomprimir el archivo "API v3.0.1 Installer.zip" en el directorio de instalación.
2) Reiniciar el API para que se aplique la actualización.
NOTA: Para corroborar la correcta instalación de la actualización verificar que en el encabezado de página de la documentación del API se muestre la leyenda "Swagger Exercise 3.0.1".