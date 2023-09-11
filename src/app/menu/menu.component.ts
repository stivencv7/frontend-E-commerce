import { Component } from '@angular/core';
import { ProductoService } from '../inventario/producto/producto.service';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  value:number=500000
  filterVisible:boolean=false;//variable para ver los filtros
  
  constructor(private serviceProducto:ProductoService,private servcie:ServiceService){}
  //para listar por rangos 
  rango(cantidad:number){
    console.log(cantidad)
    this.serviceProducto.getRangoPrecio(cantidad).subscribe(productos=>{
      if(productos.length>0){
        this.servcie.chageProduto(productos);
      }else{
        
      }
    })
  }
  
  //para manejar la visibilidad de los filtros
  modoVisibleFilter(){
    if (!this.filterVisible) {
      this.filterVisible=true;
    }else{
      this.filterVisible=false;
    }
  }
}
