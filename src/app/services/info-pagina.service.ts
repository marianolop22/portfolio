import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor(
    private http: HttpClient
  ) {
    this.http.get ('assets/data/data-pagina.json').subscribe (
      ( response:InfoPagina ) => {
        this.info = response;
        this.cargada = true;
      }
    )
  }

  getTeam (): Observable<any> {

    return this.http.get ( 'https://angular-html-89760.firebaseio.com/equipo.json' );
    
  }








}
