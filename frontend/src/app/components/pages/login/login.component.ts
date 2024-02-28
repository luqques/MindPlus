import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUsuarioLogin } from 'src/app/interfaces/IUsuarioLogin';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private usuarioService: UsuarioService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  usuario: IUsuarioLogin = {
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
      this.usuarioService.autenticarLogin(usuarioLoginForm.value).subscribe(
          (response: IUsuarioLogin) => {
            const bearerToken = 'Bearer ' + response.token;
            const usuario = response.usuario;
            this.localStorageService.set('bearerToken', bearerToken)
            this.localStorageService.set('usuarioData', usuario)

            if (bearerToken) {
              this.usuarioService.setUserToken(bearerToken);
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
      console.error('Todos os campos devem ser preenchidos.');
    }
  }
}
