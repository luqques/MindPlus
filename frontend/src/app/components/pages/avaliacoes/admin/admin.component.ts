import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { AvaliacaoService } from 'src/app/services/avaliacoes/avaliacoes.service';
import { IEstatisticasDTO, EscoreAvaliacao, NiveisEstresse, TendenciasTemporais } from 'src/app/interfaces/IEstatisticasDTO';
import { IMetasDTO, PreenchimentoMes, PreenchimentoAno } from 'src/app/interfaces/IMetasDTO';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent implements AfterViewInit {

  @ViewChildren('chartCanvasMetas') chartCanvasesMetas!: QueryList<ElementRef>;
  @ViewChildren('chartCanvasEstatisticas') chartCanvasesEstatisticas!: QueryList<ElementRef>;

  estatisticasDTO!: IEstatisticasDTO;
  metasDTO!: IMetasDTO;

  ngAfterViewInit(): void {

    //Metas
    this.avaliacaoService.obterMetas().subscribe(metas => {
      if (metas) {
        this.metasDTO = metas;
      }
    });

    this.chartCanvasesMetas.toArray().forEach((canvas, index) => {
      this.criarMetas(canvas.nativeElement, index, this.metasDTO);
    });

    //Estatisticas
    this.avaliacaoService.obterEstatisticas().subscribe(estatisticas => {
      if (estatisticas) {
        this.estatisticasDTO = estatisticas;
      }
    });

    this.chartCanvasesEstatisticas.toArray().forEach((canvas, index) => {
      this.criarEstatisticas(canvas.nativeElement, index, this.estatisticasDTO);
    });
  }

  public metas: Object = [];
  public estatisticas: Object = [];
  //public avaliacoesService: AvaliacaoService = new AvaliacaoService();

  @Input() cartaoMetas: { title: string }[] = [];
  @Input() cartaoChart: { title2: string }[] = [];

  constructor(private avaliacaoService: AvaliacaoService) {



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

  criarMetas(canvas: HTMLCanvasElement, index: number, metasDTO: IMetasDTO): void {

    const ctx = canvas.getContext('2d');

    if (ctx) {
      canvas.width = 200;
      canvas.height = 200;

      switch (index) {
        case 0: 
          const cAtual = metasDTO.ColaboradorTotalAtual;
          const pAtual = metasDTO.PreenchimentoTotalAtual;

          break;

        case 1: //PMes

          const pmesLabels: string[] = [];
          const pmesData: number[] = [];

          metasDTO.PreenchimentosMes.forEach(item => {
            pmesData.push(item.Preenchimento);
          
            // Faça o mapeamento do número do mês para o nome do mês
            const nomeMes = this.obterNomeMes(item.Mes);
            pmesLabels.push(nomeMes);
          });
          
          new Chart(ctx, {
            type: 'bar',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: pmesLabels,
              datasets: [{
                label: 'My First Dataset',
                data: pmesData,
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

  obterNomeMes(numeroMes: number): string {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return meses[numeroMes - 1] || 'Mês Inválido';
  }


  //https://www.chartjs.org/docs/latest/charts/doughnut.html#pie
  criarEstatisticas(canvas: HTMLCanvasElement, index: number, estatisticasDTO: IEstatisticasDTO): void {
    const ctx = canvas.getContext('2d');

    if (ctx) {
      canvas.width = 200;
      canvas.height = 200;

      switch (index) {
        case 0: //SG
          // criar lista Data e Labels para cada grafico, nessa lista tera labels 5.4.3.2.1. em data tera o n de pessoas que caiu em cada um desses numeros

          //const sgData = estatisticasDTO.EscoresST.map((escore: EscoreAvaliacao) => escore.MediaEscore);
          //const sgLabels = estatisticasDTO.EscoresST.map((escore: EscoreAvaliacao) => escore.NumeroPessoas);
          const sgLabels = [estatisticasDTO.EscoresRI[0].MediaEscore,
          estatisticasDTO.EscoresRI[1].MediaEscore,
          estatisticasDTO.EscoresRI[2].MediaEscore,
          estatisticasDTO.EscoresRI[3].MediaEscore,
          estatisticasDTO.EscoresRI[4].MediaEscore];

          const sgData = [Math.round((estatisticasDTO.EscoresRI[0].NumeroPessoas + estatisticasDTO.EscoresSP[0].NumeroPessoas + estatisticasDTO.EscoresST[0].NumeroPessoas) / 3),
          Math.round((estatisticasDTO.EscoresRI[1].NumeroPessoas + estatisticasDTO.EscoresSP[1].NumeroPessoas + estatisticasDTO.EscoresST[1].NumeroPessoas) / 3),
          Math.round((estatisticasDTO.EscoresRI[2].NumeroPessoas + estatisticasDTO.EscoresSP[2].NumeroPessoas + estatisticasDTO.EscoresST[2].NumeroPessoas) / 3),
          Math.round((estatisticasDTO.EscoresRI[3].NumeroPessoas + estatisticasDTO.EscoresSP[3].NumeroPessoas + estatisticasDTO.EscoresST[3].NumeroPessoas) / 3),
          Math.round((estatisticasDTO.EscoresRI[4].NumeroPessoas + estatisticasDTO.EscoresSP[4].NumeroPessoas + estatisticasDTO.EscoresST[4].NumeroPessoas) / 3)];

          new Chart(ctx, {
            type: 'pie',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: sgLabels,
              datasets: [{
                //label: 'My First Dataset',
                data: sgData,
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
                hoverOffset: 4
              }]
            },
          });
          break;
        case 1:

          const neData = [
            estatisticasDTO.NiveisEstresse.MediaGeral,
            estatisticasDTO.NiveisEstresse.MediaGST,
            estatisticasDTO.NiveisEstresse.MediaGSP,
            estatisticasDTO.NiveisEstresse.MediaGRI,
          ];


          new Chart(ctx, {
            type: 'bar',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: ['Geral', 'GST', 'GSP', 'GRI'],
              datasets: [{
                label: 'Média de Estresse',
                data: neData,
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
              }]
            },
          });
          break;
        case 2:

          const ttLabels = estatisticasDTO.TendenciasTemporais.map(tt => tt.Mes);
          const ttData = estatisticasDTO.TendenciasTemporais.map(tt => tt.MediaEscore);

          new Chart(ctx, {
            type: 'line',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: ttLabels,
              datasets: [{
                label: 'Média de Escore',
                data: ttData,
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5
              }]
            },
          });
          break;
        case 3:


          const evpData = [estatisticasDTO.NiveisEstresse.MediaGST,
          estatisticasDTO.NiveisEstresse.MediaGSP];


          new Chart(ctx, {
            type: 'bar',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: ['GST', 'GSP'],
              datasets: [{
                label: 'My First Dataset',
                data: evpData,
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