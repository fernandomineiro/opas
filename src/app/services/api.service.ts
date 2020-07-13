import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'https://bigbig.net.br/bingao';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Create a new item

  // Get single student data by ID
  traz(): Observable<any> {
    return this.http
      .get<any>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  sorteio(bola): Observable<any> {
    return this.http
      .get<any>(this.base_path+'/a/'+bola)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  login(telefone, senha): Observable<any> {
    return this.http
      .get<any>(this.base_path+'/buscalogin/'+telefone+'/'+senha)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  registro(nome, sobre, senha, telefone, indicou): Observable<any> {
    return this.http
      .get<any>(this.base_path+'/buscaregistro/'+nome+'/'+sobre+'/'+telefone+'/'+senha+'/'+indicou)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  compracartela(nome, quantidade){
    return this.http
    .get<any>(this.base_path+'/inserecartao1/'+nome+'/'+quantidade)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  home(telefone){
    return this.http
    .get<any>(this.base_path+'/buscahome/'+telefone)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  buscapartida(partida){
    return this.http
    .get<any>(this.base_path+'/buscapartida/'+partida)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  alterasaldo(telefone, saldo){
    return this.http
    .get<any>(this.base_path+'/alterasaldo/'+telefone+'/'+saldo)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  ganhadorlinha(telefone, linha){
    return this.http
    .get<any>(this.base_path+'/ganhadorlinha/'+telefone+'/'+linha)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  ganhadorbingo(telefone, bingo){
    return this.http
    .get<any>(this.base_path+'/ganhadorbingo/'+telefone+'/'+bingo)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  buscacartela(cartela){
    return this.http
    .get<any>(this.base_path+'/buscacartela/'+cartela)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }






 

}