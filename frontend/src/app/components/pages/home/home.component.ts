// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [
    {
      src: 'assets/img/1.png',
      title: 'Conscientização',
      description: `Treinamentos regulares para gestores e colaboradores sobre sinais
      de estresse, ansiedade e depressão, bem como estratégias para
      lidar com essas questões.`,
      actionText: 'Treinamentos'
    },
    // Repeat for other cards
  ];

  quote = {
    imageSrc: 'https://www.rpinfo.com.br/views/geral/img/aspas.png',
    text: 'Só a experiência própria é capaz de tornar sábio o ser humano.',
    author: 'Sigmund Freud'
  };
}
