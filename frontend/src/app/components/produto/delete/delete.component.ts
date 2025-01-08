import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { TituloService } from '../../template/header/titulo.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  produto: Produto = {};
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private produtoService: ProdutoService,
      private tituloService: TituloService) {
        this.tituloService.definirTituloAtual("Remover Produto");
    }
  
    ngOnInit(): void {
      const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
      this.produtoService.findById(id).subscribe((produto) => {
        this.produto = produto;
      });
    }
  
    removerProduto(): void {
      this.produtoService.deleteById(String(this.produto.id)).subscribe(() => {
        this.produtoService.exibirMensagem("Produto removido com sucesso");
        this.router.navigate(['/produtos']);
      });
    }
  
    cancelar() {
      this.router.navigate(['/produtos']);
    }
}
