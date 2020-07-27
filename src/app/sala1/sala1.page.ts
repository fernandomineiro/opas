import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { mapTo, delay } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { AppMinimize } from '@ionic-native/app-minimize';
import { timer } from 'rxjs';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { AxiosService } from '../services/axios.service';
import { SocketService } from '../services/socket.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2'
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
  contagem: any = 95;
  partidaIniciada: boolean = false;
  telefone: any;
  bolasSorteadas: any = [];
  constructor(
    public apiService: ApiService,
    public router: Router,
    private screenOrientation: ScreenOrientation,
    private Axios: AxiosService,
    private route: ActivatedRoute,
    private socket: SocketService,
    private location: Location
  ) {
    this.axios = this.Axios.axios
    this.data = new Student();
    this.telefone = sessionStorage.getItem('telefone')
    this.data.nome = sessionStorage.getItem('nome')
    this.route.params.subscribe(params => this.sala = params.sala)
  }

  async ngOnInit() {
    const socket: any = await this.socket.connect(this.telefone)
    this.data.bola = 'aguarde'
    socket.on('iniciar partida', ()=>!this.partidaIniciada ? this.iniciarPartida() : null)
    socket.on('bola sorteada', bola => this.sorteio(bola))
    this.entrarNaSala()
    //TODO
    this.data.botao = true
  }

  async ngOnDestroy() {
    this.axios.put('membro-sala', { sala_id: 0, telefone: this.telefone })
  }

  sorteio(bola) {
    this.bolasSorteadas.push(bola)
    this.playAudio(bola)
    this.data.bola = bola
  }

  entrarNaSala() {
    return this.axios.put('membro-sala', { sala_id: this.sala, telefone: this.telefone })
      .catch(_ => this.location.back())
  }

  iniciarPartida() {
    this.partidaIniciada = true
    this.data.botao = true
    this.contagemRegressiva()

    Swal.fire({
      title: 'Partida Iniciada, compra de cartelas liberada!',
      timer: 5000,
      text: 'você tem 90 segundos para efetuar suas compras',
      icon: 'success',
      showConfirmButton: false,
    })

  }

  contagemRegressiva() {
    this.contagem = this.contagem - 1
    if (!this.contagem) {
      this.partidaIniciada = false
      this.contagem = 90
      return this.data.botao = false
    }
    setTimeout(() => this.contagemRegressiva(), 1000)
  }

  async getPartida(salaId) {
    const partida = await this.axios.get('/get-partida', { salaId })
  }

  async getData() {

  }

  setLandscape() {
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  playAudio(bola) {
    let audio = new Audio();
    audio.src = `assets/${bola}.mp3`;
    audio.load();
    audio.play();
  }

  async comprarSeries() {
    this.axios.post('/comprar-series', {qtd: this.data.cartela, telefone: this.telefone})
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

  cartelao() {
    var rr = this.data.serie[this.data.minaa[0]];
    rr[0].sort(function (a, b) {
      return a - b;
    });

    rr[1].sort(function (a, b) {
      return a - b;
    });

    rr[2].sort(function (a, b) {
      return a - b;
    });
    this.data.xs = rr[0][0];
    this.data.xss = rr[0][1];
    this.data.xsss = rr[0][2];
    this.data.xssss = rr[0][3];
    this.data.xsssss = rr[0][4];
    this.data.zs = rr[1][0];
    this.data.zss = rr[1][1];
    this.data.zsss = rr[1][2];
    this.data.zssss = rr[1][3];
    this.data.zsssss = rr[1][4];
    this.data.cs = rr[2][0];
    this.data.css = rr[2][1];
    this.data.csss = rr[2][2];
    this.data.cssss = rr[2][3];
    this.data.csssss = rr[2][4];

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

  ortfunction(a, b) {
    return (a - b)
  }

  async percursos() {
    this.data.valores = [];
    this.data.minaa = [];
    this.data.ee;


    for (var tt = 0; tt < this.data.tantascartela; tt++) {
      this.data.soma = 0;
      for (var zz = 0; zz <= 2; zz++) {
        var soma = this.data.papa[tt][zz].length;

        this.data.soma = soma + this.data.soma;
        //this.data.valores.push(this.data.papa[tt][zz]);
      }

      this.data.valores[tt] = this.data.soma;

    }
    for (var rt = 0; rt <= 4; rt++) {
      var menor = Math.min.apply(Math, this.data.valores);

      var posicao = this.data.valores.indexOf(menor);
      this.data.min[rt] = this.data.papa[posicao].join('       ');
      this.data.mina[rt] = posicao + this.data.posicao;
      this.data.minaa[rt] = posicao;
      this.data.valores[posicao] = 99;
    }


  }

  percurso() {
    this.data.valores = [];
    for (var tt = 0; tt < this.data.tantascartela; tt++) {
      this.data.soma = 0;
      for (var zz = 0; zz <= 2; zz++) {
        this.data.soma = this.data.papa[tt][zz].length;
        this.data.valores.push(this.data.papa[tt][zz]);
      }
      //this.data.valores[tt] = this.data.soma;
    }
    var de = this.data.valores.sort(function compare(a, b) {
      if (a.length < b.length) return -1;
      if (a.length > b.length) return 1;
      return 0;
    });

    if (de[0] == "") {
      de[0] = 'linhaaa';
    }

    if (de[1] == "") {
      de[1] = 'linhaaa';
    }


    this.data.min[0] = de[0];
    this.data.min[1] = de[1];
    this.data.min[2] = de[2];
    this.data.min[3] = de[3];
    this.data.min[4] = de[4];
    for (var zu = 0; zu <= 4; zu++) {
      for (var tt = 0; tt < this.data.tantascartela; tt++) {
        for (var zz = 0; zz <= 2; zz++) {
          if (de[zu] == this.data.papa[tt][zz]) {
            this.data.mina[zu] = tt + this.data.posicao;
            this.data.minaa[zu] = tt;
          }
        }
      }
    }
  }
  arrayCompare(first, last) {
    var result = first.filter(function (item) { return last.indexOf(item) > -1 });
    return result.length;
  }

  async linha() {

    this.data.numerolinha = [];
    for (var tt = 0; tt < this.data.tantascartela; tt++) {
      for (var zz = 0; zz <= 2; zz++) {
        this.data.ponto = 0;
        for (var xx = 0; xx < 5; xx++) {
          for (var cc = 0; cc < this.data.bolas.length; cc++) {
            if (this.data.serie[tt][zz][xx] == this.data.bolas[cc]) {
              this.data.ponto = this.data.ponto + 1;
              if (this.data.ponto == 5) {
                var linha = tt + (this.data.posicao || 0);
                this.data.numerolinha.push(linha);
                var dd = tt;

              }
            }
          }
        }
      }
    }

    if (this.data.numerolinha.length != 0) {
      for (var tt = 0; tt < this.data.numerolinha.length; tt++) {
        this.data.mina[tt] = linha;
        this.data.min[tt] = 'LINHA';


      }

      this.data.linhaaaaa = 'LINHA!!! cartão número - ' + this.data.numerolinha;
      this.data.linhafoi = true;
      this.data.linhasim = true;
      this.data.linex = true;
      this.data.minaa[0] = dd;
      this.data.tipo = 'Bingo';

      this.data.pes = true;
      this.data.saldo = parseInt(this.data.saldo) + parseInt(this.data.plinha);

    }
  }

}
