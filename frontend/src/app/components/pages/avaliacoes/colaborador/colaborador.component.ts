import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AvaliacaoService } from 'src/app/services/avaliacoes/avaliacoes.service';
import { IAvaliacaoEntity } from 'src/app/interfaces/IAvaliacaoEntity';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
})
export class ColaboradorComponent {

  avaliacaoFormGroup!: FormGroup;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private avaliacoesService: AvaliacaoService,
    private formBuilder: FormBuilder) {
    this.avaliacaoFormGroup = this.formBuilder.group({
      perguntaST10: [3],
      perguntaST12: [3],
      perguntaST11: [3],
      perguntaST20: [3],
      perguntaST21: [3],
      perguntaST22: [3],
      perguntaST30: [3],
      perguntaST31: [3],
      perguntaST32: [3],
      perguntaSP10: [3],
      perguntaSP11: [3],
      perguntaSP12: [3],
      perguntaSP20: [3],
      perguntaSP21: [3],
      perguntaSP22: [3],
      perguntaSP30: [3],
      perguntaSP31: [3],
      perguntaSP32: [3],
      perguntaRI10: [3],
      perguntaRI11: [3],
      perguntaRI12: [3],
      perguntaRI20: [3],
      perguntaRI21: [3],
      perguntaRI22: [3],
      perguntaRI30: [3],
      perguntaRI31: [3],
      perguntaRI32: [3],
    });
  }

  currentTab: number = 1;
  sections = [
    { id: 1, title: 'Satisfação no Trabalho' },
    { id: 2, title: 'Satisfação Pessoal' },
    { id: 3, title: 'Relações Interpessoais' }
  ];

  changeTab(tabId: number) {
    this.currentTab = tabId;
  }

  usuarioData = this.localStorage.get("usuarioData")

  salvarResultados(idAvaliacao: number) {
    
    let pontuacoes = 0;
    switch(this.currentTab) { 
      case 1: { 
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
        break; 
      } 
      case 2: { 
        let pontuacoes =
        this.avaliacaoFormGroup.controls['perguntaSP10'].value
        + this.avaliacaoFormGroup.controls['perguntaSP11'].value
        + this.avaliacaoFormGroup.controls['perguntaSP12'].value
        + this.avaliacaoFormGroup.controls['perguntaSP20'].value
        + this.avaliacaoFormGroup.controls['perguntaSP21'].value
        + this.avaliacaoFormGroup.controls['perguntaSP22'].value
        + this.avaliacaoFormGroup.controls['perguntaSP30'].value
        + this.avaliacaoFormGroup.controls['perguntaSP31'].value
        + this.avaliacaoFormGroup.controls['perguntaSP32'].value;
        break;
      } 
      case 3: {
        let pontuacoes =
        this.avaliacaoFormGroup.controls['perguntaRI10'].value
        + this.avaliacaoFormGroup.controls['perguntaRI11'].value
        + this.avaliacaoFormGroup.controls['perguntaRI12'].value
        + this.avaliacaoFormGroup.controls['perguntaRI20'].value
        + this.avaliacaoFormGroup.controls['perguntaRI21'].value
        + this.avaliacaoFormGroup.controls['perguntaRI22'].value
        + this.avaliacaoFormGroup.controls['perguntaRI30'].value
        + this.avaliacaoFormGroup.controls['perguntaRI31'].value
        + this.avaliacaoFormGroup.controls['perguntaRI32'].value;
        break;
      }
      default: { 
        let pontuacoes = 0
        break; 
      } 
   } 

    let score = pontuacoes / 9;
    console.log(score);

    const payload: IAvaliacaoEntity = {
      usuarioId: this.usuarioData.id,
      avaliacao: idAvaliacao,
      date: new Date(),
      score: score
    }

    console.log(payload);
    
    this.avaliacoesService.salvarAvaliacao(payload).subscribe(response => {
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
}
