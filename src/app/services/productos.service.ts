import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean  = true;
  public productos:  Array<Producto>;

  constructor(
    private http:HttpClient
  ) {
    this.loadProductos();
  }


  private loadProductos (){

    this.http.get ( 'https://angular-html-89760.firebaseio.com/productos_idx.json').subscribe (
      (response: Array<Producto>) => {
        this.productos = response;
        this.cargando = false;
      }
    )
  }





}
