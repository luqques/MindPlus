import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioLogin } from 'src/app/interfaces/UsuarioLogin';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { Response } from 'src/app/interfaces/Response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private usuarioLoginService: UsuarioLoginService) {}

  usuario: UsuarioLogin = {
    token: '',
    data: null,
  };

  keepLogged: boolean = false;
  toggleCheckbox() {
    this.keepLogged = !this.keepLogged;
  }

  formSubmitted: boolean = false;
  async onSubmit(usuarioLoginForm: NgForm) {
    this.formSubmitted = true;

    if (usuarioLoginForm.valid) {
      this.usuarioLoginService.autenticarLogin(usuarioLoginForm.value).subscribe((response: Response<UsuarioLogin>) => {
          console.log('Login autenticado!');
          console.log('Retorno da API: ', response);
          
          const token = response.data.token;
          console.log('Token: ', token);
        },
        (error) => {
          console.error('Erro ao autenticar', error);
        },
      );
    } else {
      console.log('Todos os campos devem ser preenchidos.');
    }
  }
}
