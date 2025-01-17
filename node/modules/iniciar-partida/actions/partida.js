const sockets = require('../../../io/sockets')
const getPartidaIniciadaBySalaId = require('../../../db/getPartidaIniciadaBySalaId')
const criarPartida = require('../../../db/criarPartida')
const getBolas = require('../../../helpers/get-bolas')
const config = require('../../../config.json')
const setPartidaBySalaId = require('../../../db/set-partida-by-salaId')
const getFilaBySalaId = require('../../../db/get-fila-by-salaId')
const comprarCartelas = require('../../../db/comprar-cartelas')
const removeFila = require('../../../db/remove-fila')
const updateBolasSorteadas = require('../../../db/update-bolas-sorteadas')
const getCartelasByMembros = require('../../../db/get-cartelas-by-membros')
const _ = require('lodash')
const getSala = require('../../../db/get-sala')
const alterarSaldo = require('../../../db/alterar-saldo-by-membro')
const getBolasSorteadas = require('../../../db/get-bolas-sorteadas-by-id')
const getMembroByTelefone = require('../../../db/get-membro-by-telefone')
const knex = require('../../../db/knex')
const resetPartida = require('../../../db/reset-partida')
const Globals=require('../../../globals')
const reset = (partidas) => partidas.forEach(async partida => {
    await resetPartida(partida.id)
  });
  knex('partida1').select('*').then(reset)

const timer = interval => new Promise(resolve => setTimeout(resolve, interval))

const premiarCartelas = async (cartelasPremiadas, premio, qtdCartelas) => {
    
    const {sala_id, telefone, partida_id} = cartelasPremiadas
    const sala = await getSala(sala_id)
        .catch(err=>console.log("erro ao pegar sala: ", new Error(err)))
    const membro = await getMembroByTelefone(telefone)
        .catch(err => console.log('erro ao pegar membro:', new Error(err)))
    const bolasSorteadas = await getBolasSorteadas(partida_id)
        .catch(err=>console.log('erro ao pegar bolas sorteadas', new Error(err)))
        
    premio = (premio == 'bingo' && bolasSorteadas.bolas.length <= sala.acumulado_ate)
        ? 'acumulado'
        : premio

    const premios = {
        acumulado: (sala.bingo + sala.acumulado) / qtdCartelas,
        bingo: sala.bingo / qtdCartelas,
        linha: sala.linha / qtdCartelas 
    }

    const saldo = Number((membro.saldo + premios[premio]).toFixed())
    await alterarSaldo(membro.id, saldo)
    
        delete cartelasPremiadas.cartelas
        cartelasPremiadas.saldo = saldo
        const cartelas = cartelasPremiadas
    await knex('ganhadores')
        .insert({membro_id: membro.id, sala_id, partida_id, cartelas: JSON.stringify(cartelas), premio})
    return cartelasPremiadas
}

const premiar = async (cartelas, premio)=>{
    console.log("total de cartelas vencedoras:", cartelas.length, premio)
    let newCartelas = []
    for(const cartela of cartelas){
        const newCartela = await premiarCartelas(cartela, premio, cartelas.length)
        newCartelas.push(newCartela)
    }
    return newCartelas
}

const comprarCartelasDaFila = async (sala_id, partida_id) => {
    const filaDeCompras = await getFilaBySalaId(sala_id)
    
    let total = 0
    for(const fila of filaDeCompras){
        total = total + fila.qtd
        await comprarCartelas({sala_id, membro_id: fila.membro_id, partida_id, qtd: fila.qtd, value: fila.value})
            .catch(err => console.log("erro ao comprar cartelas", new Error(err)))
    }
    return total
}

const gerarLinhas = (bolasCompradas, bolasSorteadas, parar) => {
    if(parar)return
    bolasCompradas = bolasCompradas.map(bola => {
        bola.checked = bolasSorteadas.includes(bola.numero)
        return bola
    })

    const cartelas = _.chunk(bolasCompradas, 15)
    
    const linhas = _.chunk(bolasCompradas, 5)

    return linhas.reduce((acc, linha) => {
        const bolasSorteadasNaLinha = linha.filter(bola => bola.checked)
        const bolasFaltantesNaLinha = linha.filter(bola => !bola.checked)
        
        acc.push({
            cartela_id: linha[0].cartela_id,
            telefone: linha[0].telefone,
            sala_id: linha[0].sala_id,
            partida_id: linha[0].partida_id,
            linha,
            cartelas,
            totalSorteada: bolasSorteadasNaLinha.length,
            faltam: bolasFaltantesNaLinha.map(bola=>bola.numero).join(' '),
            ganhou: bolasSorteadasNaLinha.length === linha.length
        })
        return acc
    }, [])
}

