import { Negociacao } from './../models/negociacao.js';
import { Negociacoes } from './../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {
  protected template(negociacoes: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${this.templateBody(negociacoes)}
        </tbody>
      </table>
    `;
  }

  private templateBody(negociacoes: Negociacoes): string {
    return negociacoes.itens.map((negociacao) => this.templateBodyItem(negociacao)).join('');
  }

  private templateBodyItem(negociacao: Negociacao): string {
    return `
      <tr>
        <td>${this.formatarData(negociacao.data)}</td>
        <td>${negociacao.quantidade}</td>
        <td>${negociacao.valor}</td>
      </tr>
    `;
  }

  private formatarData(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}
