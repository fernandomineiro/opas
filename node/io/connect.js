const io = require('socket.io')
const sockets = require('./sockets')
const knex = require('../db/knex')

const register = (socket) => {
    sockets[socket.telefone] = socket
}

const criaSalas = socketIo => {
    knex('lots').select('*')
        .then(salas=>salas
            .forEach(sala => socketIo.to(sala.id).emit(sala.id)))
        .catch(err=>console.log(new Error(err)))
}

const connect = (server) =>{
    const socketIo = io(server)
    criaSalas(socketIo)
    socketIo.on('connect', socket => {
        
        sockets.io = socketIo
        socket.on('register', telefone => {
            const salaId = telefone.split(',')[1]
            telefone = telefone.split(',')[0]
            if(sockets[telefone]){
                sockets[telefone].disconnect()
            }
            knex('membro').select('telefone', 'first_name', 'id').where({
                    telefone
                }).first().then(async user => {
                    console.log("usuário:", user.first_name, "conectado! sala:", salaId)
                    
                    await knex('membro').update({sala_id: salaId}).where({id: user.id})
                    socket.join(salaId)
                    
                    socket.telefone = user ? user.telefone : user
                    socket.salaId = salaId
                    register(socket)
                })
                .catch(err => {
                    console.log(err)
                    socket.telefone = null
                })
        })
        socket.on('sair da sala', salaId => {
            socket.leave(salaId)
            socket.disconnect()
        })
        socket.on('disconnect', () => {
            delete sockets[socket.telefone]
            knex('membro').update({sala_id: 0}).where({telefone: socket.telefone})
        })

        setTimeout(() => {
            if (!socket.telefone) {
                socket.disconnect()
            }
        }, 5000)
    })}

module.exports = connect