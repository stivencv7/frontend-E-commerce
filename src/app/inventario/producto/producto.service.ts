import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Producto } from './producto';
import { Categoria } from '../categoria/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient:HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>("http://localhost:8080/api/producto/visibles");
  }
  saveProducto(producto:Producto):Observable<Producto>{
    return this.httpClient.post<Producto>("http://localhost:8080/api/producto/producto",producto).pipe(
      catchError(error=>{
        
        return throwError (error);
      })
    )
  }

  getCategorias():Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>("http://localhost:8080/api/categoria/categorias");
  }
}
