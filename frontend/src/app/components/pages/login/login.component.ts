import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from 'src/app/interfaces/UserLogin';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<UserLogin>();

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userLoginService: UserLoginService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  isEmailInvalid() {
    const emailControl = this.loginForm.get('email');
    return (
      emailControl?.invalid && (emailControl?.dirty || emailControl?.touched)
    );
  }

  isPasswordInvalid() {
    const passwordControl = this.loginForm.get('password');
    return (
      passwordControl?.invalid &&
      (passwordControl?.dirty || passwordControl?.touched)
    );
  }

  keepLogged: boolean = false;
  toggleCheckbox() {
    this.keepLogged = !this.keepLogged;
  }

  submit() {
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');

    if (emailControl?.valid && passwordControl?.valid) {
      console.log('Formulário enviado!', this.loginForm.value);
      this.api(this.loginForm.value);
    } else {
      if (!emailControl?.value) {
        emailControl?.setErrors({ required: true });
      }
      if (!passwordControl?.value) {
        passwordControl?.setErrors({ required: true });
      }

      console.log('Preencha todos os campos corretamente!');
    }
  }

  async api(LoginComponent: { email: string; password: string }) {
    console.log('deu bommmm');
    const formData = new FormData();

    formData.append('email', LoginComponent.email);
    formData.append('password', LoginComponent.password);

    await this.userLoginService.autenticarLogin(formData).subscribe();
  }
}
