import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


import { mapTo, delay } from 'rxjs/operators';
import { Platform } from '@ionic/angular';

import { AppMinimize } from '@ionic-native/app-minimize';





@Component({
  selector: 'app-sala1',
  templateUrl: './sala1.page.html',
  styleUrls: ['./sala1.page.scss'],
})
export class Sala1Page implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
z:any;
x:any;
c:any;
v:any;
b:any;
n:any;
  recursiva:any;
time: number = 0;
interval;
play:any;
i:any;
bola:any = [];
safra:any = [];
safraa:any = [];
safraaa:any = [];
safraaaa:any = [];
safraaaaa:any = [];
safraaaaaa:any = [];
a:any = [];
cartela:any = [];
teste:any;
data: Student;
tantascartela: any;
serie:any = [];
lote:any = [];
bolas:any = [];
bolass:any = [];
ponto: any = 0;
pontoo: any = 0;
opa:any;
bolay:any;
lili:any= [];
lilica:any= [];
lilicaca:any;
aa: any;
sorteadas:any = 0;
currentScreenOrientation:string;
timeLeft: number = 60;
ii:any = 0;
pi:any;
numero:any;
papa: any;
valores:any = [];
ee;
soma:any;
min:any = [];
linhaa:any;
mina:any = [];
minaa:any = [];
audio:any;
linex: any;
zz:any;
zzz:any;
xx:any;
xxx:any;
cc:any;
ccc:any;
vv:any;
vvv:any;
bb:any;
bbb:any;
tu:any= [];
linhaaaaa:any;
nome:any;
saldo:any;
linhafoi:any;
linhasim:any;
  modalController: any;
  element: any;
resultadolinha:any;
tipo: any;
resultadobingo:any;
linhabingo:any;
pes:any;
sala:any;
price:any;
pbingo:any;
plinha:any;
quant:any;
telefone:any;
lapa:any;
seriea:any= [];
serieb:any= [];
lila:any;
numerolinha:any= [];
valor:any;
xs:any;
xss:any;
xsss:any;
xssss:any;
xsssss:any;
zs:any;
zss:any;
zsss:any;
zssss:any;
zsssss:any;
cs:any;
css:any;
csss:any;
cssss:any;
csssss:any;
vela:any = [];





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
   this.tipo = 'Linha';
   this.sala = '1';
   this.linhafoi=false;
  


   this.apiService.buscapartida(this.sala).subscribe((response) => {
    console.log(response);
    this.pbingo = response[0].bingo;
    this.plinha = response[0].linha;
    this.price= response[0].price;
    this.quant = response[0].quant;
    this.linhabingo = false;
    this.valor = 4000;

  });
  

    this.setLandscape();
