import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
    
    console.log(this.data.password);
    console.log(this.data.telefone);
   // this.router.navigate(['central']);
    this.apiService.login(this.data.telefone, this.data.password).subscribe((response) => {
      console.log(response);
      if(response !== null && response !== undefined){
       
        
        localStorage.setItem("telefone", response['telefone']);
        localStorage.setItem("indicou", response['indicou']);
        this.router.navigate(['central']);
      }
      else{
        alert('Usuario ou senha incorretos');
        this.router.navigate(['login']);
      }
      
    });
   
  }

}
