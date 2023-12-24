import { Component, Input, OnInit } from '@angular/core';
import { UserLogin as UserLogin } from 'src/app/interfaces/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserLogin = {
    email: '',
    password: '',
    keepLogged: false,
  };

  constructor() {}

  ngOnInit(): void {}

  toggleCheckbox() {
    this.user.keepLogged = !this.user.keepLogged;
  }

  errorFields: string[] = [];
  isFormValid(): boolean {
    this.errorFields = [];

    if (this.user.email.trim() === '') {
      this.errorFields.push('email');
    }

    if (this.user.password.trim() === '') {
      this.errorFields.push('password');
    }

    return this.errorFields.length === 0;
  }

  onLoginClick(): void {
    if (this.isFormValid()) {
      console.log('Entrou!');
      //TODO: enviar dados de login para a API e verificar se email e senha estão corretos.
      //TODO: chamar tela 'home'.
    } else {
      const errorMessage = 'Preencha todos os campos!';
      console.error(errorMessage);
    }
  }

  onEnterPressed(): void {
    if (this.isFormValid()) {
      this.onLoginClick();
    }
  }
}
