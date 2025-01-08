import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../template/header/titulo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tituloService:TituloService) {
    this.tituloService.definirTitutloPadrao();
  }

  ngOnInit(): void {
  }

}
