import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto';
import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
        this.http.get('https://html-to-angular-project.firebaseio.com/productos_idx.json').
        subscribe((resp: Producto[]) => {
          this.productos = resp;
          setTimeout(() => {
            this.cargando = false;
          }, 200);
          resolve();
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://html-to-angular-project.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {
      if (this.productos.length === 0) {
        // cargar productos
        this.cargarProductos().then(() => {
           // Ejecutar despues de que se cargan los productos
           // aplicar filtro
           this.filtrarProductos(termino);
          });
      } else {
           this.filtrarProductos(termino);
      }
  }

  private filtrarProductos(termino: string) {
        this.productosFiltrado = [];
        termino = termino.toLocaleLowerCase();
        this.productos.forEach( prod => {
          const tituloLower = prod.titulo.toLocaleLowerCase();
           if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
            this.productosFiltrado.push(prod);
           }
        });
        // Regresa un nuevo arreglo con las coincidencia pasada por parametro
        // this.productosFiltrado = this.productos.filter(producto => {
        // return true;
       // });
  }


}
