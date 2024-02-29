import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  
  usuarioData!: IUsuarioEntity;
  usuarioFormGroup!: FormGroup;
  nomeControl!: FormControl;

  constructor(
    private localStorageService: LocalStorageService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
    ) {
    this.usuarioFormGroup = this.formBuilder.group(
      {
        id: 0,
        nome: ['', Validators.required],
        email: ['', Validators.required],
        senha: '',
        telefone: ['', Validators.required],
        endereco: ['', Validators.required],
        status: ['', Validators.required],
        funcao: ['', Validators.required],
      }
    );
  }  

  ngOnInit(): void {
    this.usuarioData = this.localStorageService.get('usuarioData');
    
    this.usuarioService.obterUsuarioPorId(this.usuarioData.id).subscribe(usuarioEntityResponse => {
      this.usuarioFormGroup.patchValue(usuarioEntityResponse);
    });
  }

  isResponseOk = false;
  isResponseError = false;

  submit() {
    if (this.usuarioFormGroup.valid) {

      const usuarioData: any = {
        id: this.usuarioFormGroup.controls["id"].value,
        email: this.usuarioFormGroup.controls["email"].value,
        telefone: this.usuarioFormGroup.controls["telefone"].value,
        endereco: this.usuarioFormGroup.controls["endereco"].value,
      }
      this.usuarioService.atualizarProprioPerfil(usuarioData).subscribe(
        response => {
          this.isResponseOk = true;
          this.isResponseError = false;
        },
        error => {
          console.error(error);
          this.isResponseOk = false;
          this.isResponseError = true;
        }
      );
    } else {
      alert('Necessário preencher todos os campos!')
    }
  }
}
