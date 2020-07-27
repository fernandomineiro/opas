const getMembroByTelefone = require("../../../db/get-membro-by-telefone")
const insertFilaSerie = require("../../../db/insert-fila-series")
const getBolasSorteadas = require("../../../db/get-bolas-sorteadas-by-id")
//{telefone, qtd}
const partida = async (req, res) => {
    
    const {telefone, qtd} = req.body
    const membro = await getMembroByTelefone(telefone)

    if(!membro)return res.status(400).json({err: "membro não encontrado"})
    
    const {id: membro_id, partida_id, sala_id} = membro
    const bolasSorteadas = await getBolasSorteadas(partida_id)
    if(bolasSorteadas.bolas){
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