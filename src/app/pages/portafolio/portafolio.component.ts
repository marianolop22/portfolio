import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  


  
  constructor(
    public _productos: ProductosService
    
  ) {}

  ngOnInit(): void {



  }

}
