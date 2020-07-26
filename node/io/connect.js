const io = require('socket.io')
const sockets = require('./sockets')
const knex = require('../db/knex')

const register = (socket) => {
    sockets[socket.telefone] = socket
}

const connect = (server) =>{
    const socketIo = io(server)
    socketIo.on('connect', socket => {
        sockets.io = socketIo
        socket.on('register', telefone => {
            if(sockets[telefone]){
                sockets[telefone].disconnect()
            }
            knex('membro').select('telefone').where({
                    telefone
                }).first().then(user => {
                    socket.telefone = user ? user.telefone : user
                    register(socket)
                })
                .catch(err => {
                    console.log(err)
                    socket.telefone = null
                })
        })
        socket.on('disconnect', () => {
            delete sockets[socket.telefone]
        })

        setTimeout(() => {
            if (!socket.telefone) {
                socket.disconnect()
            }
        }, 5000)
    })}

module.exports = connect