import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
})
export class CentralPage implements OnInit {

  constructor(
    public apiService: ApiService,
  ) { }

nome:any;
saldo:any;
telefone:any;
  ngOnInit() {
    this.telefone = sessionStorage.getItem("telefone"); 
    this.apiService.home(this.telefone).subscribe((response) => {

    this.saldo = response.saldo;
    this.nome = response.first_name;
    sessionStorage.setItem("nome", this.nome);
    sessionStorage.setItem("saldo", this.saldo);
      console.log(response);
    });
  }

}
