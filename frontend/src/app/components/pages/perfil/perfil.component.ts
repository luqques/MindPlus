import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioEntity } from 'src/app/interfaces/UsuarioEntity';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  usuarioEntity!: UsuarioEntity;
  
  ngOnInit(): void {
    this.usuarioService.obterUsuario(this.usuarioEntity.id).subscribe(usuarioEntityResponse => {
      this.usuarioEntity = usuarioEntityResponse;
      console.log(usuarioEntityResponse)
    });
  }

  constructor(private localStorageService: LocalStorageService, private usuarioService: UsuarioService,) {}  

  //formSubmitted: boolean = false;
  async onSubmit(usuarioEntityForm: NgForm) {
    // this.formSubmitted = true;

    // if (usuarioEntityForm.valid) {
    //   this.usuarioService.obterUsuario(this.usuarioEntity.id)
    // }
  }
}
