import { Categoria } from "../categoria/categoria";

export class Producto{
    public nombre:string;
    public precio:number;
    public cantidad:number;
    public modoVisible:boolean;
    public urlImg:string;
    public categoria:Categoria;
}