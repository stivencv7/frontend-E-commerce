import { Component, OnInit } from '@angular/core';
import { Producto } from '../inventario/producto/producto';
import { ProductoService } from '../inventario/producto/producto.service';
import { Item } from '../carro-compras/item';
import { CarrService } from '../carro-compras/carr.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Carro } from '../carro-compras/carro';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productoVisibles: Producto[];
  item:Item=new Item();
  items:Item[];
  carro:Carro;
  longitud:number;
  

  constructor(
    private serviceProducto: ProductoService,
    private serviceCarro:CarrService,private router:Router,private service:ServiceService
    ) { }

  ngOnInit(): void {
    this.serviceProducto.getProductos().subscribe(productos => {
      this.productoVisibles = productos

    })
    
  }

 
lengt:string;
  guardarItem(producto:Producto){
    this.item.producto=producto;
    this.item.cantidad=1;
    this.serviceCarro.addItem(this.item).subscribe(response=>{
      this.serviceCarro.getItems().subscribe(items=>{ 
       this.items=items;
       this.service.chageMensaje(items.length)
       localStorage.setItem("longitud",this.items.length.toString());
      })

     
      swal("Agregado","se agregado al carro de compras",'success')
     this.router.navigate(['/index'])
    })

    
    
  }
}
