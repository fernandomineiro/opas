const getMembroByTelefone = require("../../../db/get-membro-by-telefone")
const insertFilaSerie = require("../../../db/insert-fila-series")
//{telefone, qtd}
const partida = async (req, res) => {
    const {telefone, qtd} = req.body
    const membro = await getMembroByTelefone(telefone)

    if(!membro)return res.status(400).json({err: "membro não encontrado"})
    
    const {id: membro_id, partida_id, sala_id} = membro
    const inserted = await insertFilaSerie({membro_id, partida_id, sala_id, qtd})
    if(inserted && !inserted.err){
        return res.json({status: 'ok'})
    }
    res.status(400).json({err: inserted.err.stack || "falha ao inserir na fila"})
}

module.exports = partida