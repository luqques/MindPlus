import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent {

  @Input() cartaoMetas: { title: string; numeroPreenchimentos: string }[] = [];
  @Input() cartaoChart: { title2: string; chart: string }[] = [];

  constructor() {
    this.cartaoMetas = [
      { title: 'Preenchimento Atual', numeroPreenchimentos: '152/200' }, //LEMBRETE: adicionar métodos
      { title: 'Preenchimento por Mês', numeroPreenchimentos: 'grafico mês' },
      { title: 'Preenchimento por Ano', numeroPreenchimentos: 'gráfico ano' },
    ]

    this.cartaoChart = [
      { title2: 'Satisfação Geral', chart: 'grafico1' },
      { title2: 'Níveis de Estresse', chart: 'grafico2' },
      { title2: 'Tendências Temporais', chart: 'grafico3' },
      { title2: 'Equilíbrio de Vida Pessoal/Profissional', chart: 'grafico4' },
      { title2: 'Distribuições de Respostas por Setor', chart: 'grafico5' },
    ];
  }




} 