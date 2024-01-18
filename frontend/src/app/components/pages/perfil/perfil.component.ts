import { Component } from '@angular/core';
import { UsuarioEntity } from 'src/app/interfaces/UsuarioEntity';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  ngOnInit(): void {}

  constructor(private localStorageService: LocalStorageService) {}

  token: string = this.localStorageService.get('bearerToken')

  // usuarioInfos: UsuarioEntity = {
  //   this.localStorageService.get('usuarioData')
  // }
}
