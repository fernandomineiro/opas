import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    this.axios = axios.create({baseURL: 'http://localhost:3000'})
  }
  axios: any;
}
