import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AvaliacaoService } from 'src/app/services/avaliacoes/avaliacoes.service';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
})
export class ColaboradorComponent {

  avaliacaoFormGroup!: FormGroup;

  constructor(
    private http: HttpClient,
    private avaliacoesService: AvaliacaoService,
    private formBuilder: FormBuilder) {
    this.avaliacaoFormGroup = this.formBuilder.group({
      perguntaST10: [0],
      perguntaST11: [0],
      perguntaST12: [0],
      perguntaST20: [0],
      perguntaST21: [0],
      perguntaST22: [0],
      perguntaST30: [0],
      perguntaST31: [0],
      perguntaST32: [0],
      perguntaSP10: [0],
      perguntaSP11: [0],
      perguntaSP12: [0],
      perguntaSP20: [0],
      perguntaSP21: [0],
      perguntaSP22: [0],
      perguntaSP30: [0],
      perguntaSP31: [0],
      perguntaSP32: [0],
      perguntaRI10: [0],
      perguntaRI11: [0],
      perguntaRI12: [0],
      perguntaRI20: [0],
      perguntaRI21: [0],
      perguntaRI22: [0],
      perguntaRI30: [0],
      perguntaRI31: [0],
      perguntaRI32: [0],
    });
  }

  
  currentTab: string = 'satisfacao-no-trabalho';
  sections = [
    { id: 'satisfacao-no-trabalho', title: 'Satisfação no Trabalho' },
    { id: 'satisfacao-pessoal', title: 'Satisfação Pessoal' },
    { id: 'relacoes-interpessoais', title: 'Relações Interpessoais' }
  ];

  changeTab(tabId: string) {
    this.currentTab = tabId;
  }

  salvarResultados() {
    let pontuacoes =
      this.avaliacaoFormGroup.controls['perguntaST10'].value
      + this.avaliacaoFormGroup.controls['perguntaST11'].value
      + this.avaliacaoFormGroup.controls['perguntaST12'].value
      + this.avaliacaoFormGroup.controls['perguntaST20'].value
      + this.avaliacaoFormGroup.controls['perguntaST21'].value
      + this.avaliacaoFormGroup.controls['perguntaST22'].value
      + this.avaliacaoFormGroup.controls['perguntaST30'].value
      + this.avaliacaoFormGroup.controls['perguntaST31'].value
      + this.avaliacaoFormGroup.controls['perguntaST32'].value;
      
    let score = pontuacoes / 9;
    console.log(score);

    const payload = {

    }
    this.avaliacoesService.salvarResultados(score).subscribe(response => {
        console.log(response);
      }
    );
  }

  /* Satisfação no Trabalho */
  perguntasST1 = [
    "Você acredita que a empresa está ativamente engajada em melhorar com base nos feedbacks recebidos?",
    "Os processos de tomada de decisão são claros e compreensíveis para todos os colaboradores.",
    "A liderança demonstra empatia e compreensão em relação às necessidades e desafios dos colaboradores.",
  ];

  perguntasST2 = [
    "Os benefícios oferecidos têm um impacto positivo na sua satisfação geral no trabalho.",
    "Além dos benefícios tangíveis, a empresa oferece vantagens não-materiais que contribuem para a satisfação no trabalho.",
    "Os benefícios oferecidos estão alinhados com seus valores pessoais e necessidades individuais.",
  ]

  perguntasST3 = [
    "Você acredita que os valores da empresa são incorporados nas práticas diárias e decisões?",
    "A diversidade é valorizada e promovida ativamente na cultura organizacional.",
    "Você percebe estímulos à inovação e criatividade na cultura organizacional?",
  ]

  perguntas1 = [this.perguntasST1, this.perguntasST2, this.perguntasST3]

  /* Satisfação Pessoal */
  perguntasSP1 = [
    "Como você avalia a política de saúde e bem-estar oferecida pela empresa?",
    "A empresa promove a importância do autocuidado entre os colaboradores?",
    "Você se sente apoiado(a) pela empresa em relação à sua saúde física e mental?"
  ];

  perguntasSP2 = [
    "Como você avalia o equilíbrio entre trabalho e tempo pessoal?",
    "Você tem tempo suficiente para descansar e recarregar suas energias?",
    "A empresa incentiva práticas que promovem o descanso e a desconexão fora do expediente de trabalho?"
  ];

  perguntasSP3 = [
    "A empresa demonstra interesse pelos hobbies e interesses pessoais dos colaboradores?",
    "Você tem espaço para compartilhar seus hobbies e interesses com colegas de trabalho?",
    "A empresa oferece atividades que promovem o engajamento e a satisfação pessoal?"
  ];

  perguntas2 = [this.perguntasSP1, this.perguntasSP2, this.perguntasSP3];

  /* Relações Interpessoais */
  perguntasRI1 = [
    "A qualidade das suas relações interpessoais em seu círculo social é satisfatória.",
    "Você acredita que práticas específicas são essenciais para manter conexões positivas com amigos e familiares.",
    "Em que medida você promove a construção de relacionamentos fora do contexto profissional?"
  ];

  perguntasRI2 = [
    "O equilíbrio entre vida pessoal e social impacta positivamente suas relações interpessoais.",
    "Existem situações específicas que contribuem significativamente para o fortalecimento dos seus laços pessoais?",
    "Como você lida com conflitos em suas relações interpessoais?"
  ];

  perguntasRI3 = [
    "Os valores fundamentais que guiam suas interações interpessoais são considerados satisfatórios.",
    "Como você promove a diversidade de perspectivas e experiências em seus círculos sociais?",
    "Quais práticas você considera importantes para manter um ambiente inclusivo em suas relações?"
  ];

  perguntas3 = [this.perguntasRI1, this.perguntasRI2, this.perguntasRI3];
}
