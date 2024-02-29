import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuarioCadastroDto } from 'src/app/interfaces/IUsuarioCadastroDto';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';
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

  constructor(
    private localStorageService: LocalStorageService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) {
    this.usuarioFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      funcao: ['colaborador', Validators.required],
      status: ['ativo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.usuarioData = this.localStorageService.get('usuarioData')
  }

  isResponseOk = false;
  isResponseError = false;

  onSubmit() {
    if (this.usuarioFormGroup.valid) {      
      const payloadUsuario: IUsuarioCadastroDto = {
        nome: this.usuarioFormGroup.controls["nome"].value,
        email: this.usuarioFormGroup.controls["email"].value,
        senha: this.usuarioFormGroup.controls["senha"].value,
        telefone: this.usuarioFormGroup.controls["telefone"].value,
        endereco: this.usuarioFormGroup.controls["endereco"].value,
        status: 'ativo',
        funcao: this.usuarioFormGroup.controls["funcao"].value
      }
      this.usuarioService.cadastrarUsuario(payloadUsuario).subscribe(
        (response) => {
          console.log("Usuário cadastrado com sucesso!", response);
          this.isResponseOk = true;
          this.isResponseError = false;
        },
        (error) => {
          console.error("Erro ao cadastrar usuário: ", error);
          this.isResponseOk = false;
          this.isResponseError = true;
        }
      )
    } else {
      this.isResponseOk = false;
      this.isResponseError = true;
    }
  }
}
