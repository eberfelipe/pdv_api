const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const usuarioController = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware')

router.post('/login', authController.loginUsuario);
router.post('/cadastrar', usuarioController.cadastrarUsuario);
router.get('/usuario', authenticate, usuarioController.detalharPerfilUsuario);

module.exports = router;