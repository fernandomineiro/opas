import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() {
  }
  socket: any;
  connect(telefone) {
    return new Promise((resolve, reject) => {
      if (this.socket && this.socket.connected) return resolve(this.socket)
      const socket = io('http://64.227.105.89:3000')
      socket.on('connect', () => {
        console.log('conectou')
        socket.emit("register", telefone)
        this.socket = socket
        resolve(socket)
      })
    })

  }
}
