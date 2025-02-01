const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectarBDMongo = require('./src/Configuracion/baseDatos'); // MongoDB
const middlewareAutenticacion = require('./src/middleware/middlewareAutenticacion');

// Configuración del entorno
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

//Configuracion especifica de CORS
app.use(cors({
    origin: 'http://localhost:5173', //Permitir solicitudes solo desde el frontend
    methods: ["GET", "POST", "PUT", "DELETE"], //Permitir solicitudes solo desde el frontend
    credentials: true              //Habilitar cookies o encabezados personalizados
}));

// Conexión a MongoDB
conectarBDMongo();

// Rutas
app.use('/api/usuario', require('./src/Rutas/RutasUsuario'));
app.use('/api/Eventos', require('./src/Rutas/RutasEventos'));
app.use('/api/Autenticacion', require('./src/Rutas/RutaAutenticacion'));



// Middleware para rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

// Middleware para manejo de errores
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({ mensaje: 'Error en el servidor', error: error.message });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});