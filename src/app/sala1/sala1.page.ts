import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { mapTo, delay } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { AppMinimize } from '@ionic-native/app-minimize';
import { timer } from 'rxjs';

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
  constructor(
    public apiService: ApiService,
    public router: Router,
    private screenOrientation: ScreenOrientation

  ) {
    this.data = new Student();
    // logs the current orientation, example: 'landscape'
    // detect orientation changes
  }

   ngOnInit() {
    this.data.verdadee= true;
    this.verificainicio()

    this.data.tipo = 'Linha';
    this.data.sala = '1';
    this.data.linhafoi = false;
    this.apiService.buscapartida(this.data.sala).subscribe((response) => {
      this.data.pbingo = response[0].bingo;
      this.data.plinha = response[0].linha;
      this.data.price = response[0].price;
      this.data.quant = response[0].quant;
      this.data.linhabingo = false;
      this.data.valor = 4000;
      this.data.botao = true;

    });
    this.setLandscape();
    this.data.nome = sessionStorage.getItem("nome");
    this.data.telefone = sessionStorage.getItem("telefone");
    console.log(this.data.telefone);
    this.apiService.home(this.data.telefone).subscribe((response) => {
      this.data.saldo = response.saldo;
      this.data.telefone = response.telefone;
    })
    if (this.data.bola == "") {
      this.data.bola = 'aguarde';
    }
  }
  open(): void {
    this.data.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
    this.data.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }


  setLandscape() {
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "assets/1.mp3";
    audio.load();
    audio.play();
  }

  async submitForm() {
    function chunk(array, size) {
      if (!array) return [];
      const firstChunk = array.slice(0, size); // create the first chunk of the given array
      if (!firstChunk.length) {
        return array; // this is the base case to terminal the recursive
      }
      return [firstChunk].concat(chunk(array.slice(size, array.length), size)); 
    }
    if (parseInt(this.data.cartela) <= 1) {
      alert('só pode ser maior que 2');
    }
    else {
      var val = this.data.cartela;
      var res = this.data.price * val;

      if (this.data.saldo < res) {
        alert('Você não tem saldo suficiente');
      }
      else {
        this.data.botao = false;
        var tuco = this.data.saldo - res;
        this.data.saldo = tuco;
        this.data.lili = tuco;
        this.apiService.alterasaldo(this.data.telefone, this.data.lili).subscribe((response) => { })
        this.apiService.pegaposicao(this.data.telefone).subscribe((response)=>{
          console.log(response);
          this.data.posicao = response["minimo"];
          
        })
        this.data.serie = []
        this.data.recursiva = this.data.cartela;
        this.data.tantascartela = this.data.cartela;
        this.data.tantascartela = this.data.tantascartela * 6;

        
        const [responses] = await this.cartelinhas(this.data.tantascartela)

        const cartoes = chunk(responses, 3)

        cartoes.forEach(response => {
          this.data.safra = [];
          this.data.safraa = [];
          this.data.safraaa = [];
          this.data.lote = [];
          this.data.linex = false;
          // this.data.z = response[0]['numero'];
          // this.data.zz = response[1]['numero'];
          // this.data.zzz = response[2]['numero'];
          // this.data.x = response[3]['numero'];
          // this.data.xx = response[4]['numero'];
          // this.data.xxx = response[5]['numero'];
          // this.data.c = response[6]['numero'];
          // this.data.cc = response[7]['numero'];
          // this.data.ccc = response[8]['numero'];
          // this.data.v = response[9]['numero'];
          // this.data.vv = response[10]['numero'];
          // this.data.vvv = response[11]['numero'];
          // this.data.b = response[12]['numero'];
          // this.data.bb = response[13]['numero'];
          // this.data.bbb = response[14]['numero'];
          // this.data.safra.push(this.data.z);
          // this.data.safraa.push(this.data.xxx);
          // this.data.safraaa.push(this.data.vv);
          // this.data.safra.push(this.data.zz);
          // this.data.safraa.push(this.data.c);
          // this.data.safraaa.push(this.data.vvv);
          // this.data.safra.push(this.data.zzz);
          // this.data.safraa.push(this.data.cc);
          // this.data.safraaa.push(this.data.b);
          // this.data.safra.push(this.data.x);
          // this.data.safraa.push(this.data.ccc);
          // this.data.safraaa.push(this.data.bb);
          // this.data.safra.push(this.data.xx);
          // this.data.safraa.push(this.data.v);
          // this.data.safraaa.push(this.data.bbb);

          // this.data.lote[0] =;
          // this.data.lote[1] = this.data.safraa;
          // this.data.lote[2] = this.data.safraaa;
          this.data.serie.push([response[0], response[1], response[2]]);
        });
        this.apiService.trazcartela(this.data.telefone).subscribe(async (response) => {
          this.data.minimo = response.minimo;
          this.data.maximo = response.quantidade;
        })
        console.log(this.data.serie);
     //   await this.traz()
      }
    }
  }
 observableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(async val => {
      console.log(val);
      if(val == 10){
        await this.traz()
      }
      
    });
  }

  async verificainicio(){
   if(this.data.verdadee == true){
    this.observableTimer();
    setInterval(async () => {
    this.apiService.trazsala().subscribe((response)=>{
     this.data.verdade = response[0]['start'];
     console.log(response[0]['start']);
    })
  }, 1000);
}
  if(this.data.verdade == 'sim'){
    this.data.verdadee=false;
    
    this.observableTimer();
  }
  }
 
  cartelinhas(cartelas):any {
    return new Promise((resolve, rejects) => {
      this.apiService.buscacartela(cartelas, this.data.telefone).subscribe((response) => {
        resolve(response)
      })
    })
  }

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }
  timer(ms) { return new Promise(res => setTimeout(res, ms)); }

  sorteio(z):any {
    return new Promise((resolve, reject) => this.apiService.sorteio(z).subscribe(resolve))
  }

  async traz() {
    for (var z = 1; z <= 90; z++) {
      const [response] = await this.sorteio(z)

      this.data.numerolinha = [];

      if (this.data.linhabingo == true) {
        await this.timer(8000)
        document.location.reload(true);
      }
      const {bola} = response
      this.data.teste = bola;
      this.data.a[this.data.teste] = this.data.teste;
      this.data.bola = this.data.teste;

      this.data.sorteadas = this.data.sorteadas + 1;
      if (this.data.bolas.indexOf(this.data.bola) > -1) {

      } else {

        this.data.bolas.push(+this.data.bola);
        var a = this.data.bola;
        this.data.audio = new Audio();
        this.data.audio.src = 'assets/' + a + '.mp3';
        this.data.audio.play();
        this.data.papa = this.melhor();
      }
      if (this.data.linex == false) {
        this.percurso()
        await this.linha();
        
      }
      else {
        this.percursos();
        await this.bingo();
        
      }
      this.data.vela = [];
      this.cartelao();

      this.data.linhafoi = false;
      this.data.resultadolinha = false;
      await this.timer(4000)
    }
  }

  task(i) {
    return this.timer(i);
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
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
      this.data.vela[2] = this.data.xss;
    }
    if (this.data.xss > 20 && this.data.xss < 30) {
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
      this.data.vela[12] = this.data.cs;
    }
    
    if (this.data.zss < 20) {
      this.data.vela[12] = this.data.zss;
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
      this.data.vela[21] = this.data.cs;
    }
    
    if (this.data.css < 20) {
      this.data.vela[22] = this.data.css;
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
      this.data.mina[rt] = posicao  + this.data.posicao; 
      this.data.minaa[rt] = tt;    
      this.data.valores[posicao] = 99;
    }

    if (this.data.min[4] == "") {
      await this.bingo();
      alert('Bingooooo');
      this.router.navigate(['/sala1']);
    }
    if (this.data.min[4] == []) {
      await this.bingo();
      alert('Bingooooo');
      this.router.navigate(['/sala1']);
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
  melhor() {
    return this.data.serie.map(cartela => {
      return cartela.map(cart => {
        return cart.reduce((acc, num) => {
          if (!this.data.bolas.includes(num)) {
            acc.push(num)
          }
          return acc
        }, [])
      })
    })

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
                var linha = tt + 1 + this.data.posicao;
                this.data.numerolinha.push(linha);
              }
            }
          }
        }
      }
    }

    if (this.data.numerolinha.length != 0) {
      for (var tt = 0; tt < this.data.numerolinha.length; tt++) {
        this.data.mina[tt] = this.data.numerolinha[tt];
        this.data.min[tt] = 'LINHA';
        
      }
      this.data.linhaaaaa = 'LINHA!!! cartão número - ' + this.data.numerolinha;
      this.data.linhafoi = true;
      this.data.linhasim = true;
      this.data.linex = true;
      // this.task(12000);
      this.data.resultadolinha = true;
      this.data.tipo = 'Bingo';

      this.data.pes = true;
      this.data.saldo = parseInt(this.data.saldo) + parseInt(this.data.plinha);
      this.apiService.ganhadorlinha(this.data.telefone, this.data.plinha).subscribe((response) => {
      })
      this.data.valor = 8000;
      await this.task(8000);
    }
  }

  async bingo() {
    for (var tt = 0; tt < this.data.tantascartela; tt++) {
      this.data.ponto = 0;
      for (var zz = 0; zz <= 2; zz++) {

        for (var xx = 0; xx < 15; xx++) {
          for (var cc = 0; cc < this.data.bolas.length; cc++) {
            if (this.data.serie[tt][zz][xx] == this.data.bolas[cc]) {
              this.data.ponto = this.data.ponto + 1;
              if (this.data.ponto == 15) {
                var linha = tt + 1 + this.data.posicao;
                this.data.mina[0] = linha;
                this.data.min[0] = 'BINGO';

                this.data.resultadolinha = true;
                this.data.linhafoi = true;
                this.data.pes = true;
                this.data.linhabingo = true;
                this.data.linhaaaaa = 'Bingoooo!!! cartão número - ' + linha;
                this.data.saldo = parseInt(this.data.saldo) + parseInt(this.data.pbingo);
                this.apiService.ganhadorlinha(this.data.telefone, this.data.pbingo).subscribe(async (response) => {
                })
                this.data.valor = 8000;
                await this.task(8000);
               
              }
            }
          }
        }
      }
    }
  }

  ac(min, max) {
    this.data.play = Math.random() * (max - min) + min;
  }

  linhaz() {
    for (var tt = 0; tt < this.data.tantascartela; tt++) {
      for (var zz = 0; zz <= 2; zz++) {
        this.data.ponto = 0;
        for (var xx = 0; xx < 5; xx++) {
          for (var cc = 0; cc < this.data.bolas.length; cc++) {
            if (this.data.serie[tt][zz][xx] == this.data.bolas[cc]) {
              this.data.ponto = this.data.ponto + 1;
              if (this.data.ponto == 5) {
                alert('linha');
              }
            }
          }
        }
      }

    }
  }


}
