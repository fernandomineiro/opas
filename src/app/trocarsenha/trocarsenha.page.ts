import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import config from 'src/config'
  
@Component({
  selector: 'app-trocarsenha',
  templateUrl: './trocarsenha.page.html',
  styleUrls: ['./trocarsenha.page.scss'],
})
export class TrocarsenhaPage implements OnInit {
  data: Student;
  telefone:any;
  constructor(
    public apiService: ApiService,
    public router: Router,
  ) { 
    this.data = new Student();
  }

  ngOnInit() {
    this.telefone = localStorage.getItem("telefone");
    console.log(this.telefone);
  }

  submitForm() {
    if(this.data.senha != null){
     
      
        this.apiService.encontrasenha(this.data.senha).subscribe((response)=>{
          if(response == null){
            alert('senha não encontrada');
          }else{
             this.apiService.alterasenha(this.telefone, this.data.novasenha).subscribe((response)=>{
        if(response == 1){
          alert('sucesso');
          this.router.navigate(['central']);
        }else{
          alert('erro');
        }
      })
          }
        })
      

     // this.apiService.alterasenha(this.telefone, this.data.senha).subscribe((response)=>{
      //  console.log(response);
      //})
    }
    else{
      alert('Deve preencher o campo senha');
    }
  }
}
