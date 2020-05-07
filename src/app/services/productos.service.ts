import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean  = true;
  public productos:  Array<Producto> = new Array<Producto>();
  public filtro: Array<Producto>;

  constructor(
    private http:HttpClient
  ) {
    this.loadProductos();
  }


  private loadProductos (){

    return new Promise ( (resolve, reject ) => {
      this.http.get ( 'https://angular-html-89760.firebaseio.com/productos_idx.json').subscribe (
        (response: Array<Producto>) => {
          this.productos = response;
          this.cargando = false;
          resolve();
        }
      )
    
    } )
  }


  public getProductosFiltrados ( termino:string ) {

    // this.filtro = [];

    if ( this.productos.length === 0 ) {

      
      this.loadProductos().then ( ()=> {
        this.filtro = this.productos.filter ( item => {
          return item.titulo.toLowerCase().includes ( termino );
        })
      })



    } else {

      this.filtro = this.productos.filter ( item => {
        return item.titulo.includes ( termino );
      })
    }
    


  }





}
