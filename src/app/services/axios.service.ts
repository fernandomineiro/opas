import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    this.axios = axios.create({baseURL: 'http://192.168.100.37:3000'})
  }
  axios: any;
}
