import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../inventario/producto/producto';
import { ProductoService } from '../inventario/producto/producto.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient,private productoService:ProductoService) {}

  private mensaje=new BehaviorSubject<number>(0);
  currenMessaje=this.mensaje.asObservable()

  producto:Producto[]=[]
  private productos=new BehaviorSubject<Producto[]>(this.producto)
  currenProducto=this.productos.asObservable();
  

  getLong(numero:number){
    
    return numero;
  }

  chageMensaje(number:number){
    this.mensaje.next(number)
  }

  chageProduto(productos:Producto[]){
    this.productos.next(productos);
  }
}
