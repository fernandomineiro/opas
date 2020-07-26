const knex = require('./knex')
module.exports = (sala_id, dia, mes) => {
    knex('lots').update({start: 'sim'}).where({id: sala_id})
    return knex('partida1')
        .insert({sala_id, dia, mes})
        .then(_ => true)
        .catch(err => ({err}))
}