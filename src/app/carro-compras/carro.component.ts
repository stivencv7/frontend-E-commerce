import { Component, Input, OnInit, Output } from '@angular/core';
import { Carro } from './carro';
import { Item } from './item';
import { CarrService } from './carr.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  @Input()
  items: Item[];
  @Input()
  valorTotal:number=0;
  carro: Carro = new Carro();
  
  
  ngOnInit(): void {
    this.carroService.getItems().subscribe(items => {
      this.items = items as Item[];// se carga todo los items del carro de compras
    })
    /*this.getTotal();*/
  }

  /*getTotal():any{
    this.carroService.getTotal().subscribe(total=>{
      console.log(total)
      return total;
      
    });
  }*/
  //injectamos por construtor
  constructor(private carroService: CarrService) { }//inyectamos el servcio de carro por contructor
  
  verTotal(numero:number,item:Item){
    console.log("item: "+item.producto.nombre+" number: "+numero)
    item.cantidad=numero;
    
    this.carroService.updateItem(item).subscribe(item=>{
      this.carroService.getItems().subscribe(items=>{
        let valor=0;
        items.forEach(item=>{valor+=item.producto.precio*item.cantidad})
        this.valorTotal=valor;})
    })
   /* this.carroService.getItems().subscribe(items=>{
      let valor=0;
      items.forEach(item=>{valor+=item.producto.precio*item.cantidad})
      this.valorTotal=valor;
    })*/
  }

}
