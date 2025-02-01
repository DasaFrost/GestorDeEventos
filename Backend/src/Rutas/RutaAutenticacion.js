const express = require('express');
const router = express.Router();
const AutenticacionController = require('../Controllers/AutenticacionController');


router.post('/registro', AutenticacionController.registrarUsuario);
router.post('/iniciarsesion', AutenticacionController.iniciarSesion);

module.exports = router;
