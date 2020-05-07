import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Item = {};
  id: string;

  constructor(
    private route:ActivatedRoute,
    private _producto: ProductoService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe (
      response => {

        this.id = response['id'];

        this._producto.getProduct ( response['id'] ).subscribe (
          (response: Item) => {
            console.log ('datos del producto ', response );
            this.item = response;
          }
        )
      }
    )

  }

}
