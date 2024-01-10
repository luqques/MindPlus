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

  user: UserLogin = {
    email: '',
    password: '',
  };

  keepLogged: boolean = false;
  toggleCheckbox() {
    this.keepLogged = !this.keepLogged;
  }

  userLoginService!: UserLoginService;
  formSubmitted: boolean = false;
  onSubmit(userLoginForm: NgForm) {
    this.user = userLoginForm.value;

    this.formSubmitted = true;

    if (userLoginForm.valid) {
      console.log('Dados do login: ', this.user);

      this.userLoginService.autenticarLogin(this.user);
    } else {
      console.log('Inválido');
    }
  }

  // TODO: chamar a API e gravar os dados no banco.
}
