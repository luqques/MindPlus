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

  @ViewChildren('chartCanvasMetas') chartCanvasesMetas!: QueryList<ElementRef>;
  @ViewChildren('chartCanvasEstatisticas') chartCanvasesEstatisticas!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.chartCanvasesMetas.toArray().forEach((canvas, index) => {
      this.criarMetas(canvas.nativeElement, index);
    });

    this.chartCanvasesEstatisticas.toArray().forEach((canvas, index) => {
      this.criarEstatisticas(canvas.nativeElement, index);
    });
  }

  public metas: Object = [];
  public estatisticas: Object = [];
  //public avaliacoesService: AvaliacaoService = new AvaliacaoService();

  @Input() cartaoMetas: { title: string }[] = [];
  @Input() cartaoChart: { title2: string }[] = [];

  constructor() {

    this.cartaoMetas = [
      { title: 'Preenchimento Atual' }, 
      { title: 'Preenchimento por Mês' },
      { title: 'Preenchimento por Ano' },
    ]
    //this.metas.ColaboradorTotalAtual

    this.cartaoChart = [
      { title2: 'Satisfação Geral' },
      { title2: 'Níveis de Estresse' },
      { title2: 'Tendências Temporais' },
      { title2: 'Equilíbrio de Vida Pessoal/Profissional' },
    ];
  }

  criarMetas(canvas: HTMLCanvasElement, index: number): void {
    const ctx = canvas.getContext('2d');

    if (ctx) {
      canvas.width = 200;
      canvas.height = 200;

      switch (index) {
        case 0: //PAtual
          break;
        case 1: //PMes
          new Chart(ctx, {
            type: 'bar',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
              }]
            },
          });
          break;
        case 2: //PAno
          new Chart(ctx, {
            type: 'bar',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
              }]
            },
          });
          break;
      }
    }
  }


  //https://www.chartjs.org/docs/latest/charts/doughnut.html#pie
  criarEstatisticas(canvas: HTMLCanvasElement, index: number): void {
    const ctx = canvas.getContext('2d');

    if (ctx) {
      canvas.width = 200;
      canvas.height = 200;

      switch (index) {
        case 0: //SG
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
          break;
        case 1:
          new Chart(ctx, {
            type: 'bar',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
              }]
            },
          });
          break;
        case 2:
          new Chart(ctx, {
            type: 'line',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5
              }]
            },
          });
          break;
        case 3:
          new Chart(ctx, {
            type: 'bar',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: ['Blue', 'Yellow'],
              datasets: [{
                label: 'My First Dataset',
                data: [50, 100],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 205, 86)']
              }]
            },
          });
          break;
        default:
          // code block
          break;
      }
    }
    else {
      console.error('O contexto do canvas é nulo.');
    }
  }

}