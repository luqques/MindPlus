import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioEntity } from 'src/app/interfaces/UsuarioEntity';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  ngOnInit(): void {}

  constructor(private localStorageService: LocalStorageService, private usuarioService: UsuarioService,) {}

  token: string = this.localStorageService.get('bearerToken')
  
  usuarioEntity: UsuarioEntity = this.localStorageService.get('usuarioData')

  formSubmitted: boolean = false;
  async onSubmit(usuarioEntityForm: NgForm) {
    this.formSubmitted = true;
  }
}
