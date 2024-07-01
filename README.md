# Final TP2 - 1/7/24
- Alumno: Mauricio La Rotonda

## Como ejecutar servidor
- Dependencias: tener instalado node.js y npm
- Instalar dependencias:
    `npm install`
- Ejecutar servidor:
    `npm run dev`    

## Enunciado
Se desea realizar un sistema que reciba y procese datos de sondas que envían mediciones de
temperatura desde un invernadero. En dicho lugar se cultivan diversas especies de plantas sensibles al
clima y las muestras se toman en cinco zonas diferentes e ingresan con frecuencias distintas. Para
cumplir con esta implementación necesitamos que la aplicación backend pueda:
● Recibir los datos de temperatura de las distintas sondas (cada una de ellas envía su id).
● Visualizar todas las temperaturas ingresadas y las de cada sonda.
● Obtener las estadísticas sobre las temperaturas almacenadas.
1. Implementar los endpoints que permitan:
a. Ingresar y persistir los datos de una sonda. El formato enviado será:
{
id: 1, // sondas 1 a 5
temperatura: 34 // entre -20 y 100 °C
}
a lo que el sistema agregará la fecha y hora de recepción antes del almacenamiento.
Realizar las validaciones necesarias: en caso de NO cumplir con los valores estipulados
para cada campo se debe retornar el mensaje: “datos no válidos”, caso contrario retornar
el objeto completo persistido.
b. Listar los datos completos de todas las sondas.
c. Listar los datos de una sonda por su id. Si indico visualizar un id incorrecto se deberá
devolver un texto que diga: “Número de sonda incorrecto”
2. Implementar un endpoint que nos devuelva información estadística sobre las muestras:
- cantidad total de muestras ingresadas
- cantidad de muestras de cada sonda
- promedio de temperatura de cada sonda
La respuesta deberá tener el siguiente formato:
{
estadisticas: {
cantidadTotalMuestras: 15,
temperaturaSondas: {
1: { cantidad: 2, promedio: 23 },
2: { cantidad: 5, promedio: 27 },
3: { cantidad: 5, promedio: 30 },
4: { cantidad: 3, promedio: 21 },
5: { cantidad: 7, promedio: 26 },
}
}
}
En caso de ser necesario, el servidor recibirá desde el cliente los datos requeridos en formato JSON. En
caso de inconvenientes, el servidor responderá con un objeto con un campo ‘errorMsg’ informando el
motivo de la falla. Todas las respuestas deberán estar correctamente adosadas con su código de estado
correspondiente, según el resultado de la operación. En el caso de realizar notificaciones, modularizar
adecuadamente. La notificación en sí puede simularse con un mensaje por terminal.
Aclaraciones sobre el desarrollo esperado:
1. El proyecto debe incluir únicamente el backend del sistema, utilizando Node.js + express. El
formato del servidor es de tipo RESTful. Tener en cuenta los lineamientos de dicho formato,
especialmente a la hora de elegir los nombres de las rutas de acceso al sistema, los verbos que
accionan sobre ellas, y cómo pasar datos adicionales a la consulta.
2. El sistema debe estar correctamente separado en capas y componentes, y esta separación debe
estar claramente puesta de manifiesto en la estructura de carpetas y archivos. Entre los
componentes que esperamos que estén presentes encontramos: router/controlador, casos de
uso, modelo/s, DAO/s, repositorios, servicios de terceros, factories, commands (los que
correspondan de acuerdo al sistema modelado y se hayan visto en cursada).
3. La validación de datos es una parte importante del negocio, por lo tanto, observar cómo y dónde
realizarla.
4. No es necesario utilizar una conexión a base de datos real; es posible persistir en el
DAO/Repositorio usando memoria del servidor.
5. Recordar el rol de las factories, que nos permiten desacoplar las dependencias de nuestros
componentes a la hora necesitar una instancia de los mismos. Recordar esto especialmente a la
hora de decidir cómo obtener los casos de uso para invocarlos desde la capa de ruteo.
6. Pueden reutilizar código de proyectos realizados durante el cuatrimestre, siempre y cuando el
código se utilice y realmente aporte al desarrollo de las funcionalidades pedidas. La inclusión de
código innecesario o fuera de lugar será penalizada.