//    this.playAudio();
this.nome = sessionStorage.getItem("nome"); 
this.telefone = sessionStorage.getItem("telefone"); 
this.apiService.home(this.telefone).subscribe((response)=>{
  this.saldo = response.saldo;
})
console.log(this.telefone);
if(this.bola == ""){
  this.bola='aguarde';
  
}
  } 
  dismiss() {
    
    }
  
    open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('jw-modal-open');
  }
 

  setLandscape(){
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
 
  playAudio(){
    let audio = new Audio();
    audio.src = "assets/1.mp3";
    audio.load();
    audio.play();
  }

  async submitForm() {


    
    if(this.data['cartela']  <= '1'){
      alert('só pode ser maior que 2');
    }
    else{
       var val = this.data['cartela'];
      var res = this.price * val;
      
      if(this.saldo < res){
          alert('Você não tem saldo suficiente');
      }
      else{
        var tuco = this.saldo - res;
        this.saldo = tuco;
        this.lili = tuco;
        await this.apiService.alterasaldo(this.telefone,this.lili).subscribe((response)=>{
          //console.log(response);
        })
       
      
        this.serie =[]
    

        this.recursiva = this.data['cartela'];
        this.tantascartela =this.data['cartela'];
        this.tantascartela = this.tantascartela * 6;
       
  
        for(var a= 0; a< this.tantascartela; a++){
          this.safra = [];
          this.safraa = [];
          this.safraaa = [];
          this.lote = [];
          
            
            this.linex = false;
            this.lapa = a + 1;

            const response = await this.cartelinhas();
        this.z = parseInt(response[0]['numero']);
        this.zz = parseInt(response[1]['numero']);
       this.zzz = parseInt(response[2]['numero']);
       this.x = parseInt(response[3]['numero']);
       this.xx = parseInt(response[4]['numero']);
       this.xxx = parseInt(response[5]['numero']);
       this.c = parseInt(response[6]['numero']);
       this.cc = parseInt(response[7]['numero']);
       this.ccc = parseInt(response[8]['numero']);
       this.v = parseInt(response[9]['numero']);
       this.vv = parseInt(response[10]['numero']);
       this.vvv = parseInt(response[11]['numero']);
       this.b = parseInt(response[12]['numero']);
       this.bb = parseInt(response[13]['numero']);
       this.bbb = parseInt(response[14]['numero']);
      // console.log(this.z);
       
          
             
           
           // console.log(this.z);
            
            this.safra.push(this.z);
            this.safraa.push(this.zz);
            this.safraaa.push(this.zzz);
          
            
            this.safra.push(this.x);
            this.safraa.push(this.xx);
            this.safraaa.push(this.xxx);
           
            this.safra.push(this.c);
            this.safraa.push(this.cc);
            this.safraaa.push(this.ccc);
            
            this.safra.push(this.v);
            this.safraa.push(this.vv);
            this.safraaa.push(this.vvv);
           
            this.safra.push(this.b);
            this.safraa.push(this.bb);
            this.safraaa.push(this.bbb);
           
           
            
           // console.log(this.safra);
          //  console.log(this.safraa);
          //  console.log(this.safraaa);
            
            this.lote[0] = this.safra;
            this.lote[1] = this.safraa;
            this.lote[2] = this.safraaa;
          
  
            //console.log(this.lote[0]);
          //  console.log(this.lote[1]);
           // console.log(this.lote[2]);
  
  
            
            
  
           // this.lote[3] = this.safraaaa;
           // this.lote[4] = this.safraaaaa;
          //  this.lote[5] = this.safraaaaaa;
          
          
        //  this.serie[this.lapa] = this.lote; 
          this.serie.push(this.lote);
          
          
  
        
  
    
        }
  
       //
       //this.traz();
    // console.log(this.serie);
    // console.log(this.seriea);
    // console.log(this.serieb);
  
      //this.opa = this.traz()
      //console.log(this.opa);
     // console.log(this.recursiva);
     
     this.traz();
      }
      
      }
      

    
     
    
    
  }

  cartelinhas(){
    return new Promise((resolve,rejects)=>{
      this.apiService.buscacartela(this.lapa).subscribe((response)=>{
       resolve(response)
  })
    })
   
  }
  
   randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }
  timer(ms) { return new Promise(res => setTimeout(res, ms)); }

  async traz() {
    
    
    for(var z=0; z<=90; z++){
      
      await this.task(this.valor);
    this.apiService.sorteio(z).subscribe(async (response)=>{
     if(!response.length)return
    
    this.numerolinha = [];
    
    if(this.linhabingo == true){
      document.location.reload(true);
   }
   

    this.teste = response[0]['bola'];
    this.a[this.teste] = this.teste;
    this.bola = this.teste;
   
    this.sorteadas = 1 + this.sorteadas; 
    if (this.bolas.indexOf(this.bola) > -1) {
      
    } else {
      
        this.bolas.push(+this.bola);
       // this.linha();
     var a = this.bola;
     console.log(a);
       this.audio = new Audio();
    this.audio.src = 'assets/'+a+'.mp3';
    this.audio.play();
    // console.log(this.melhor());
    this.papa = this.melhor();
    
   // console.log(this.percurso());


     // this.delay(3000);
     // this.bingo();
    }
   
   // console.log(this.bolas);
    
  //  console.log(this.a[this.teste]);
  if(this.linex == false){
    this.linha();
    this.percurso();
  }
  else{
    this.bingo();
    this.percursos();
    

  }
  this.vela =[];
  this.cartelao();
  

 



  console.log(this.papa);
 //this.bingo();
    })
    
    this.linhafoi = false;
    this.resultadolinha = false;
    this.valor = 4000;
  }
  
  }
  async task(i) { // 3
     
    await this.timer(i);
    
  }

  async fim(i) { // 3
    await this.timer(5000);
    this.router.navigate['/sala1']

  }

  
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

