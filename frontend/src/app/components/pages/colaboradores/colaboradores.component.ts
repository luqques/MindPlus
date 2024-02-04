import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css'],
})
export class ColaboradoresComponent {
  // colaboradores: any[] = []

  // constructor(private httpClient: HttpClient) {}

  // ngOnInit() {
  //   this.fetchColaboradores();
  // }

  // fetchColaboradores() {
  //   const apiUrl = 'https://localhost:4200/usuario'; // Replace with your actual API endpoint

  //   this.httpClient.get<any[]>(apiUrl).subscribe(
  //     (data) => {
  //       this.colaboradores = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching colaboradores:', error);
  //     }
  //   );
  // }

  colaboradores = [
    {
      nome: 'Maria'
    },
    {
      nome: 'Isa'
    },
    {
      nome: 'Paola'
    }
  ]
}
