import { Component, Injectable, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { TituloService } from '../../template/header/titulo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  produto: Produto = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
    private tituloService: TituloService) {
      this.tituloService.definirTituloAtual("Atualizar Produto");
  }

  ngOnInit(): void {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.produtoService.findById(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  atualizarProduto(): void {
    this.produtoService.update(this.produto).subscribe(() => {
      this.produtoService.exibirMensagem("Produto atualizado com sucesso");
      this.router.navigate(['/produtos']);
    });
  }

  cancelar() {
    this.router.navigate(['/produtos']);
  }

}
