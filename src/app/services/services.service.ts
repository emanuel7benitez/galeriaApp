import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl: string = 'https://randomuser.me/api/'
  constructor(private http: HttpClient) { }

  obtenerDatosApi(){
    return this.http.get(`${this.baseUrl}?results=16`).pipe( 
      map((rs) => {
        return  rs;
      })
      )
     }
  

 }