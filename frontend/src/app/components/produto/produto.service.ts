import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "http://localhost:3001/produtos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto);
  }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  findById(id:string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${id}`);
  }

  deleteById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.baseUrl}/${produto.id}`, produto);
  }

  exibirMensagem(texto: string, isError:boolean = false) {
    this.snackBar.open(texto, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: (isError ? ['msg-erro'] : ['msg-sucesso'])
    })
  }

}
