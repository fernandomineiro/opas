import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

// import { mapTo, delay } from 'rxjs/operators';
// import { Platform } from '@ionic/angular';
// import { AppMinimize } from '@ionic-native/app-minimize';
import { timer } from 'rxjs';
// import { CompileShallowModuleMetadata } from '@angular/compiler';
import { AxiosService } from '../services/axios.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2'
import _ from 'lodash'
import * as io from 'socket.io-client'
import config from 'src/config'
import { Insomnia } from '@ionic-native/insomnia/ngx';
@Component({
  selector: 'app-sala1',
  templateUrl: './sala1.page.html',
  styleUrls: ['./sala1.page.scss'],
})
export class Sala1Page implements OnInit {
  data: Student;

  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  subscribeTimer: number;
  timeLeft: number;
  getdata: boolean;
  partida: any;
  saida: any;
  sala: number;
  axios: any;
  contagem: any;
  telefone: any;
  bolasSorteadas: any = [];
  cartelas: any = [{cartela_id: 0}];
  socket
  constructor(
    public insomnia: Insomnia,
    public apiService: ApiService,
    public router: Router,
    private screenOrientation: ScreenOrientation,
    private Axios: AxiosService,
    private route: ActivatedRoute,
    private location: Location
    
  ) {
    this.axios = this.Axios.axios
    this.data = new Student();
    this.telefone = localStorage.getItem('telefone')
    this.data.nome = localStorage.getItem('nome')
    this.route.params.subscribe(params => this.sala = params.sala)
  }

  async ngOnInit() {
    // setTimeout(()=>this.location.back(), 2000)
    
    // setTimeout(()=>{this.router.navigate(['/sala1/1']);}, 10000)
    
    this.setLandscape()
    await this.entrarNaSala()    
    this.data.tipo = 'Linha'
    const socket = io(config.baseURL)
    socket.on('connect', ()=>{
      this.socket = socket
      socket.emit("register", `${this.telefone},${this.sala}` )
      socket.on('iniciar partida', ()=>this.iniciarPartida())
      socket.on('bola sorteada', bola => this.sorteio(bola))
      socket.on('melhores linhas', linhas => this.melhoresLinhas(linhas))
      //socket.on('bingo linha', linha => this.bingoLinha(linha))
      socket.on('bateram linha', (cartelas)=>this.bateramLinha(cartelas))
      socket.on('melhores cartelas', cartelas => this.melhoresCartelas(cartelas))
      socket.on('saldo', saldo => this.atualizarSaldo(saldo))
      socket.on('contagem', segundos => this.contagemRegreciva(segundos))
      // socket.on('voce ganhou', cartela => {
      //   this.cartelas = cartela
      //   Swal.fire('BINGOOOOOO')
      //   this.data.saldo = cartela[0].saldo
      //   //setTimeout(()=>window.document.location.reload(true), 10000)
      // })
      socket.on('bingou', cartelas => this.bingou(cartelas))
    })
  }

  contagemRegreciva(segundos){
    this.contagem =segundos
  }

  atualizarSaldo(saldo){
    this.data.saldo = saldo
  }

  reset(){
    console.log('resetando')
      this.data.a = []
      this.data.vela = []
      this.cartelas = [{cartela_id: 0}]
      this.data.sorteadas = 0
      this.data.bola = 'aguarde'
      this.data.totalBolasCompradas = 0
      this.data.minimo = null
      this.data.maximo = null
      //this.cartelao()
  }

  bingou(cartelas){
    const numeroDasCartelas = cartelas.map(cartela => cartela.cartela_id).join(', ')
    cartelas = cartelas.filter(cartela => cartela.telefone == this.telefone)
      if(cartelas.length){
        this.data.saldo = cartelas[0].saldo
      }
      Swal.fire({
        toast: true, 
        showConfirmButton: true, 
        timerProgressBar: false,
        title: "Bingo nas cartelas:",
        text: numeroDasCartelas,
        icon: "success",
        position: 'top-end',
      })      
  }

