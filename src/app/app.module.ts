import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormUsuarioComponent } from './usuario/form-usuario.component';

import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProductoComponent } from './inventario/producto/producto.component';
import { FormProductoComponent } from './inventario/producto/form-producto.component';

import {CloudinaryModule} from '@cloudinary/ng';

import { InputTextModule } from 'primeng/inputtext';
import{DialogModule} from 'primeng/dialog';
import{SidebarModule} from 'primeng/sidebar';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';

import { CategoriaComponent } from './inventario/categoria/categoria.component';
import { CarroComponent } from './carro-compras/carro.component';
import { Carro } from './carro-compras/carro';



const routes:Routes=[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path:'form/registrase',component:FormUsuarioComponent},
  {path:'inventario',component:InventarioComponent},
  {path:'inventario/producto',component:ProductoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioComponent,
    FormUsuarioComponent,
    MenuComponent,
    IndexComponent,
    InventarioComponent,
    ProductoComponent,
    FormProductoComponent,
    CategoriaComponent,
    CarroComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    CloudinaryModule,
    SidebarModule,
    InputNumberModule,
    SliderModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [Carro],
  bootstrap: [AppComponent]
})
export class AppModule { }
