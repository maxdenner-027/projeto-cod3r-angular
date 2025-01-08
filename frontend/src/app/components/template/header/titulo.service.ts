import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TituloService {
  private _titulo = new BehaviorSubject<String>("Aplicação CRUD");

  definirTitutloPadrao() {
    this._titulo.next("Aplicação CRUD");
  }

  definirTituloAtual(titulo: string) {
    this._titulo.next(titulo);
  }

  get titulo(): string {
    return String(this._titulo.value);
  }
}
