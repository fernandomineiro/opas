const _ = require('lodash')
const chuncks = [
    [
        {bola: 10, telefone: 999995555},
        {bola: 25, telefone: 999995555},
        {bola: 33, telefone: 999995555},
        {bola: 44, telefone: 999995555},
        {bola: 77, telefone: 999995555},
    ],
    [
        {bola: 33, telefone: 999995555},
        {bola: 22, telefone: 999995555},
        {bola: 51, telefone: 999995555},
        {bola: 37, telefone: 999995555},
        {bola: 22, telefone: 999995555},
    ],
    
    [
        {bola: 53, telefone: 555559999},
        {bola: 65, telefone: 555559999},
        {bola: 70, telefone: 555559999},
        {bola: 80, telefone: 555559999},
        {bola: 90, telefone: 555559999},
    ],
    
]

const sorteadas = [1,2,3,5,7,10,20,33,37,44,56,70,25]

const parser = chuncks.reduce((acc, current) => {
    const bolas = current.filter(bola=>sorteadas.includes(bola.bola))
    const bolasFaltam = current.filter(bola => !sorteadas.includes(bola.bola))
    const obj = {}
    obj.telefone = bolas[0].telefone
    obj.bolas = current
    obj.totalSorteada = bolas.length
    obj.totalFalta = bolasFaltam.length
    obj.faltam = bolasFaltam.map(bola => bola.bola)
    acc.push(obj)
    return acc

}, [])
//console.log("com sort", _.sortBy(parser, 'totalSorteada').reverse())
//console.log("sem sort", parser)
console.log('group', (_.groupBy(parser, 'telefone')))