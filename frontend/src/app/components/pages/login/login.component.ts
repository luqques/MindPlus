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

  onSubmit(f: NgForm) {
    this.user = f.value
    console.log('Dados do login: ', this.user);
  }
}
