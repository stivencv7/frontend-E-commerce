import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { Categoria } from '../categoria/categoria';

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

  constructor(private http: HttpClient,private serviceProducto:ProductoService) { }
 
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

  registraProducto(){
    this.producto.categoria=this.categoria
    this.producto.urlImg=this.imageUrl;
    this.serviceProducto.saveProducto(this.producto).subscribe(reposnse=>{
      alert("guardado")
    })
  }
}
