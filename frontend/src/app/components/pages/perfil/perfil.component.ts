import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsuarioEntity } from 'src/app/interfaces/UsuarioEntity';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  usuarioData!: UsuarioEntity;
  usuarioFormGroup!: FormGroup;
  nomeControl!: FormControl;

  constructor(private localStorageService: LocalStorageService, private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.nomeControl = new FormControl('', Validators.required);
    this.usuarioFormGroup = this.formBuilder.group(
      {
        email: ['', Validators.required],
        telefone: ['', Validators.required],
        funcao: ['', Validators.required],
        status: ['', Validators.required],
        endereco: ['', Validators.required],
        empresa: ['', Validators.required]
      }
    );
  }  

  ngOnInit(): void {
    this.usuarioData = this.localStorageService.get('usuarioData')
    this.usuarioService.obterUsuario(this.usuarioData.id).subscribe(usuarioEntityResponse => {
      this.createForm(usuarioEntityResponse);
      this.nomeControl.setValue(usuarioEntityResponse.nome);
    });
  }

  createForm(usuarioEntity: UsuarioEntity) {
    this.usuarioFormGroup = this.formBuilder.group(
      {
        nome: this.nomeControl,
        email: [usuarioEntity.email],
        telefone: [usuarioEntity.telefone],
        funcao: [usuarioEntity.funcao],
        status: [usuarioEntity.status],
        endereco: [usuarioEntity.endereco],
        empresa: [usuarioEntity.empresaId]
      }
    );
  }

  async onSubmit(usuarioFormGroup: FormGroup) {
    if (usuarioFormGroup.valid) {
      this.usuarioService.atualizarUsuario(this.usuarioFormGroup)
    }
  }
}