cartelao(){
var rr = this.serie[this.mina[0]]; 
rr[0].sort(function(a,b) {
  return a - b;
});

rr[1].sort(function(a,b) {
  return a - b;
});

rr[2].sort(function(a,b) {
  return a - b;
});




console.log(rr[0]);
console.log(rr[1]);
console.log(rr[2]);

this.xs=rr[0][0];
this.xss=rr[0][1];
this.xsss=rr[0][2];
this.xssss=rr[0][3];
this.xsssss=rr[0][4];
this.zs=rr[1][0];
this.zss=rr[1][1];
this.zsss=rr[1][2];
this.zssss=rr[1][3];
this.zsssss=rr[1][4];
this.cs=rr[2][0];
this.css=rr[2][1];
this.csss=rr[2][2];
this.cssss=rr[2][3];
this.csssss=rr[2][4];

if(this.xs<=10){
  this.vela[0] = this.xs;
}
if(this.xs>10 && this.xs <= 20){
  this.vela[1] = this.xs;
}
if(this.xss<=20){
  this.vela[1] = this.xss;
}
if(this.xss>20 && this.xss <= 30){
  this.vela[2] = this.xss;
}
if(this.xss>30 && this.xss <= 40){
  this.vela[3] = this.xss;
}
if(this.xss>30 && this.xsss <= 40){
  this.vela[3] = this.xss;
}
if(this.xsss>40 && this.xsss <= 50){
  this.vela[4] = this.xsss;
}
if(this.xsss>50 && this.xsss <= 60){
  this.vela[5] = this.xsss;
}
if(this.xssss>50 && this.xssss <= 60){
  this.vela[6] = this.xssss;
}
if(this.xssss>60 && this.xssss <= 70){
  this.vela[7] = this.xssss;
}

if(this.xsssss>70 && this.xssss <= 80){
  this.vela[8] = this.xsssss;
}
if(this.xsssss>80){
  this.vela[9] = this.xsssss;
}





if(this.zs<=10){
  this.vela[10] = this.zs;
}
if(this.zs>10 && this.zs <= 20){
  this.vela[11] = this.zs;
}
if(this.zss<=20){
  this.vela[11] = this.zss;
}
if(this.zss>20 && this.zss <= 30){
  this.vela[12] = this.zss;
}
if(this.zss>30 && this.zss <= 40){
  this.vela[13] = this.zss;
}
if(this.zss>30 && this.zsss <= 40){
  this.vela[13] = this.zss;
}
if(this.zsss>40 && this.zsss <= 50){
  this.vela[14] = this.zsss;
}
if(this.zsss>50 && this.zsss <= 60){
  this.vela[15] = this.zsss;
}
if(this.zssss>50 && this.zssss <= 60){
  this.vela[16] = this.zssss;
}
if(this.zssss>60 && this.zssss <= 70){
  this.vela[17] = this.zssss;
}

if(this.zsssss>70 && this.zssss <= 80){
  this.vela[18] = this.zsssss;
}
if(this.zsssss>80){
  this.vela[19] = this.zsssss;
}



if(this.cs<=10){
  this.vela[20] = this.cs;
}
if(this.cs>10 && this.cs <= 20){
  this.vela[21] = this.cs;
}
if(this.css<=20){
  this.vela[21] = this.css;
}
if(this.css>20 && this.css <= 30){
  this.vela[22] = this.css;
}
if(this.css>30 && this.css <= 40){
  this.vela[23] = this.css;
}
if(this.css>30 && this.csss <= 40){
  this.vela[23] = this.css;
}
if(this.csss>40 && this.csss <= 50){
  this.vela[24] = this.csss;
}
if(this.csss>50 && this.csss <= 60){
  this.vela[25] = this.csss;
}
if(this.cssss>50 && this.cssss <= 60){
  this.vela[26] = this.cssss;
}
if(this.cssss>60 && this.cssss <= 70){
  this.vela[27] = this.cssss;
}

if(this.csssss>70 && this.cssss  <= 80){
  this.vela[28] = this.csssss;
}
if(this.csssss>80){
  this.vela[29] = this.csssss;
}









}

ortfunction(a, b){
  return (a - b) 
}