const gerarCartelas = (bolasCompradas, bolasSorteadas) => {
    bolasCompradas = bolasCompradas.map(bola => {
        bolasSorteadas.includes(bola.numero)
        bola.checked = bolasSorteadas.includes(bola.numero)
        return bola
    })
    const linhas = _.chunk(bolasCompradas, 15)

    return linhas.reduce((acc, linha) => {
        const bolasSorteadasNaLinha = linha.filter(bola => bolasSorteadas.includes(bola.numero))
        const bolasFaltantesNaLinha = linha.filter(bola => !bolasSorteadas.includes(bola.numero))
        acc.push({
            cartela_id: linha[0].cartela_id,
            telefone: linha[0].telefone,
            sala_id: linha[0].sala_id,
            partida_id: linha[0].partida_id,
            linha,
            totalSorteada: bolasSorteadasNaLinha.length,
            faltam: bolasFaltantesNaLinha.map(bola=>bola.numero).join(' '),
            ganhou: bolasSorteadasNaLinha.length === linha.length,
        })
        return acc
    }, [])
}

const sendLinhasSorteada = async (linhas, parar) => {
    
    if(parar) return false
    let response = false
    const bingouLinhas = linhas.filter(linha => linha.ganhou)

    if(bingouLinhas.length){
        let cartelasPremiadas = bingouLinhas.map(linha => {
            linha.faltam = 'Linha!'
            return linha
        })
        cartelasPremiadas = await premiar(cartelasPremiadas, 'linha')
            
        sockets.io.in(bingouLinhas[0].sala_id).emit('bateram linha', cartelasPremiadas)
        
        response = true
        await timer(config.tempoBateuLinha)
    }
    return response
}

const sendCartelasSorteadas = async (linhas, parar) => {
    if(parar) return false
    let response = false
    const bingouCartela = linhas.filter(linha => linha.ganhou)
    let premiadas
    if(bingouCartela.length){
      
        let cartelasPremiadas = bingouCartela.map(linha => {
            linha.faltam = 'Bingo!'
            return linha
        })
        cartelasPremiadas = await premiar(cartelasPremiadas, 'bingo')
        premiadas = cartelasPremiadas
        sockets.io.in(bingouCartela[0].sala_id).emit('bingou', cartelasPremiadas)
        response = true
    }
    return response
}

const parseMelhoresLinhas = linhas => _.sortBy(linhas, 'totalSorteada').reverse().slice(0,5)

const sendMelhoresLinhas = (linhas, bolasCompradas) => {
    const group = _.groupBy(linhas, "telefone")
    const telefones = Object.keys(group)
    for(const telefone of telefones){
        let melhores = parseMelhoresLinhas(group[telefone])
        melhores = melhores.map(linha => {
            linha.cartelas = linha.cartelas.reduce((acc, cartela) => {
                const filtered = cartela.filter(cart => cart.cartela_id == linha.cartela_id)
                return [...acc, ...filtered.map(cartela => ({cartela_id: cartela.cartela_id, numero: cartela.numero}))]
            }, [])
            const bolasCompradasByTelefone = bolasCompradas.filter(bola => bola.telefone == telefone)
            linha.primeiroCartaoId = bolasCompradasByTelefone[0].cartela_id
            linha.ultimoCartaoId = bolasCompradasByTelefone[bolasCompradasByTelefone.length - 1].cartela_id
            return linha
        })
        const socket = sockets[telefone]
        const salaId = melhores[0].sala_id 
        if(socket && socket.sala_id == salaId){
            sockets[telefone].emit("melhores linhas", melhores)
        }
    }
}

