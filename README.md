Gestor de Eventos
Este proyecto consta de dos partes el backend que se encarga de de operar detras de escena y darle funcionalidad con distintas lenguajes node js,python, PHP etc
const tambien de una parte grafica que se encarga de mostrar los datos, y va mas de la mano con lo que se conoce como "la cara del proyecto" ya que con esta parte nos encargamos de decorar la página o sitio web.

Para hacer la instalacion de este proyecto en la parte del backend, necesitaremos el siguiente comando
npm install bcryptjs body-parser cors dotenv express jsonwebtoken mongoose nodemon
las funcionalidad de cada una de estas dependencias es:

bcryptjs: es una biblioteca de JavaScript que Proporciona funciones para encriptar contraseñas y comparar contraseñas encriptadas, lo que es útil para proteger datos sensibles como contraseñas de usuarios en bases de datos.

body-parser: es un middleware de Node.js que se utiliza en aplicaciones basadas en Express para procesar y analizar el cuerpo (body) de las solicitudes HTTP.

cors: es un mecanismo de seguridad implementado en los navegadores web que permite o restringe las solicitudes HTTP realizadas desde un dominio diferente al dominio del servidor.

dotenv: es un paquete de Node.js que permite cargar variables de entorno desde un archivo .env en el código de tu aplicación. Se usa principalmente para mantener información sensible (como claves API, credenciales de base de datos o configuraciones específicas) fuera del código fuente.

express: es un framework web para Node.js que permite crear servidores y manejar rutas de forma sencilla y eficiente. Es ligero, rápido y flexible, por lo que es ampliamente utilizado para desarrollar APIs REST, aplicaciones web y servicios backend.

jsonwebtoken: es un paquete de Node.js que permite crear, firmar, verificar y decodificar tokens JWT. Se usa principalmente para autenticación y autorización en aplicaciones web y APIs.

mongoose: es una biblioteca de Node.js que facilita la conexión y manipulación de MongoDB, una base de datos NoSQL. Permite trabajar con datos de manera estructurada mediante modelos y esquemas, simplificando la interacción con la base de datos.

Con estas dependencias desarrollamos un codigo que emule o haga la funcionalidad de un gestor de eventos, con funcionalidad CRUD(crear, leer, actualizar, y eliminar)


Por parte del frontend se hicieron requirieron dependencias tales como : @emotion/react, @emotion/styled, @fortawesome/fontawesome-svg-core, @fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome, @mui/material, @tailwindcss/vite, axios, react, react-dom, react-router-dom, react-scripts, tailwindcss.

Todos estos encargados de en pocas palabras estilos de letra, justificacion de texto, color de texto entre otras cosas.

en el frontend cuenta con el apartado de iniciar sesion, (deberas registrar el usuario por medio de postman) y habras iniciado sesion
en donde para ver los eventos agregados, los aregaras por la herramienta de postman
