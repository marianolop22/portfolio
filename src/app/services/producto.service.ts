import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http: HttpClient
  ) { }
  
  getProduct (id:string) : Observable<any>{
    return this.http.get ( `https://angular-html-89760.firebaseio.com/productos/${id}.json` );

  }
}
