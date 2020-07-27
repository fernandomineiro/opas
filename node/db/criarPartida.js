const knex = require('./knex')
const getPartidaBySalaId = require('./get-partida-by-salaId')
module.exports = async (sala_id, dia, mes) => {
    await knex('partida1')
        .insert({sala_id, dia, mes})
        .then(_ => true)
        .catch(err => ({err}))

        const partida = await getPartidaBySalaId(sala_id);
        await knex('lots').update({start: 'sim', partida_id: partida.id}).where({id: sala_id})
        return partida
}