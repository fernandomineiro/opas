const knex = require('./knex')
knex('lots').update({start: 'nao'}).then(num=>console.log('alterando lots apra start: nao', num)).catch(console.log)
knex('membro').update({sala_id: 0}).then(()=>{}).catch(err=>console.log('erro ao zerar salas dos membros', new Error(err)))
const resetPartida = async (partida_id) => {
    
    console.log("resetando partida:", partida_id)
    knex('lots').update({start: 'nao'}).where({partida_id}).then(num=>console.log('alterando lots apra start: nao', num)).catch(console.log)
    await knex('relatorio_partida1')
        .insert(function () {
            this.from('partida1')
                .where({
                    id: partida_id
                })
                .select('*')
        }).catch(err => {
            console.log('erro ao criar relatorio_partida1 ', new Error(err))
        })

    await knex('partida1').delete().where({id: partida_id}).catch(err => console.log('erro ao deletar partida1 ', new Error(err)))

    await knex('relatorio_membro_cartelas')
        .insert(function () {
            this.from('membro_cartelas')
                .where({
                    partida_id
                })
                .select('*')
        }).catch(err => console.log('erro ao criar relatorio_membro_cartelas ', new Error(err)))

    await knex('membro_cartelas').delete().where({partida_id}).catch(err => console.log('erro ao deletar membro_cartelas ', new Error(err)))

    await knex('relatorio_bolas_sorteadas')
        .insert(function () {
            this.from('bolas_sorteadas')
                .where({
                    partida_id
                })
                .select('*')
        }).catch(err => console.log('erro ao criar relatorio_membro_cartelas ', new Error(err)))

    await knex('bolas_sorteadas').delete().where({partida_id}).catch(err => console.log('erro ao deletar bolas_sorteadas ', new Error(err)))
}

module.exports = resetPartida