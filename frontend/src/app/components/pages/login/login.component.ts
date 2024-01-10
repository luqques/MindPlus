import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLogin } from 'src/app/interfaces/UserLogin';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Response } from 'src/app/interfaces/Response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private userLoginService: UserLoginService) {}

  user: UserLogin = {
    email: '',
    senha: '',
  };

  keepLogged: boolean = false;
  toggleCheckbox() {
    this.keepLogged = !this.keepLogged;
  }

  formSubmitted: boolean = false;
  async onSubmit(userLoginForm: NgForm) {
    this.user = userLoginForm.value;

    this.formSubmitted = true;

    if (userLoginForm.valid) {
      this.userLoginService.autenticarLogin(this.user).subscribe({
        next: (retorno) => {
          console.log('Login autenticado!');
          console.log('Retorno da API: ', retorno);

          //TODO: Atribuir o valor "token" do retorno para uma variável e utilizar para autenticação de outras APIs.
          //Pode ser usado a interface "Reponse", é interessante ver o curso no Youtube onde é usado isso.
        },
        error: (error) => {
          console.error('Erro ao autenticar', error);
        },
      });
    } else {
      console.log('Todos os campos devem ser preenchidos.');
    }
  }
}
