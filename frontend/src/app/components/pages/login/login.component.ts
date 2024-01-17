import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioLogin } from 'src/app/interfaces/UsuarioLogin';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { Response } from 'src/app/interfaces/Response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private usuarioLoginService: UsuarioLoginService, private router: Router) {}

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
      this.usuarioLoginService.autenticarLogin(usuarioLoginForm.value).subscribe((response: UsuarioLogin) => {
          console.log('Login autenticado!');
          console.log('Retorno da API: ', response);
          
          const token = response.token;
          const usuario = response.data;
          console.log(usuario);

          if (token) {
            console.log('Token: ', token);
            this.router.navigate(['/']);
          } else {
            console.error('Objeto de resposta inválido:', response);
          }
        },
        (error: any) => {
          console.error('Erro ao autenticar', error);
        },
      );
    } else {
      console.log('Todos os campos devem ser preenchidos.');
    }
  }
}