  bateramLinha(cartelas){
    const numeroDasCartelas = cartelas.map(cartela => cartela.cartela_id).join(', ')
    cartelas = cartelas.filter(cartela => cartela.telefone == this.telefone)
  
    if(cartelas.length){
      this.data.saldo = cartelas[0].saldo
      //return this.bingoLinha(cartelas)
    }

    Swal.fire({
      toast: true, 
      timer: 8000, 
      showConfirmButton: false, 
      timerProgressBar: true,
      title: "Prêmio de linha nas cartelas:",
      text: numeroDasCartelas,
      icon: "success",
      position: 'top-end',
    })

      // Swal.fire({
      //   title: `Você agora está concorrendo ao prêmio cartela cheia`,
      //   timer: 8000,
      //   text: `Cartelas sorteadas: ${numersDasCartelas}`,
      //   icon: 'success',
      //   showConfirmButton: false,
      //   backdrop: false,
      //   allowOutsideClick: false,
      //   allowEscapeKey: false,
      //   allowEnterKey: false,
      //   timerProgressBar: true
      // })
  }

  bingoLinha(linhas){
    linhas.forEach(() => {
      this.cartelas.shift()
    })
    this.cartelas.unshift(...linhas)
    
    this.data.saldo = linhas[0].saldo
    Swal.fire({
      title: `Voce foi premiado por completar linha ${linhas.map(linha=>linha.cartela_id).join(',')}!!!`,
      timer: 8000,
      icon: 'success',
      showConfirmButton: false,
      backdrop: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    })
  }

  melhoresCartelas(cartelas){
    this.data.tipo = 'Bingo'
    this.data.cartelas = cartelas[0].linha
    this.cartelas = cartelas
    this.data.minimo = cartelas[0].primeiroCartaoId
    this.data.maximo = cartelas[0].ultimoCartaoId
    this.cartelao()
  }

  melhoresLinhas(linhas){
    this.data.cartelas = linhas[0].cartelas
    this.cartelas = linhas
    this.data.minimo = linhas[0].primeiroCartaoId
    this.data.maximo = linhas[0].ultimoCartaoId
    this.cartelao()
  }

  async ngOnDestroy() {
    this.socket.emit('sair da sala', this.sala)
    this.axios.put('membro-sala', { sala_id: 0, telefone: this.telefone })
    this.socket.close()
  }

  sorteio(bola) {
    bola.sorteadas.forEach(bola => this.data.a[bola] = bola );
    this.data.quant = bola.totalCompradas
    this.data.sorteadas = bola.sorteadas.length
    this.bolasSorteadas = bola.sorteadas
    this.playAudio(bola.bola)
    this.data.bola = bola.bola
  }

  async entrarNaSala() {
    const {data} = await this.axios.put('membro-sala', { sala_id: this.sala, telefone: this.telefone })
      .catch(err => {
        Swal.fire(`falha ao entrar na sala ${JSON.stringify(err)}`)
        this.location.back()
      })
      this.data.saldo = data.saldo
      this.data.totalBolasCompradas = data.totalBolasCompradasByMembro
      this.data.quant = data.totalBolasCompradas
      this.data.price = data.price
      this.data.premioBingo = data.bingo
      this.data.premioLinha = data.linha
      this.data.acumuladoAte = data.acumulado_ate
      this.data.minmimoAComprar = data.min_qtd
      this.data.acumulado = data.acumulado
  }

  iniciarPartida() {
    Swal.fire({
      title: 'Partida Iniciada, compra de cartelas liberada!',
      timer: 5000,
      text: 'você tem 90 segundos para efetuar suas compras',
      icon: 'success',
      showConfirmButton: false,
      backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        timerProgressBar: true
    })

    this.reset()
    this.entrarNaSala()

  }

  setLandscape() {
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)
      .then(()=>{})
      .catch(err=>console.log('device não suporta screenOrientation'))
    
