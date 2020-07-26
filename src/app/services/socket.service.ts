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
    start(){}
  };
  connect(telefone) {
    if(this.socket && this.socket.connected)return
      const socket = io('http://localhost:3000')
      socket.on('connect', () => {
        socket.emit("register", telefone)
        this.socket = socket
        this.iniciarPartida()
      })
  }

  iniciarPartida(){
      this.socket.on('iniciar partida', this.on.start)
  }
}
