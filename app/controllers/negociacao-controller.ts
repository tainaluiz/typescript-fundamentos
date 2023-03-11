import { DiaDaSemana } from './../enums/dia-da-semana.js';
import { Negociacao } from './../models/negociacao.js';
import { Negociacoes } from './../models/negociacoes.js';
import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
    this.atualizarView();
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);

    if (!this.ehDiaUtil(negociacao.data.getDay())) {
      this.mostrarAlerta('Apenas negociações em dias úteis são aceitas');

      return;
    }

    this._negociacoes.adiciona(negociacao);
    this.atualizarView();
    this.mostrarAlerta('Negociação adicionada com sucesso');
    this.limparForm();
  }

  private limparForm(): void {
    this._inputData.value = '';
    this._inputQuantidade.value = '1';
    this._inputValor.value = '0.0';
    this._inputData.focus();
  }

  private atualizarView(): void {
    this._negociacoesView.update(this._negociacoes);
  }

  private mostrarAlerta(conteudo: string): void {
    this._mensagemView.update(conteudo);
  }

  private ehDiaUtil(dia: number): boolean {
    return dia > DiaDaSemana.DOMINGO && dia < DiaDaSemana.SABADO;
  }
}
