import { Component, Input, OnInit } from '@angular/core';
import { Carro } from '../carro-compras/carro';
import { CarrService } from '../carro-compras/carr.service';
import { Item } from '../carro-compras/item';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  sidebarVisible: boolean = false;//variable para manejar el sidebar de carro
  items:Item[] //lista de la clase Item 
  @Input()//se utuilisa para recibir datos de entrada desde su componente padre
  lengt:number;//cantidad que hay en el carro de compras
  
  valorTotal:number=0; //valor del carro de compras

  constructor(private carroService:CarrService,public carr:Carro,private service:ServiceService){}

  //interface que se ejecuta al inicio;
  ngOnInit(): void {
    this.service.currenMessaje.subscribe(message=>this.lengt=message)//se utiliza el serviceService para esta pendiente de la logitud de la lista
    this.carroService.getItems().subscribe(items=>{//utulizamos el servicio de CarrService para listar los productos del Carro
      let p=0;
      items.forEach(item=>{
       
       p+=item.producto.precio*item.cantidad;
        
      })
      this.valorTotal=p;
      console.log("val "+this.valorTotal)
      this.items=items;//es igual a la lista que viene desde el service del backend

    })
   
    
   
  }

  //metodo para abrir el sidebar de Carro de compras
  modoVisible() {

    if (!this.sidebarVisible) {
      this.sidebarVisible = true;
      this.ngOnInit()
    } else {
      this.sidebarVisible = false;
    }
  }

}
