const getMembroByTelefone = require("../../../db/get-membro-by-telefone")
const insertFilaSerie = require("../../../db/insert-fila-series")
const getBolasSorteadas = require("../../../db/get-bolas-sorteadas-by-id")
const getSala = require("../../../db/get-sala")
const getFilaBySalaAndMembro = require("../../../db/get-fila-by-sala-and-membro")
const alterarSaldo = require("../../../db/alterar-saldo-by-membro")
const _ = require('lodash')
const knex = require("../../../db/knex")
//{telefone, qtd}
const partida = async (req, res) => {
    
    const {telefone, qtd} = req.body
    const membro = await getMembroByTelefone(telefone)

    if(!membro) return res.status(400).json({err: "membro não encontrado"})
    
    const {id: membro_id, sala_id} = membro
    const sala = await getSala(sala_id)
    console.log('comprando:', membro.first_name, "sala:", sala_id, "partida_id:", sala.partida_id)
    const partida_id = sala.partida_id
    const bolasSorteadas = await getBolasSorteadas(partida_id)
    const fila = await getFilaBySalaAndMembro(sala_id, membro_id, partida_id)
    const custo = sala.price
    const saldo = membro.saldo
    const saldoTotal = saldo - (custo * qtd)

    const filas = await knex('fila_compra_series').sum('qtd as total').where({partida_id}).first()

    if((filas.total + qtd) > 8000){
        return res.status(400).json({err: `Quantidade de séries disponíveis ${8000 - filas.total}`})
    }

    if(saldoTotal < 0){
        return res.status(400).json({err: "Saldo insuficiente"})
    }
    
    if(sala.min_qtd > qtd || qtd > sala.quant){
        return res.status(400).json({err: `No mínimo ${sala.min_qtd} e no máximo ${sala.quant}`})
    }

    if(_.get(bolasSorteadas, 'bolas') || fila){
        return res.status(400).json({err: 'partida já iniciada, você não pode comprar cartelas'})
    }

    const exists = (membro_id && partida_id && sala_id && qtd)

    if(!exists){
        return res.status(400).json({err: {membro_id, partida_id, sala_id}})
    }

    const filaCompra = await knex('fila_compra_series').select({membro_id}).first()
    const membroCartelas = await knex('membro_cartelas').select({membro_id}).first()
    console.log('filacompra', filaCompra)
    console.log('membroCartelas', membroCartelas)
    if(filaCompra || membroCartelas){
        return res.status(400).json({err: "Você já comprou cartelas"})
    }

    const inserted = await insertFilaSerie({membro_id, partida_id, sala_id, qtd, value: sala.price})

    const alterouSaldo = await alterarSaldo(membro_id, saldoTotal).then(_=>true).catch(err=>({err}))

    if(inserted && !inserted.err && !alterouSaldo.err){
        
        return res.json({status: 'ok', saldo: saldoTotal})
    }

    res.status(400).json({err: inserted.err.stack || alterouSaldo.err || "falha ao inserir na fila"})
}

module.exports = partida