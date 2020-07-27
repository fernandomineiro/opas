const getMembroByTelefone = require("../../../db/get-membro-by-telefone")
const insertFilaSerie = require("../../../db/insert-fila-series")
const getBolasSorteadas = require("../../../db/get-bolas-sorteadas-by-id")
const getSala = require("../../../db/get-sala")
const getFilaBySalaAndMembro = require("../../../db/get-fila-by-sala-and-membro")

//{telefone, qtd}
const partida = async (req, res) => {
    
    const {telefone, qtd} = req.body
    const membro = await getMembroByTelefone(telefone)

    if(!membro)return res.status(400).json({err: "membro não encontrado"})
    
    
    const {id: membro_id, partida_id, sala_id} = membro
    const sala = await getSala(sala_id)
    const bolasSorteadas = await getBolasSorteadas(partida_id)
    const fila = await getFilaBySalaAndMembro(sala_id, membro_id)
    const custo = sala.price
    const saldo = membro.saldo

    if(custo * qtd > saldo){
        return res.status(400).json({err: "Saldo insuficiente"})
    }
    
    if(sala.min_qtd > qtd || qtd > sala.quant){
        return res.status(400).json({err: `No mínimo ${sala.min_qtd} e no máximo ${sala.quant}`})
    }

    if(bolasSorteadas.bolas || fila){
        return res.status(400).json({err: 'partida já iniciada, vc não pode comprar cartelas'})
    }

    const exists = (membro_id && partida_id && sala_id && qtd)

    if(!exists){
        return res.status(400).json({err: {membro_id, partida_id, sala_id}})
    }

    const inserted = await insertFilaSerie({membro_id, partida_id, sala_id, qtd})

    if(inserted && !inserted.err){
        return res.json({status: 'ok'})
    }

    res.status(400).json({err: inserted.err.stack || "falha ao inserir na fila"})
}

module.exports = partida