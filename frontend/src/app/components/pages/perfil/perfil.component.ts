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
    this.usuarioFormGroup = this.formBuilder.group(
      {
        nome: [''],
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
      this.usuarioFormGroup.patchValue(usuarioEntityResponse);
    });
  }

  usuarioMock: UsuarioEntity = {
    id: 1,
    nome: 'Administrador',
    email: 'admin',
    telefone: '123456789999',
    endereco: 'Rua A, 123',
    empresaId: 1,
    status: 'ativo',
    funcao: 'admin'
  }

  submit(usuarioFormGroup: FormGroup<any>) {
    if (usuarioFormGroup.valid) {
      console.log(usuarioFormGroup.controls["nome"].value);

      this.usuarioService.atualizarUsuario(this.usuarioMock).subscribe(response => console.log(response));
    } else {
      alert('Necessário preencher todos os campos!')
    }
  }
}
