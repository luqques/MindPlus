import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { AvaliacaoService } from 'src/app/services/avaliacoes/avaliacoes.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements AfterViewInit {

  @ViewChildren('chartCanvas') chartCanvases!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.chartCanvases.toArray().forEach((canvas, index) => {
      this.criarGrafico(canvas.nativeElement, index);
    });
  }



  public metas: Object = [];
  public estatisticas: Object = [];
  //public avaliacoesService: AvaliacaoService = new AvaliacaoService();

  @Input() cartaoMetas: { title: string; numeroPreenchimentos: string }[] = [];
  @Input() cartaoChart: { title2: string; chart: string }[] = [];

  constructor() {


    this.cartaoMetas = [
      { title: 'Preenchimento Atual', numeroPreenchimentos: '152/200' }, //LEMBRETE: adicionar métodos
      { title: 'Preenchimento por Mês', numeroPreenchimentos: 'grafico mês' },
      { title: 'Preenchimento por Ano', numeroPreenchimentos: 'gráfico ano' },
    ]
    //this.metas.ColaboradorTotalAtual

    this.cartaoChart = [
      { title2: 'Satisfação Geral', chart: 'grafico1' },
      { title2: 'Níveis de Estresse', chart: 'grafico2' },
      { title2: 'Tendências Temporais', chart: 'grafico3' },
      { title2: 'Equilíbrio de Vida Pessoal/Profissional', chart: 'grafico4' },
    ];
  }

  //https://www.chartjs.org/docs/latest/charts/doughnut.html#pie
  criarGrafico(canvas: HTMLCanvasElement, index: number): void {
    const ctx = canvas.getContext('2d');

    if (ctx) {
      canvas.width = 200;
      canvas.height = 200;

      if (index === 0) {
        // Gráfico para Satisfação Geral
        new Chart(ctx, {
          type: 'pie',
          options: {
            responsive: false,
            maintainAspectRatio: false
          },
          data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
              hoverOffset: 4
            }]
          },
        });
      }
    } else {
      console.error('O contexto do canvas é nulo.');
    }
  } 
}