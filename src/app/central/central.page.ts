import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Central } from '../models/central';
import { AxiosService } from '../services/axios.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
})
export class CentralPage implements OnInit {
  data: Central;
  axios: any;
  nome: any;
  saldo: any;
  telefone: any;
  proxyTeste: any;
  salas: any = [];
  constructor(
    public apiService: ApiService,
    public Axios: AxiosService,
    public router: Router,
    public navCtrl: NavController
  ) {
    this.data = new Central();
    this.axios = Axios.axios
  }

  async ngOnInit() {
    this.telefone = localStorage.getItem("telefone");
    this.status();
  }

  atualizaSaldo(){
    this.axios.get(`/atualizar-saldo/${this.telefone}`)
    .then(({data})=>{
      this.saldo = data.saldo
      this.nome = data.nome
      localStorage.setItem("nome", this.nome);
      localStorage.setItem("saldo", this.saldo);
    })
    .catch(console.log)
  }
  
  irParaSala(sala_id){
    this.router.navigate([`/sala1/${sala_id}`])
    //this.navCtrl.navigateRoot(`/sala1/${sala_id}`)
    //window.location.href = '#/sala1/'+sala_id
  }

  sair(){
    this.navCtrl.navigateRoot(`login`)
  }

  status() {
    this.axios('/central/'+this.telefone)
      .then(({data})=>{
        const salas = data.salas.map(resp => ({...resp, status: resp.status == 1 ? 'Aberta' : 'Fechada'}))
        this.salas = salas
        this.saldo = data.membro.saldo
        this.nome = data.membro.nome
        localStorage.setItem("nome", this.nome);
        localStorage.setItem("saldo", this.saldo);
      })
    // this.apiService.trazsala().subscribe((response) => {
    //   response = response.map(resp => ({...resp, status: resp.status == 1 ? 'Aberta' : 'Fechada'}))
    //   console.log(response)
    //   this.salas = response
    // })
  }
}
