import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css'],
})
export class ColaboradoresComponent implements OnInit {
  usuarios!: IUsuarioEntity[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.listarUsuarios().subscribe(
      (response) => {
        this.usuarios = response
        console.log(this.usuarios);
        this.usuariosFiltrados = this.usuarios;
      },
      (error) => {
        console.log('Erro ao listar usuários', error);
      }
    )
  }

  nomeFiltrado = '';
  usuariosFiltrados!: IUsuarioEntity[];
  
  filtrarUsuarios() {
    if (this.nomeFiltrado.length > 0) {
      this.usuariosFiltrados = this.usuarios.filter(usuario => {
        const nomeFiltradoToLower = this.nomeFiltrado.toLowerCase();
        return usuario.nome.toLowerCase().includes(nomeFiltradoToLower);
      });
    } else {
      this.usuariosFiltrados = this.usuarios;
    }
  }
}
