const knex = require('knex');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knexfile = require('../config/knexfile');

const db = knex(knexfile.development);
const JWT_SECRET = 'password_secret'; 

const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;
  
    // Validação dos campos obrigatórios
    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }
  
    try {
      // Verificar se o usuário existe
      const user = await db('usuarios').where({ email }).first();
      if (!user) {
        return res.status(400).json({ error: 'Email ou senha inválidos' });
      }
  
      // Verificar a senha
      const isPasswordValid = await bcrypt.compare(senha, user.senha);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Email ou senha inválidos' });
      }
  
      // Gerar o token de autenticação
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao realizar login' });
    }
  };
  
  
  module.exports = {
    loginUsuario  
  };
  