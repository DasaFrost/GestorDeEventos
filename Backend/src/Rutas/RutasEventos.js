const express = require('express');
const router = express.Router();
const eventosController = require('../Controllers/eventosController'); // Importación del controlador

// Crear evento
router.post('/crear', eventosController.crearEvento);

// Obtener evento
router.get('/', eventosController.obtenerEventos);

// Actualizar evento
router.put('/actualizar', eventosController.actualizarEventos);

// Eliminar evento
router.delete('/:id', eventosController.eliminarEvento);

router.get('/:fechaInicio/:fechaFinal', eventosController.filtrarEventoFecha)

module.exports = router;