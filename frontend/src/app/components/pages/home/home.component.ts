import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cards = [
    {
      src: 'assets/images/conscientizacao.png',
      title: 'Conscientização',
      description: ` Acesse conteudos de que abordam identificação de sinais de estresse, ansiedade e depressão, além de fornecer estratégias de enfrentamento.`,
      actionText: 'Treinamentos',
    },
    {
      src: 'assets/images/acesso-a-recursos.png',
      title: 'Acesso a recursos',
      description: ` Contamos com profissionais, aplicativos e materiais online, para oferecer suporte abrangente à saúde mental, incluindo listas de leituras e vídeos.`,
      actionText: 'Experimente aqui',
    },
    {
      src: 'assets/images/avaliacoes.png',
      title: 'Avaliações Regulares',
      description: ` Pesquisas para compreender as necessidades individuais dos colaboradores, abordando níveis de estresse, satisfação e bem-estar no trabalho.`,
      actionText: 'Avalie também!',
    },
    {
      src: 'assets/images/apoio.png',
      title: ' Cultura de Apoio',
      description: ` Encorajamos uma atmosfera de abertura e suporte, onde os colaboradores se sintam à vontade para compartilhar suas preocupações.`,
      actionText: 'Opine',
    },
  ];

  quote = {
    imageSrc: 'https://www.rpinfo.com.br/views/geral/img/aspas.png',
    text: 'Só a experiência própria é capaz de tornar sábio o ser humano.',
    author: 'Sigmund Freud',
  };
}
