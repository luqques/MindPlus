import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';
import { EmpresaService } from 'src/app/services/empresa/empresa.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-cadastro-colaboradores',
  templateUrl: './cadastro-colaboradores.component.html',
  styleUrls: ['./cadastro-colaboradores.component.css']
})

export class CadastroColaboradoresComponent implements OnInit{

  usuarioData!: IUsuarioEntity;
  usuarioFormGroup!: FormGroup;
  empresaId!: number;

  constructor(
    private localStorageService: LocalStorageService,
    private usuarioService: UsuarioService,
    private empresaService: EmpresaService,
    private formBuilder: FormBuilder
  ) {
    this.usuarioFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      funcao: ['', Validators.required],
      status: ['ativo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.usuarioData = this.localStorageService.get('usuarioData')
    this.empresaService.obterEmpresaPorId(this.usuarioData.id).subscribe(empresaEntityResponse => {
      this.usuarioFormGroup.patchValue({empresaNome: empresaEntityResponse.nome})
      this.empresaId = empresaEntityResponse.id;
    })
  }

  isResponseOk = false;
  isResponseError = false;

  onSubmit() {
    // if (this.usuarioFormGroup.valid) {
      
      const usuarioData: any = {
        nome: this.usuarioFormGroup.controls["nome"].value,
        email: this.usuarioFormGroup.controls["email"].value,
        senha: this.usuarioFormGroup.controls["senha"].value,
        telefone: this.usuarioFormGroup.controls["telefone"].value,
        endereco: this.usuarioFormGroup.controls["endereco"].value,
        empresaId: this.empresaId,
        status: 'ativo',
        funcao: this.usuarioFormGroup.controls["funcao"].value
      }

      console.log(usuarioData);
    // }
  } 
}

// Malu
// /* Adicionar Colaborador --------------------------------------------- */

// function validateForm(): void {
//   const nameInput = document.getElementById('name') as HTMLInputElement;
//   const emailInput = document.getElementById('email') as HTMLInputElement;
//   const contactInput = document.getElementById('contact') as HTMLInputElement;
//   const addressInput = document.getElementById('address') as HTMLInputElement;
//   const officeInput = document.getElementById('office') as HTMLInputElement;
//   const companyInput = document.getElementById('company') as HTMLInputElement;
//   const passwordInput = document.getElementById('password') as HTMLInputElement;

//   const nameError = document.getElementById('nameError');
//   const emailError = document.getElementById('emailError');
//   const contactError = document.getElementById('contactError');
//   const addressError = document.getElementById('addressError');
//   const officeError = document.getElementById('officeError');
//   const companyError = document.getElementById('companyError');

//   const passwordError = document.getElementById('passwordError');

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordPattern = /^.{8,}$/;

//   if (!nameInput.checkValidity()) {
//     nameError!.textContent = 'Por favor, preencha este campo.';
//   } else {
//     nameError!.textContent = '';
//   }

//   if (!emailInput.value.match(emailPattern)) {
//     emailError!.textContent = 'Por favor, insira um endereço de e-mail válido.';
//   } else {
//     emailError!.textContent = '';
//   }

//   if (!contactInput.checkValidity()) {
//     contactError!.textContent = 'Por favor, insira um contato.'
//   } else {
//     contactError!.textContent = '';
//   }

//   if (!addressInput.checkValidity()) {
//     addressError!.textContent = 'Por favor, insira um endereço.'
//   } else {
//     addressError!.textContent = '';
//   }

//   if (!officeInput.checkValidity()) {
//     officeError!.textContent = 'Por favor, insira um cargo.'
//   } else {
//     officeError!.textContent = '';
//   }

//   if (!companyInput.checkValidity()) {
//     companyError!.textContent = 'Por favor, insira uma empresa.'
//   } else {
//     companyError!.textContent = '';
//   }

//   if (!passwordInput.value.match(passwordPattern)) {
//     passwordError!.textContent = 'A senha deve ter pelo menos 8 caracteres.';
//   } else {
//     passwordError!.textContent = '';
//   }

// }
