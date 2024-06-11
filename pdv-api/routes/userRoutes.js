const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/authController');
const authenticate = require('../middlewares/authMiddleware')

router.get('/usuario', authenticate, usuarioController.detalharPerfilUsuario);

module.exports = {
    router
}