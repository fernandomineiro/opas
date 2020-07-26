const knex = require("../../../db/knex")

const partida = (req, res) => {
    knex('partida1').select()
    res.json({})
}

module.exports = partida