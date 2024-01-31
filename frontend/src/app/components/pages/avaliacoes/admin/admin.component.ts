import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioLogin } from 'src/app/interfaces/UsuarioLogin';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  //@Input() cardTitle: string = 'Preenchimento Atual';
  //@Input() outraCardTitle: string = 'Satisfação Geral';
  //@Input() numeroPreenchimentos: string = '152/200';
  @Input() cardData: { title: string; numeroPreenchimentos: string }[] = [];

  constructor() {

    this.cardData = [
      { title: 'Preenchimento Atual', numeroPreenchimentos: '152/200' },
      { title: 'Preenchimento por Mês', numeroPreenchimentos: '50/100' },
      { title: 'Preenchimento por Ano', numeroPreenchimentos: '100/150' },

    ];
    
  }

} 