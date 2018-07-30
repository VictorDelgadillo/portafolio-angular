import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe(parametros => {
      console.log(parametros['id']);
      this.productosService.getProducto(parametros['id'])
      .subscribe(producto => {
        console.log(producto);

      });
    });
  }

}
