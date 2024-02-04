import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent {

  @Input() cardMetas: { title: string; numeroPreenchimentos: string }[] = [];
  @Input() cardChart: { title2: string; chart: string }[] = [];

  constructor() {
    this.cardMetas = [
      { title: 'Preenchimento Atual', numeroPreenchimentos: '152/200' }, //LEMBRETE: adicionar métodos
      { title: 'Preenchimento por Mês', numeroPreenchimentos: 'grafico mês' },
      { title: 'Preenchimento por Ano', numeroPreenchimentos: 'gráfico ano' },
    ]

    this.cardChart = [
      { title2: 'Satisfação Geral', chart: 'grafico1' },
      { title2: 'Níveis de Estresse', chart: 'grafico2' },
      { title2: 'Tendências Temporais', chart: 'grafico3' },
      { title2: 'Equilíbrio de Vida Pessoal/Profissional', chart: 'grafico4' },
      { title2: 'Distribuições de Respostas por Setor', chart: 'grafico5' },
    ];
  }




} 