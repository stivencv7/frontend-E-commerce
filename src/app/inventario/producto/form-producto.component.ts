import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { Categoria } from '../categoria/categoria';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
  imageUrl: string;
  public producto:Producto=new Producto();
  public categoria:Categoria=new Categoria();
  public categorias:Categoria[];
  
  @Output()//se utiliza para emitir eventos desde un componente hijo hacia su padre permite la comunicacion entre componente
  outputVisible=new EventEmitter<boolean>();

  @Output()
  ouputProductos=new EventEmitter<Producto[]>();

  constructor(private http: HttpClient,private serviceProducto:ProductoService,private router:Router) { }
 
  ngOnInit(): void {
    this.serviceProducto.getCategorias().subscribe(categorias=>{
      this.categorias=categorias;
    })

  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append("upload_preset", "images"); // Reemplaza con tu upload preset de Cloudinary

    this.http.post<any>('https://api.cloudinary.com/v1_1/estivencloud/image/upload', formData)
      .subscribe((response) => {
        this.imageUrl = response.secure_url;
        console.log(this.imageUrl)
      });
  }

  deleteImage() {
    this.imageUrl = '';
  }
 // metodo para registrar un producto
  registraProducto(){
    this.producto.categoria=this.categoria
    this.producto.urlImg=this.imageUrl;
    this.serviceProducto.saveProducto(this.producto).subscribe(reposnse=>{
     swal("Guardado","Se registro en el inventario","success")
       this.outputVisible.emit(false);
       this.getProductos();
    })
  }

  
  getProductos(){
    this.serviceProducto.getProductos().subscribe(productos=>{
      this.ouputProductos.emit(productos);//para pasarle el valor al padre
    })
  }
}