const sendMelhoresCartelas = (cartelas, bolasCompradas) => {
    
    const group = _.groupBy(cartelas, "telefone")
    const telefones = Object.keys(group)
    for(const telefone of telefones){
        let melhores = parseMelhoresLinhas(group[telefone])
        const bolasCompradasByTelefone = bolasCompradas.filter(bola => bola.telefone == telefone)
        melhores = melhores.map(linha => {
            linha.primeiroCartaoId = bolasCompradasByTelefone[0].cartela_id
            linha.ultimoCartaoId = bolasCompradasByTelefone[bolasCompradasByTelefone.length - 1].cartela_id
            return linha
        })
        const socket = sockets[telefone]
        const salaId = melhores[0].sala_id 
        if(socket && socket.sala_id == salaId){
            sockets[telefone].emit("melhores cartelas", melhores)
        }
    }
}

const sendBola = (sala_id, bola, bolasSorteadas, totalCompradas) => {
    if(sockets.io){
        sockets.io.in(sala_id).emit('bola sorteada', {bola, sorteadas: bolasSorteadas, totalCompradas})
    }
}

const sortearBolas = async (sala_id, bolasSorteadasId, partida_id) => {
    const bolas = getBolas()
    Globals[sala_id] = 95
    await timer(config.tempoDeInicio)
    Globals[sala_id] = 0
    const totalCompradas = await comprarCartelasDaFila(sala_id, partida_id)
    await removeFila(sala_id)
    const bolasCompradas = await getCartelasByMembros(partida_id)
    
    //const linhasDasCartelas = _.chunk(bolasCompradas, 5)
    
    const bolasSorteadas = []
    let pararDeVerificarLinha = false
    let pararDeVerificarBingo = false
    for (const bola of bolas) {
        bolasSorteadas.push(bola)
        sendBola(sala_id, bola, bolasSorteadas, totalCompradas * 6)
        await updateBolasSorteadas(bolasSorteadasId, JSON.stringify(bolasSorteadas))
        
        // TODO
        const linhas = gerarLinhas(bolasCompradas, bolasSorteadas, pararDeVerificarLinha)
        
        const bateuLinha = await sendLinhasSorteada(linhas, pararDeVerificarLinha)
        
        let bingou

        if(!pararDeVerificarLinha && !bateuLinha){
            sendMelhoresLinhas(linhas, bolasCompradas)
        }else{
            const cartelas = gerarCartelas(bolasCompradas, bolasSorteadas)
            bingou = await sendCartelasSorteadas(cartelas, pararDeVerificarBingo)
            sendMelhoresCartelas(cartelas, bolasCompradas)
        }

        if(bateuLinha){
            pararDeVerificarLinha = true
        }
         
        if(bingou || (bolasSorteadas.length == 90)){
            await resetPartida(partida_id)
            knex('lots').update({start: 'nao'}).where({id: sala_id}).then(num=>console.log('resetando lots'))
            break
        }
        
        await timer(config.tempoDeSorteio)
    }
}

const contagem = (sala_id, segundos) => {
    segundos = !segundos ? 95  : segundos
    setTimeout(()=>{
        
        if(segundos){
            segundos = segundos - 1
            if(!segundos) {
                sockets.io.in(sala_id).emit('contagem', segundos)
                return  
            }
            contagem(sala_id, segundos)
            sockets.io.in(sala_id).emit('contagem', segundos)
        }
    }, 1000)
}

const partida = async (req, res) => {
    const {
        sala_id
    } = req.params
    const partidaIniciada = await getPartidaIniciadaBySalaId(sala_id)
    if (partidaIniciada) {
        return res.status(400).json({
            status: false,
            message: 'partida já iniciada'
        })
    }
    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()

    const insertPartida = await criarPartida(sala_id, dia, mes)
    
   const bolasSorteadas = await setPartidaBySalaId(sala_id, insertPartida.id)
    if (insertPartida.err) {
        return res.status(400).json({
            err: err.stack
        })
    }
    if(sockets.io){
        sockets.io.in(sala_id).emit('iniciar partida')
        contagem(sala_id)
    }
    console.log('partida iniciada:', sala_id)
    sortearBolas(sala_id, bolasSorteadas.id, insertPartida.id)
    res.json({
        status: "ok"
    })
}

module.exports = partida