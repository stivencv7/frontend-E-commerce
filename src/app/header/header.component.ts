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
 
  sidebarVisible: boolean = false;
  items:Item[]
  @Input()
  lengt:number;
  valorTotal:number=0;

  constructor(private carroService:CarrService,public carr:Carro,private service:ServiceService){}

  ngOnInit(): void {
    this.service.currenMessaje.subscribe(message=>this.lengt=message)
    this.carroService.getItems().subscribe(items=>{
      let p=0;
      items.forEach(item=>{
       
       p+=item.producto.precio*item.cantidad;
        
      })
      this.valorTotal=p;
      console.log("val "+this.valorTotal)
      this.items=items;

    })
   
    
   
  }

  modoVisible() {

    if (!this.sidebarVisible) {
      this.sidebarVisible = true;
      this.ngOnInit()
    } else {
      this.sidebarVisible = false;
    }
  }

}
