import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserLogin as UserLogin } from 'src/app/interfaces/UserLogin';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<UserLogin>();
  @Input() userLoginData: UserLogin | null = null;
  @Input() btnText!: string;

  userLoginForm!: FormGroup;
  keepLogged: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.userLoginData) {
      console.log(this.userLoginData);
      this.userLoginForm = new FormGroup({
        email: new FormControl(this.userLoginData?.email, [
          Validators.required,
        ]),
        password: new FormControl(this.userLoginData?.password, [
          Validators.required,
        ]),
        keepLogged: new FormControl(this.userLoginData?.keepLogged),
      });
    } else {
      this.userLoginForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        keepLogged: new FormControl(''),
      });
    }
  }

  get email() {
    return this.userLoginForm.get('email')!;
  }

  get password() {
    return this.userLoginForm.get('password')!;
  }

  submit() {
    if (this.userLoginForm.invalid) {
      return;
    }
    console.log(this.userLoginForm.value);
    this.onSubmit.emit(this.userLoginForm.value);
  }

  toggleCheckbox() {
    const keepLoggedControl = this.userLoginForm.get('keepLogged');
    keepLoggedControl!.setValue(!keepLoggedControl!.value);
  }
}
