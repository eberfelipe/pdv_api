const bcrypt = require("bcrypt")
const knex = require("../knexfile")
const jwt = require("jsonwebtoken")

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const EmailUsado = await knex("usuarios").where({ email }).first();

        if (EmailUsado) {
            return res.status(400).json({ mensagem: "O email usado já existe" })
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const usuario = await knex("usuarios").insert({
            nome,
            email,
            senha: senhaCriptografada
        });

        return res.status(200).json(usuario[0])
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" + error.message })
    }
}


module.exports = {
    cadastrarUsuario
};