selectsort(array){
  for(var i = 0; i < array.length; i++){
    //set min to the current iteration of i
    var min = i;
    for(var j = i+1; j < array.length; j++){
      if(array[j] < array[min]){
       min = j;
       
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}


  async percursos(){
  this.valores = [];
  this.minaa = [];
  this.ee;
  
  for(var tt = 0; tt < this.tantascartela; tt++){
    this.soma = 0;
    for(var zz = 0; zz <= 2; zz++){
      var soma = this.papa[tt][zz].length;
      
      this.soma = soma + this.soma;
      //this.valores.push(this.papa[tt][zz]);
    }

    this.valores[tt] = this.soma;

     }
     for(var rt = 0; rt <= 4; rt++){
   var menor = Math.min.apply(Math, this.valores);
   console.log(menor);
   console.log()
   
   var posicao = this.valores.indexOf(menor);
   this.min[rt] = this.papa[posicao].join('       ');
   this.mina[rt] = posicao + 1;
   this.valores[posicao] = 99;
   
  } 
  console.log(this.min[0]);
   if(this.min[4]==""){
    await this.bingo();
     alert('Bingooooo');
     this.router.navigate(['/sala1']);
   }
   if(this.min[4]==[]){
    await this.bingo();
     alert('Bingooooo');
     this.router.navigate(['/sala1']);
   }
}


percurso(){
  this.valores = [];
  for(var tt = 0; tt < this.tantascartela; tt++){
    this.soma = 0;
    for(var zz = 0; zz <= 2; zz++){
      this.soma = this.papa[tt][zz].length;
      this.valores.push(this.papa[tt][zz]);
    }
    //this.valores[tt] = this.soma;
  }
  var de =this.valores.sort(function compare(a, b) {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
});
 // console.log(de);

  if(de[0] == ""){
    de[0] = 'linhaaa';
  }

  if(de[1] == ""){
    de[1] = 'linhaaa';
  }
  

  this.min[0] = de[0].join('      ');
  this.min[1] = de[1].join('      ');
  this.min[2] = de[2].join('      ');
  this.min[3] = de[3].join('      ');
  this.min[4] = de[4].join('      ');
  for(var zu=0; zu<= 4; zu++){
  for(var tt = 0; tt < this.tantascartela; tt++){
    for(var zz = 0; zz <= 2; zz++){
      if(de[zu]==this.papa[tt][zz]){
        this.mina[zu]= tt +1;
      }
        
      }      
    }
  }

  
  




  //console.log(de[0]);
  //console.log(this.papa[0][0]);
}


arrayCompare(first, last)
{
    var result = first.filter(function(item){ return last.indexOf(item) > -1});   
    return result.length;  
}    

melhor(){

 return this.serie.map(cartela => {
    return cartela.map(cart=>{
        return cart.reduce((acc, num) => {
            if(!this.bolas.includes(num)){
               acc.push(num)
            }
            return acc
        }, [])
    })
})

}
  
  
   



  async linha(){
   
    this.numerolinha = [];

   //console.log(this.bolass);
    for(var tt = 0; tt < this.tantascartela; tt++){
      for(var zz = 0; zz <= 2; zz++){
        this.ponto = 0;
        for(var xx =0; xx<5; xx++){
          for(var cc=0; cc< this.bolas.length; cc++){
            if(this.serie[tt][zz][xx] == this.bolas[cc]){
              this.ponto = this.ponto + 1;
              if(this.ponto == 5){
                var linha = tt + 1
              //this.linhaaaaa = 'LINHA!!! cartão número - '+linha ;
              
              this.numerolinha.push(linha);
         
              }
              
            }
          }
        }
      }
     
    }
    if(this.numerolinha.length != 0){
      for(var tt= 0; tt< this.numerolinha.length; tt++){
        this.mina[tt] = this.numerolinha[0];
        this.min[tt] = 'LINHA';
      }
      this.linhaaaaa = 'LINHA!!! cartão número - '+this.numerolinha ;
      this.linhafoi = true;
      this.linhasim = true;
       this.linex = true;
      // this.task(12000);
      this.resultadolinha = true;
      this.tipo= 'Bingo';
      
      this.pes = true;
      this.saldo =+ this.plinha;
      this.apiService.ganhadorlinha(this.telefone,this.plinha).subscribe((response)=>{
        console.log(response);
      })
      this.valor = 8000;
      await this.task(8000);

    }
  }

  async bingo(){
    for(var tt = 0; tt < this.tantascartela; tt++){
      this.ponto = 0;
      for(var zz = 0; zz <= 2; zz++){
        
        for(var xx =0; xx<15; xx++){
          for(var cc=0; cc< this.bolas.length; cc++){
            if(this.serie[tt][zz][xx] == this.bolas[cc]){
              this.ponto = this.ponto + 1;
              console.log(this.ponto);
              if(this.ponto == 15){

                
                  console.log('bingooo');
                  var linha = tt + 1
                  this.mina[0] = linha;
                  this.min[0] = 'BINGO';
                 
                  this.resultadolinha= true;
                  this.linhafoi = true;
                  this.pes = true;
                  this.linhabingo = true;
                  this.linhaaaaa = 'Bingoooo!!! cartão número - '+linha ;
                  this.saldo = this.saldo + this.pbingo;
                  this.apiService.ganhadorlinha(this.telefone,this.pbingo).subscribe(async (response)=>{
                    console.log(response);
                   
  
                  })
                  this.valor = 8000;
              
                  await this.task(8000);

                  break;
               

              }
            }
          }
        }
      }
    }
   }




   ac(min, max) {
    this.play = Math.random() * (max - min) + min;
  }
  

  linhaz(){
   
    //console.log(this.bolass);
     for(var tt = 0; tt < this.tantascartela; tt++){
       for(var zz = 0; zz <= 2; zz++){
         this.ponto = 0;
         for(var xx =0; xx<5; xx++){
           for(var cc=0; cc< this.bolas.length; cc++){
             if(this.serie[tt][zz][xx] == this.bolas[cc]){
               this.ponto = this.ponto + 1;
               if(this.ponto == 5){
                 alert('linha');
               }
             }
           }
         }
       }
      
     }
   }

  
}
