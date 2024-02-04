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

  constructor() { }

  openForm(formName: string): void {

    this.openST = false;
    this.openSP = false;
    this.openRI = false;

    if (formName === 'ST') {
      this.openST = true;
    } else if (formName === 'SP') {
      this.openSP = true;
    } else if (formName === 'RI') {
      this.openRI = true;
    }

    //console.log(evt + formName);
    
  }
}