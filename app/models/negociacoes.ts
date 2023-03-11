import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private _itens: Array<Negociacao> = [];

  get itens(): ReadonlyArray<Negociacao> {
    return this._itens;
  }

  adiciona(item: Negociacao): void {
    this._itens.push(item);
  }
}
