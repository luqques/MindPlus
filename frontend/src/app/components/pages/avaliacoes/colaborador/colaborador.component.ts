import { Component } from '@angular/core';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
})
export class ColaboradorComponent {

  /* Perguntas e radio */






  perguntas = [
    "Você acredita que a empresa está ativamente engajada em melhorar com base nos feedbacks recebidos?",
    "Os processos de tomada de decisão são claros e compreensíveis para todos os colaboradores.",
    "A liderança demonstra empatia e compreensão em relação às necessidades e desafios dos colaboradores.",

    "Os benefícios oferecidos têm um impacto positivo na sua satisfação geral no trabalho.",
    "Além dos benefícios tangíveis, a empresa oferece vantagens não-materiais que contribuem para a satisfação no trabalho.",
    "Os benefícios oferecidos estão alinhados com seus valores pessoais e necessidades individuais.",

    "Você acredita que os valores da empresa são incorporados nas práticas diárias e decisões?",
    "A diversidade é valorizada e promovida ativamente na cultura organizacional.",
    "Você percebe estímulos à inovação e criatividade na cultura organizacional?",

    "A empresa fornece feedback pessoal construtivo para promover o desenvolvimento profissional.",
    "Como você avalia as oportunidades de avanço na sua carreira dentro da empresa?",
    "Você se sente incentivado(a) a buscar aprendizado contínuo no seu ambiente de trabalho?"

  ];
  
  valores = [
    1,
    2,
    3,
    4,
    5
  ];

  /* Abrir respectiva avaliação */

  openST = true;
  openSP = false;
  openRI = false;

  constructor() { }

  openForm(formName: string): void {

    this.openST = false;
    this.openSP = false;
    this.openRI = false;

    if (formName === 'ST') {
      this.openST = true;
    } else if (formName === 'SP') {
      this.openSP = true;
    } else if (formName === 'RI') {
      this.openRI = true;
    }

    //console.log(evt + formName);
    
  }
}