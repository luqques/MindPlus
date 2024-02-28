import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css'],
})
export class ColaboradoresComponent implements OnInit {
  usuarios!: IUsuarioEntity[];
  usuarioSelecionado: { id: number, nome: string } = { id: 0, nome: '' };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.listarUsuarios().subscribe(
      (response) => {
        this.usuarios = response
        this.usuariosFiltrados = this.usuarios;
        this.filtrarUsuarios();
      },
      (error) => {
        console.log('Erro ao listar usuários: ', error);
      }
    )
  }

  nomeFiltrado = '';
  statusFiltrado = '';
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

  desativarUsuario(id: number) {
    this.usuarioService.desativarUsuario(id).subscribe(
      (response) => {
        console.log(response);
        this.filtrarUsuarios();
      }, (error) => {
        console.log("Erro ao desativar usuário: ", error);
        alert("Ocorreu algum erro ao desativar o usuário!");
      }
    )
  }
}
