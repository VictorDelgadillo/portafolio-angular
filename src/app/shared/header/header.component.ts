import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../services/infopagina.service';
import { Router } from '@angular/router';
import { text } from '../../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPaginaService: InfopaginaService, private router: Router) { }

  ngOnInit() {
  }

  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }
}
