import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrService {

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>("http://localhost:8080/items");
  }

  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>("http://localhost:8080/add/item",item).pipe(
      catchError(
        err=>{
          return throwError (err)
        })
    )
  }
  getTotal():Observable<number>{
    return this.http.get<number>("http://localhost:8080/total")
  }
}