    this.insomnia.keepAwake()
      .then(()=>console.log('insomnia ativo'))
      .catch(()=>console.log('device não suport insomnia'))
  }

  playAudio(bola) {
    console.log('play')
    let audio = new Audio();
    audio.src = `assets/${bola}.mp3`;
    audio.load();
    audio.play();
  }

  async comprarSeries() {
    if(this.data.seriesAComprar < this.data.minmimoAComprar){
      return Swal.fire({
        text: `Permitida a compra de no mínimo ${this.data.minmimoAComprar} séries`,
        backdrop: false,
        timer: 5000,
        icon: 'error'
      })
    }
   
    this.axios.post('/comprar-series', {qtd: this.data.seriesAComprar, telefone: this.telefone})
    .then(data => {
      this.data.seriesAComprar = null
      this.data.totalBolasCompradas = this.data.seriesAComprar * 6
      this.data.saldo = data.data.saldo
      Swal.fire({
        toast: true, 
        timer:2000, 
        showConfirmButton: false, 
        timerProgressBar: true,
        title: "Compra realizada com sucesso",
        icon: "success",
        position: 'top-end',
      })
    })
    .catch(err => {
      if(err.response.status){
        return Swal.fire({icon: "error", title: err.response.data.err, backdrop: false})
      }
      Swal.fire({icon: "error", title: err, backdrop: false})
    })
  }

  observableTimer() {
    const source = timer(1000, 5000);
    const abc = source.subscribe(async val => {
      if (val == 20) {
        await this.traz()
      }

    });
  }

  async verificainicio() {

  }

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }
  timer(ms) { return new Promise(res => setTimeout(res, ms)); }

  traz() {

  }

  between(a, b, value){
    return value >= a && value <= b
  }

  cartelao() {
    this.data.vela = []
    const cartelas = this.data.cartelas
    const numeros = cartelas.map(cartela => cartela.numero)
    const linhas = _.chunk(numeros, 5)
    
    this.data.xs = linhas[0][0]
    this.data.xss = linhas[0][1]
    this.data.xsss = linhas[0][2]
    this.data.xssss = linhas[0][3]
    this.data.xsssss = linhas[0][4]
    this.data.zs = linhas[1][0]
    this.data.zss = linhas[1][1]
    this.data.zsss = linhas[1][2]
    this.data.zssss = linhas[1][3]
    this.data.zsssss = linhas[1][4]
    this.data.cs = linhas[2][0]
    this.data.css = linhas[2][1]
    this.data.csss = linhas[2][2]
    this.data.cssss = linhas[2][3]
    this.data.csssss = linhas[2][4]

    if (this.data.xs < 10) {
      this.data.vela[0] = this.data.xs;
    }
    if (this.data.xs >= 10 && this.data.xs < 20) {
      this.data.vela[1] = this.data.xs;
    }

    if (this.data.xs >= 20 && this.data.xs < 30) {
      this.data.vela[2] = this.data.xs;
    }
    if (this.data.xss < 20) {
      this.data.vela[1] = this.data.xss;
    }
    if (this.data.xss >= 20 && this.data.xss < 30) {
      this.data.vela[2] = this.data.xss;
    }

    if (this.data.xss >= 30 && this.data.xss < 40) {
      this.data.vela[3] = this.data.xss;
    }

    if (this.data.xss >= 40 && this.data.xss < 50) {
      this.data.vela[4] = this.data.xss;
    }


    if (this.data.xsss >= 30 && this.data.xsss < 40) {
      this.data.vela[3] = this.data.xsss;
    }

    if (this.data.xsss >= 40 && this.data.xsss < 50) {
      this.data.vela[4] = this.data.xsss;
    }
    if (this.data.xsss >= 50 && this.data.xsss < 60) {
      this.data.vela[5] = this.data.xsss;
    }
    if (this.data.xssss >= 40 && this.data.xssss < 50) {
      this.data.vela[4] = this.data.xssss;
    }
    if (this.data.xssss >= 50 && this.data.xssss < 60) {
      this.data.vela[5] = this.data.xssss;
    }
    if (this.data.xssss >= 60 && this.data.xssss < 70) {
      this.data.vela[6] = this.data.xssss;
    }
    if (this.data.xssss >= 70 && this.data.xssss < 80) {
      this.data.vela[7] = this.data.xssss;
    }

    if (this.data.xsssss >= 60 && this.data.xsssss < 70) {
      this.data.vela[6] = this.data.xsssss;
    }

    if (this.data.xsssss >= 70 && this.data.xsssss < 80) {
      this.data.vela[7] = this.data.xsssss;
    }
    if (this.data.xsssss >= 80) {
      this.data.vela[8] = this.data.xsssss;
    }

    if (this.data.zs < 10) {
      this.data.vela[10] = this.data.zs;
    }
    if (this.data.zs >= 10 && this.data.zs < 20) {
      this.data.vela[11] = this.data.zs;
    }
    if (this.data.zs >= 20 && this.data.zs < 30) {
      this.data.vela[12] = this.data.zs;
    }

    if (this.data.zss < 20) {
      this.data.vela[11] = this.data.zss;
    }
    if (this.data.zss >= 20 && this.data.zss < 30) {
      this.data.vela[12] = this.data.zss;
    }

    if (this.data.zss >= 30 && this.data.zss < 40) {
      this.data.vela[13] = this.data.zss;
    }

    if (this.data.zss >= 40 && this.data.zss < 50) {
      this.data.vela[14] = this.data.zss;
    }


    if (this.data.zsss >= 30 && this.data.zsss < 40) {
      this.data.vela[13] = this.data.zsss;
    }

    if (this.data.zsss >= 40 && this.data.zsss < 50) {
      this.data.vela[14] = this.data.zsss;
    }
    if (this.data.zsss >= 50 && this.data.zsss < 60) {
      this.data.vela[15] = this.data.zsss;
    }
    if (this.data.zssss >= 40 && this.data.zssss < 50) {
      this.data.vela[14] = this.data.zssss;
    }
    if (this.data.zssss >= 50 && this.data.zssss < 60) {
      this.data.vela[15] = this.data.zssss;
    }
    if (this.data.zssss >= 60 && this.data.zssss < 70) {
      this.data.vela[16] = this.data.zssss;
    }
    if (this.data.zssss >= 70 && this.data.zssss < 80) {
      this.data.vela[17] = this.data.zssss;
    }

    if (this.data.zsssss >= 60 && this.data.zsssss < 70) {
      this.data.vela[16] = this.data.zsssss;
    }

    if (this.data.zsssss >= 70 && this.data.zsssss < 80) {
      this.data.vela[17] = this.data.zsssss;
    }
    if (this.data.zsssss >= 80) {
      this.data.vela[18] = this.data.zsssss;
    }

    if (this.data.cs < 10) {
      this.data.vela[20] = this.data.cs;
    }
    if (this.data.cs >= 10 && this.data.cs < 20) {
      this.data.vela[21] = this.data.cs;
    }
    if (this.data.cs >= 20 && this.data.cs < 30) {
      this.data.vela[22] = this.data.cs;
    }

    if (this.data.css < 20) {
      this.data.vela[21] = this.data.css;
    }
    if (this.data.css >= 20 && this.data.css < 30) {
      this.data.vela[22] = this.data.css;
    }

    if (this.data.css >= 30 && this.data.css < 40) {
      this.data.vela[23] = this.data.css;
    }

    if (this.data.css >= 40 && this.data.css < 50) {
      this.data.vela[24] = this.data.css;
    }


    if (this.data.csss >= 30 && this.data.csss < 40) {
      this.data.vela[23] = this.data.csss;
    }

    if (this.data.csss >= 40 && this.data.csss < 50) {
      this.data.vela[24] = this.data.csss;
    }
    if (this.data.csss >= 50 && this.data.csss < 60) {
      this.data.vela[25] = this.data.csss;
    }
    if (this.data.cssss >= 40 && this.data.cssss < 50) {
      this.data.vela[24] = this.data.cssss;
    }
    if (this.data.cssss >= 50 && this.data.cssss < 60) {
      this.data.vela[25] = this.data.cssss;
    }
    if (this.data.cssss >= 60 && this.data.cssss < 70) {
      this.data.vela[26] = this.data.cssss;
    }
    if (this.data.cssss >= 70 && this.data.cssss < 80) {
      this.data.vela[27] = this.data.cssss;
    }

    if (this.data.csssss >= 60 && this.data.csssss < 70) {
      this.data.vela[26] = this.data.csssss;
    }

    if (this.data.csssss >= 70 && this.data.csssss < 80) {
      this.data.vela[27] = this.data.csssss;
    }
    if (this.data.csssss >= 80) {
      this.data.vela[28] = this.data.csssss;
    }
    
  } 
}
