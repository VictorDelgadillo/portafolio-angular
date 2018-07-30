import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://html-to-angular-project.firebaseio.com/productos_idx.json').
      subscribe((resp: Producto[]) => {
        this.productos = resp;
        setTimeout(() => {
          this.cargando = false;
        }, 200);
      });

  }

}
