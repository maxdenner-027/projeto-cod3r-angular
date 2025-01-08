import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/produto.model';
import { TituloService } from '../../template/header/titulo.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  produtos: Produto[] = [];

  displayedColumns = ['id', 'nome', 'preco', 'action']

  constructor(private produtoService: ProdutoService, private tituloService: TituloService) { 
    this.tituloService.definirTituloAtual("Gerenciamento de Produtos");
  }

  async ngOnInit() {
    await this.initProdutosList();
  }

  initProdutosList() {
    this.produtoService.findAll().subscribe((data) => {
      this.produtos = data;
    });
  }

}
