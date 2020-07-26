import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() {
    this.connect(sessionStorage.getItem('telefone'))
  }
  socket: any;
  on = {
    start() { },
    sorteio(bola) { }
  };
  connect(telefone) {
    if (this.socket && this.socket.connected) return
    const socket = io('http://192.168.100.37:3000')
    socket.on('connect', () => {
      console.log('conectou')
      socket.emit("register", telefone)
      this.socket = socket
      this.iniciarPartida()
      this.sorteio()
    })
  }

  iniciarPartida() {
    this.socket.on('iniciar partida', this.on.start)
  }
  sorteio(){
    this.socket.on('bola sorteada', this.on.sorteio)
  }
}
