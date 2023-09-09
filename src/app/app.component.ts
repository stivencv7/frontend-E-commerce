import { Component, Input, OnInit } from '@angular/core';
import { CarrService } from './carro-compras/carr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-fronted';
  lengt:number;
  constructor(private serviceCarro:CarrService){}
  
  ngOnInit(): void {
    this.serviceCarro.getItems().subscribe(items=>{
      this.lengt=items.length;
      console.log("main "+this.lengt)
    })
  }
  
  
  
}
