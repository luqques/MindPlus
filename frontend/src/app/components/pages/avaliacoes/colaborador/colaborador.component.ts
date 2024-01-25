import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioLogin } from 'src/app/interfaces/UsuarioLogin';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
})
export class ColaboradorComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private usuarioLoginService: UsuarioLoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  usuario: UsuarioLogin = {
    token: '',
    usuario: '',
  };

  keepLogged: boolean = false;
  toggleCheckbox() {
    this.keepLogged = !this.keepLogged;
  }

  formSubmitted: boolean = false;
  async onSubmit(usuarioLoginForm: NgForm) {
    this.formSubmitted = true;

    if (usuarioLoginForm.valid) {
      this.usuarioLoginService
        .autenticarLogin(usuarioLoginForm.value)
        .subscribe(
          (response: UsuarioLogin) => {
            console.log('Login autenticado!');
            console.log('Retorno da API: ', response);

            const bearerToken = 'Bearer' + response.token;
            const usuario = response.usuario;
            console.log('Dados do usuário:', usuario);

            this.localStorageService.set('bearerToken', bearerToken)
            this.localStorageService.set('usuarioData', JSON.stringify(usuario))

            if (bearerToken) {
              console.log('Token: ', bearerToken);
              this.router.navigate(['/']);
            } else {
              console.error('Objeto de resposta inválido:', response);
            }
          },
          (error: any) => {
            alert('E-mail ou senha incorretos.');
            console.error('Erro ao autenticar.', error);
          }
        );
    } else {
      alert('Todos os campos devem ser preenchidos.');
      console.log('Todos os campos devem ser preenchidos.');
    }
  }
}
