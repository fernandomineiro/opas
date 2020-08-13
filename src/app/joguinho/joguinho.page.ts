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
  parar: any;

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
  }

  ball() {
    this.data.numeros = new Set();
    while (this.data.numeros.size < 90) {

      this.data.numeros.add(Math.floor(Math.random() * 90) + 1);

    }
    this.data.numeros = Array.from(this.data.numeros)
  }

  setLandscape() {
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)
      .then(() => { })
      .catch(err => console.log('device não suporta screenOrientation'));
  }

  timer(time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  async start() {
    this.parar = false
    for (const bola of this.data.numeros) {
      if(this.parar) break
      this.data.bola = bola
      let audio = new Audio();
      audio.src = `assets/${bola}.mp3`;
      audio.load();
      audio.play();
      
      await this.timer(3000)
    }
  }

  stop() {
    this.parar = true
  }

  restart() {
    this.parar = true
    this.ball()
    this.start()
  }



}
