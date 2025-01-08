import { Component, OnInit } from '@angular/core';
import { TituloService } from './titulo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tituloService: TituloService) { 
    this.tituloService.definirTitutloPadrao();
  }

  ngOnInit(): void {
   
  }

  get tituloAtual(): string {
    return this.tituloService.titulo;
  }
}
