import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { Producto } from './producto';
import { Categoria } from '../categoria/categoria';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit { 
  
  public visible:boolean=false;
  @Input()
  public productos:Producto[];

  constructor(private serviceProducto:ProductoService){}
  
  modoVisible(){
    if(this.visible==false){
      this.visible=true;
    }else{
      this.visible=false;
    }
  }

  ngOnInit() {
    this.serviceProducto.getProductos().subscribe(productos=>{
      this.productos=productos;
    })

  }
}
