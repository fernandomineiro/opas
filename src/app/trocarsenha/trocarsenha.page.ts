import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Student } from '../models/student';

  
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
    this.telefone = sessionStorage.getItem("telefone"); 
    console.log(this.telefone);
  }

  submitForm() {
    if(this.data.senha != null){
      if(this.data.novasenha != this.data.repetesenha){
        console.log('senha diferentes');
      }
      else{
        this.apiService.encontrasenha(this.data.senha).subscribe((response)=>{
          if(response == null){
            console.log('senha não encontrada');
          }else{
             this.apiService.alterasenha(this.telefone, this.data.novasenha).subscribe((response)=>{
        if(response == 1){
          console.log('sucesso');
        }
      })
          }
        })
      }

     // this.apiService.alterasenha(this.telefone, this.data.senha).subscribe((response)=>{
      //  console.log(response);
      //})
    }
    else{
      console.log('Deve preencher o campo senha');
    }
  }
}
