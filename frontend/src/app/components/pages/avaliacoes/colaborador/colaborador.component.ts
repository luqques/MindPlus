import { Component } from '@angular/core';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
})
export class ColaboradorComponent {
  openST = true;
  openSP = false;
  openRI = false;

  constructor() {}

  openForm(tabName: string) {
    // Oculta todos os conteúdos
    this.openST = false;
    this.openSP = false;
    this.openRI = false;

    // Exibe o conteúdo da guia específica
    if (tabName === 'Satisfação no Trabalho') {
      this.openST = true;
    } else if (tabName === 'Satisfação Pessoal') {
      this.openSP = true;
    } else if (tabName === 'Relações Interpessoais') {
      this.openRI = true;
    }
  }
}