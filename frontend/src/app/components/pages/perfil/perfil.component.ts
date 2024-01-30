import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
  usuarioEntity!: UsuarioEntity;
  formGroup: any;
  constructor(private localStorageService: LocalStorageService, private usuarioService: UsuarioService,private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group(
      {
        funcao: ['']
      }

    );
  }  

  ngOnInit(): void {
    this.usuarioData = this.localStorageService.get('usuarioData')
    this.usuarioService.obterUsuario(this.usuarioData.id).subscribe(usuarioEntityResponse => {
      this.usuarioEntity = usuarioEntityResponse;
      this.formGroup.patchValue(usuarioEntityResponse); 
    });
  }


  formSubmitted: boolean = false;
  async onSubmit(usuarioEntityForm: NgForm) {
    this.formSubmitted = true;

    if (usuarioEntityForm.valid) {
      this.usuarioService.atualizarUsuario(this.usuarioEntity)
    }
  }
}
