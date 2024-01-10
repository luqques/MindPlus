import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  NgModelGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { UserLogin } from 'src/app/interfaces/UserLogin';
import { UserLoginService } from 'src/app/services/user-login.service';

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
      console.log('Dados do login: ', this.user);

      try {
        await this.userLoginService.autenticarLogin(this.user);
        console.log('Login bem sucedido!');
      } catch (error) {
        console.error('Erro ao autenticar: ', error);
      }
    } else {
      console.log('Todos os campos devem ser preenchidos.');
    }
  }
}
