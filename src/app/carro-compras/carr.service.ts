import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrService {

  constructor(private http:HttpClient) { }

  /**
   * getItems() para traer los productos que ahi en el carro
   * addItem() para guardar un producto en le carro
   * uodateItem() para actualizar cantidad del carro
   * 
   * @returns 
   */
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

  updateItem(item:Item):Observable<Item>{
    return this.http.put<Item>("http://localhost:8080/update",item).pipe(
      catchError(
        err=>{
          return throwError (err)
        })
    )
  }
  /*getTotal():Observable<number>{
    return this.http.get<number>("http://localhost:8080/total")
  }*/
}
