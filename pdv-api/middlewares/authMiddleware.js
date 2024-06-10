const jwt = require('jsonwebtoken');
const knex = require('knex');
const knexfile = require('../config/knexfile');

const db = knex(knexfile.development);
const JWT_SECRET = 'password_secret'; 

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await db('usuarios').where({ id: decoded.id }).first();

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = authenticate;
