import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  data: Student
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Student();
  }

  ngOnInit() {
  }

  submitForm() {
   
    if(this.data.indicou  === undefined){
      this.data.indicou = "";
    }
    console.log(this.data.indicou);
    if(this.data.indicou != ""){
    this.apiService.pegaagente(this.data.indicou).subscribe((response)=>{
      var g = response;
      console.log(g);
      console.log(response);
      if(g == 'sim'){
        if(this.data.password == this.data.repita){
          this.apiService.registro(this.data.nome,this.data.sobre,this.data.telefone,this.data.password,this.data.indicou).subscribe((response) => {
            console.log(response);
            if(response != ""){
              this.router.navigate(['login']);
            }
            else{
              alert('Já possui registro!');
            }
          });
        }
      }else{
        this.data.indicou = '0000000000';
        if(this.data.password == this.data.repita){
          
          this.apiService.registro(this.data.nome,this.data.sobre,this.data.telefone,this.data.password,this.data.indicou).subscribe((response) => {
            if(response != ""){
              this.router.navigate(['login']);
            }
            else{
              alert('Já possui registro!');
            }
          });
        }
      }
    })
  }
  else{
    this.data.indicou = '0000000000';
    if(this.data.password == this.data.repita){
      this.apiService.registro(this.data.nome,this.data.sobre,this.data.telefone,this.data.password,this.data.indicou).subscribe((response) => {
        console.log(response);
        
        if(response != ""){
          this.router.navigate(['login']);
        }
        else{
          alert('Já possui registro!');
        }
      });
    }
    else{
      alert('senha não sao iguais')
    }
  }
  /*  if(this.data.password == this.data.repita){
      this.apiService.registro(this.data.nome,this.data.sobre,this.data.telefone,this.data.password,this.data.indicou).subscribe((response) => {
        if(response == null){
          this.router.navigate(['login']);
        }
        else{
          alert('Já possui registro!');
        }
      });
    }
    else{
      console.log('senha não sao iguais')
    }

  */  }
}
