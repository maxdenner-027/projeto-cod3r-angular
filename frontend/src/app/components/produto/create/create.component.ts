import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/produto.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TituloService } from '../../template/header/titulo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: 0
  }

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private tituloService: TituloService) {
      this.tituloService.definirTituloAtual("Adicionar Produto");
  }

  ngOnInit(): void {
   
  }

  criarProduto(): void {
    this.produtoService.criar(this.produto).subscribe(() => {
      this.produtoService.exibirMensagem("Produto cadastrado com sucesso");
      this.router.navigate(['produtos']);
    });
  }

  cancelar() {
    this.router.navigate(['produtos']);
  }

}
