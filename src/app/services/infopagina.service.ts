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

  equipo: any[] = [];

  constructor(public http: HttpClient) {
     this.cargarInfo();
     this.cargarEquipo();
  }

  private cargarInfo() {
   // console.log('Servicio Creado');
    // Leer archivo json
    this.http.get('assets/data/data-pagina.json').
      subscribe((res: InfoPagina) => {
        this.cargada = true;
        this.info = res;
       // console.log(this.info);
      });
  }

  private cargarEquipo() {
     // Consumir servicio de firebase
     this.http.get('https://html-to-angular-project.firebaseio.com/equipo.json').
     subscribe((resp: any) => {
     //  this.cargada = true;
       this.equipo = resp;
      // console.log(this.equipo);
     });

  }

}
