import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}

  private mensaje=new BehaviorSubject<number>(0);
  currenMessaje=this.mensaje.asObservable()

  getLong(numero:number){
    
    return numero;
  }

  chageMensaje(number:number){
this.mensaje.next(number)
  }
}
