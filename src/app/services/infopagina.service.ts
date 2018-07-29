import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  // tslint:disable-next-line:no-unused-expression
  info: InfoPagina = {};
  cargada = false;

  constructor(public http: HttpClient) {
    console.log('Servicio Creado');
    // Leer archivo json
    this.http.get('assets/data/data-pagina.json').
      subscribe(res => {
        this.cargada = true;
        this.info = res;
        console.log(this.info);
      });

  }
}
