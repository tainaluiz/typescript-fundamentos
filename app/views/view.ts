export abstract class View<T> {
  protected _elemento: HTMLElement;

  constructor(seletor: string) {
    this._elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    this._elemento.innerHTML = this.template(model);
  }
}
