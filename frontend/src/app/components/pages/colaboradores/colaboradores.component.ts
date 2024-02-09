import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css'],
})
export class ColaboradoresComponent {
  
  usuarios!: IUsuarioEntity[];

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService,
    ) {}

  ngOnInit() {
    this.usuarioService.listarUsuarios().subscribe(
      (response) => {
        this.usuarios = response
        console.log(this.usuarios);
      },
      (error) => {
        console.log('Erro ao listar usuários', error);
      }
    )
  }
}
