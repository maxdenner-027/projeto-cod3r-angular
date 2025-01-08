import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TituloService } from 'src/app/components/template/header/titulo.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private router: Router, private tituloService: TituloService) {
  }

  ngOnInit(): void {
    this.tituloService.definirTituloAtual("Gerenciamento de Produtos");
  }

  navegarParaCriacao(): void {
    this.router.navigate(['/produtos/novo']);
  }

}
