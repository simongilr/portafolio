import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface UserArr{
  id: string,
  name: string,
  lastName: string,
  email: string,
  phone: number,
  city: string,
  country: number
}


@Injectable({
  providedIn: 'root'
})
export class MockService {
  private readonly API = environment.api;
  perfil: any[] = [];
  users: any[] = [];


  constructor(private http: HttpClient) {
    this.CargarPerfil();
    this.Users();

  }
  addNewUser(body: {}): Observable<UserArr> { 
    return this.http.post<UserArr>(this.API, body);
  }

  getUser(): Observable<UserArr[]> { 
    return this.http.get<UserArr[]>(this.API);
  }

   private CargarPerfil() {
     this.http.get('https://portafoliosimongil-default-rtdb.firebaseio.com/Perfil.json')
      .subscribe((resp: any[]) => {
        this.perfil = resp;
        console.log(resp);
    });
  }

  private Users(){
    this.http.get('https://6284340fa48bd3c40b6c3326.mockapi.io/api/v1/users')
      .subscribe((resp: any[]) => {
        this.users = resp;
        console.log(resp);
    });
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  createUsers(form:any) {
    console.log(form);
   return this.http.post('https://6284340fa48bd3c40b6c3326.mockapi.io/api/v1/users' + form, this.httpOptions)
   .pipe( err => {  return err; } )

  }
/* 
    errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
   }
 */

}
