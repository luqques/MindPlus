import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      keepLogged: [false],
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

  toggleCheckbox() {
    const keepLoggedControl = this.loginForm.get('keepLogged');
    if (keepLoggedControl) {
      keepLoggedControl.setValue(!keepLoggedControl.value);
    }
  }

  onSubmit() {
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');

    if (emailControl?.valid && passwordControl?.valid) {
      console.log('Formulário enviado!', this.loginForm.value);
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
}
