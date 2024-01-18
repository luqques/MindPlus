import { Component } from '@angular/core';
import { UsuarioEntity } from 'src/app/interfaces/UsuarioEntity';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  private storage: Storage

  constructor() {
    this.storage = window.localStorage
  }

  token: string = this.storage.getItem('usuarioData')

  usuarioInfos: UsuarioEntity = {
    
  }
}
