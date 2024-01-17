import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [
    {
      src: 'assets/images/mulher-estressadaa.png',
      title: "Conscientização",
      description: ` Treinamentos regulares para gestores e colaboradores sobre sinais
      de estresse, ansiedade e depressão, bem como estratégias para
      lidar com essas questões.`,
      actionText: "Treinamentos",
    },
    {
      src: 'assets/images/mulher-agua.jpg',
      title: "Acesso a recursos",
      description: ` Possuímos recursos internos e externos para suporte à saúde
      mental, como linhas diretas de ajuda, profissionais de saúde
      mental e aplicativos. Além de uma lista de leituras, vídeos e
      recursos online que promovem a saúde mental.`,
      actionText: "Experimente aqui",
    },
    {
      src: 'assets/images/mulher-estressadaa.png',
      title: "Avaliações Regulares",
      description: ` Implementamos avaliações regulares da saúde mental para entender
      as necessidades específicas de nossos colaboradores. Utilizamos
      pesquisas anônimas para avaliar o nível de estresse, satisfação e
      bem-estar no trabalho.`,
      actionText: "Avalie também!",
    },
    {
      src: 'assets/images/mulher-estressadaa.png',
      title: " Cultura de Apoio",
      description: ` Valorizamos o equilíbrio entre trabalho e vida pessoal.Encorajamos
      uma atmosfera de abertura e suporte, onde os colaboradores se
      sintam à vontade para compartilhar suas preocupações.`,
      actionText: "Opine",
    },
  ];

  quote = {
    imageSrc: 'https://www.rpinfo.com.br/views/geral/img/aspas.png',
    text: 'Só a experiência própria é capaz de tornar sábio o ser humano.',
    author: 'Sigmund Freud'
  };
}
