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

  private mensaje=new BehaviorSubject<number>(0);//esta pendiente de estado de la cantidad de productos en el carro de compras
  currenMessaje=this.mensaje.asObservable()

  producto:Producto[]=[]
  private productos=new BehaviorSubject<Producto[]>(this.producto)//esta pendiente de estado de la lista principal de productos visibles
  currenProducto=this.productos.asObservable();
  
  chageMensaje(number:number){//para cambiar el estado de la logitud del carro
    this.mensaje.next(number)
  }

  chageProduto(productos:Producto[]){//para cambiar el estado de la lista de productos visibles
    this.productos.next(productos);
  }
}
