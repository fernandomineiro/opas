import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Central } from '../models/central';
import { AxiosService } from '../services/axios.service';
@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
})
export class CentralPage implements OnInit {
  data: Central;
  constructor(
    public apiService: ApiService,
    public axios: AxiosService
  ) {
    this.data = new Central();
    this.telefone = localStorage.getItem("telefone");
  }

  nome: any;
  saldo: any;
  telefone: any;

  async ngOnInit() {
    this.status();
   // console.log('cu')
    this.apiService.home(this.telefone).subscribe((response) => {

      this.saldo = response.saldo;
      this.nome = response.first_name;
      localStorage.setItem("nome", this.nome);
      localStorage.setItem("saldo", this.saldo);
    //  console.log(response);
    });
    await this.getData();
  }

  async getData() {
    await this.apiService.trazsala().subscribe((response) => {
      this.data.sala1 = response[0]['title']
      this.data.sala2 = response[1]['title']
      this.data.sala3 = response[2]['title']
      this.data.sala4 = response[3]['title']
      this.data.sala5 = response[4]['title']
      this.data.sala6 = response[5]['title']
      this.data.sala7 = response[6]['title']
      this.data.sala8 = response[7]['title']
      this.data.sala9 = response[8]['title']
      this.data.sala10 = response[9]['title']
      this.data.descricao1 = response[0]['description'];
      this.data.descricao2 = response[1]['description'];
      this.data.descricao3 = response[2]['description'];
      this.data.descricao4 = response[3]['description'];
      this.data.descricao5 = response[4]['description'];
      this.data.descricao6 = response[5]['description'];
      this.data.descricao7 = response[6]['description'];
      this.data.descricao8 = response[7]['description'];
      this.data.descricao9 = response[8]['description'];
      this.data.descricao10 = response[9]['description'];
      this.data.status1 = response[0]['status'];
      console.log()  

      if (this.data.status1 == '1') {
        this.data.status1 = "Aberta";
      } else {
        this.data.status1 = "Fechada";
      }

      this.data.status2 = response[1]['status'];
      if (this.data.status2 == '1') {
        this.data.status2 = "Aberta";
      } else {
        this.data.status2 = "Fechada";
      }
      this.data.status3 = response[2]['status'];
      if (this.data.status3 == '1') {
        this.data.status3 = "Aberta";
      } else {
        this.data.status3 = "Fechada";
      }
      this.data.status4 = response[3]['status'];
      if (this.data.status4 == '1') {
        this.data.status4 = "Aberta";
      } else {
        this.data.status4 = "Fechada";
      }
      this.data.status5 = response[4]['status'];
      if (this.data.status5 == '1') {
        this.data.status5 = "Aberta";
      } else {
        this.data.status5 = "Fechada";
      }
      this.data.status6 = response[5]['status'];
      if (this.data.status6 == '1') {
        this.data.status6 = "Aberta";
      } else {
        this.data.status6 = "Fechada";
      }
      this.data.status7 = response[6]['status'];
      if (this.data.status7 == '1') {
        this.data.status7 = "Aberta";
      } else {
        this.data.status7 = "Fechada";
      }
      this.data.status8 = response[7]['status'];
      if (this.data.status8 == '1') {
        this.data.status8 = "Aberta";
      } else {
        this.data.status8 = "Fechada";
      }
      this.data.status9 = response[8]['status'];
      if (this.data.status9 == '1') {
        this.data.status9 = "Aberta";
      } else {
        this.data.status9 = "Fechada";
      }
      this.data.status10 = response[9]['status'];
      if (this.data.status10 == '1') {
        this.data.status10 = "Aberta";
      } else {
        this.data.status10 = "Fechada";
      }
      
    });
  }

  status() {
    this.apiService.trazsala().subscribe((response) => {
      this.data.sala1 = response[0]['title']
      this.data.sala2 = response[1]['title']
      this.data.sala3 = response[2]['title']
      this.data.sala4 = response[3]['title']
      this.data.sala5 = response[4]['title']
      this.data.sala6 = response[5]['title']
      this.data.sala7 = response[6]['title']
      this.data.sala8 = response[7]['title']
      this.data.sala9 = response[8]['title']
      this.data.sala10 = response[9]['title']
      this.data.descricao1 = response[0]['description'];
      this.data.descricao2 = response[1]['description'];
      this.data.descricao3 = response[2]['description'];
      this.data.descricao4 = response[3]['description'];
      this.data.descricao5 = response[4]['description'];
      this.data.descricao6 = response[5]['description'];
      this.data.descricao7 = response[6]['description'];
      this.data.descricao8 = response[7]['description'];
      this.data.descricao9 = response[8]['description'];
      this.data.descricao10 = response[9]['description'];
      this.data.status1 = response[0]['status'];
      if (this.data.status1 == '1') {
        this.data.status1 = "Aberto";
      } else {
        this.data.status1 = "Fechada";
      }

      this.data.status2 = response[1]['status'];
      if (this.data.status2 == '1') {
        this.data.status2 = "Aberto";
      } else {
        this.data.status2 = "Fechada";
      }

      this.data.status3 = response[2]['status'];
      if (this.data.status3 == '1') {
        this.data.status3 = "Aberto";
      } else {
        this.data.status3 = "Fechada";
      }

      this.data.status4 = response[3]['status'];
      if (this.data.status4 == '1') {
        this.data.status4 = "Aberto";
      } else {
        this.data.status4 = "Fechada";
      }

      this.data.status5 = response[4]['status'];
      if (this.data.status5 == '1') {
        this.data.status5 = "Aberto";
      } else {
        this.data.status5 = "Fechada";
      }

      this.data.status6 = response[5]['status'];
      if (this.data.status6 == '1') {
        this.data.status6 = "Aberto";
      } else {
        this.data.status6 = "Fechada";
      }

      this.data.status7 = response[6]['status'];
      if (this.data.status7 == '1') {
        this.data.status7 = "Aberto";
      } else {
        this.data.status7 = "Fechada";
      }
      this.data.status8 = response[7]['status'];
      if (this.data.status8 == '1') {
        this.data.status8 = "Aberto";
      } else {
        this.data.status8 = "Fechada";
      }
      this.data.status9 = response[8]['status'];
      if (this.data.status9 == '1') {
        this.data.status9 = "Aberto";
      } else {
        this.data.status9 = "Fechada";
      }
      this.data.status10 = response[9]['status'];
      if (this.data.status10 == '1') {
        this.data.status10 = "Aberta";
      } else {
        this.data.status10 = "Fechada";
      }

    });
  }






}
