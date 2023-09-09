import { Producto } from "../inventario/producto/producto";

export class Item{
    producto:Producto;
    cantidad:number;

    getImporte():number{
        return this.producto.precio*this.cantidad;
    }
}