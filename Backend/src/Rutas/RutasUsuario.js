const express = require('express');
const router = express.Router();
const UsuarioController = require('../Controllers/UsuarioController');



router.post('/', UsuarioController.crearUsuario);
router.get('/', UsuarioController.ObtenerUsuarios);
router.put('/:id', UsuarioController.ActualizarUsuario);
router.delete('/:id',  UsuarioController.eliminarUsuario);

module.exports = router;
