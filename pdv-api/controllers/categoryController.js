const knex = require("../config/database");

const listCategory = async (req, res) => {
	try {
		const result = await knex.select("*").from("categorias");

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({ mensagem: "erro do servidor" });
  }
};

module.exports = {
    listCategory
}