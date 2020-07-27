const knex = require("./knex");

module.exports = id => {
    knex('partida1').update({status: 0}).where({id})
    knex('lots').update({start: 'nao'}).where({partida_id: id})
}