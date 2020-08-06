import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-joguinho',
  templateUrl: './joguinho.page.html',
  styleUrls: ['./joguinho.page.scss'],
})
export class JoguinhoPage implements OnInit {
  data: Student;
  

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  bolasSorteadas: any = [];
  
  constructor(
    public apiService: ApiService,
    public router: Router,
    private screenOrientation: ScreenOrientation,
  ) {
    this.data = new Student();
    
   }

  ngOnInit() {
    this.setLandscape()
    this.ball();
    console.log(this.data.numeros);
  }

  ball(){
    this.data.numeros = new Set();

while( this.data.numeros.size < 90){

    this.data.numeros.add(Math.floor(Math.random() * 90)+1);

}
  }

  setLandscape() {
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }


   sorteio(bola) {
    //bola.sorteadas.forEach(bola => this.data.a[bola] = bola );

    this.playAudio(bola)
    this.data.bola = this.data.numero[bola];
  }

  playAudio(bola) {
    console.log('play')
    let audio = new Audio();
    audio.src = `assets/${bola}.mp3`;
    audio.load();
    audio.play();
  }

  start(){
  
    var counter = 0;
function myTimer() {
  
  var timer = setTimeout( function() {
    let l = counter++;
    
    console.log( l );
   // this.sorteio(counter++)
    if( counter <= 90 ) {
      this.data.bola = this.data.numero[l];
      console.log('play')
      let audio = new Audio();
      audio.src = `assets/${l}.mp3`;
      audio.load();
      audio.play();
      myTimer();
    }
  
  }, 2000 );
}
 
myTimer();
  
  // this.sorteio(this.data.numeros);
  }

  stop(){
    console.log('b')
  }

  restart(){
    console.log('c')
  }



}
