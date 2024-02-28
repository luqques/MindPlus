import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { AvaliacaoService } from 'src/app/services/avaliacoes/avaliacoes.service';
import { IEstatisticasDTO, ScoreAvaliacao, NiveisEstresse, TendenciasTemporais } from 'src/app/interfaces/IEstatisticasDTO';
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

  //estatisticasDTO!: IEstatisticasDTO;
  //metasDTO!: IMetasDTO;

  estatisticasDTO: IEstatisticasDTO = {
    ScoresST: [{ MediaScore: 1, NumeroPessoas: 5 },
      { MediaScore: 2, NumeroPessoas: 10 },
      { MediaScore: 3, NumeroPessoas: 15 },
      { MediaScore: 4, NumeroPessoas: 20 },
      { MediaScore: 5, NumeroPessoas: 25 }],
    ScoresSP: [{ MediaScore: 1, NumeroPessoas: 5 },
      { MediaScore: 2, NumeroPessoas: 10 },
      { MediaScore: 3, NumeroPessoas: 15 },
      { MediaScore: 4, NumeroPessoas: 20 },
      { MediaScore: 5, NumeroPessoas: 25 }],
    ScoresRI: [{ MediaScore: 1, NumeroPessoas: 5 },
      { MediaScore: 2, NumeroPessoas: 10 },
      { MediaScore: 3, NumeroPessoas: 15 },
      { MediaScore: 4, NumeroPessoas: 20 },
      { MediaScore: 5, NumeroPessoas: 25 }],
    NiveisEstresse: new NiveisEstresse(),
    TendenciasTemporais: []
  };

  // TODO: Pegar esses dados da API mais tarde :D
  metasDTO: IMetasDTO = {
    PreenchimentoTotalAtual: 0,
    ColaboradorTotalAtual: 0,
    PreenchimentosAno: [],
    PreenchimentosMes: []
  };

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
      { title2: 'Satisfação Geral dos Colaboradores' },
      { title2: 'Níveis de Estresse' },
      { title2: 'Tendências Temporais' },
      { title2: 'Equilíbrio de Vida Pessoal/Profissional' },
    ];
  }

  criarMetas(canvas: HTMLCanvasElement, index: number, metasDTO: IMetasDTO): void {

    const ctx = canvas.getContext('2d');

    if (ctx) {
      canvas.width = 515;
      canvas.height = 235;

      switch (index) {
        case 0: 
        const cAtual = 200;//metasDTO.ColaboradorTotalAtual;
        const pAtual = 180;//metasDTO.PreenchimentoTotalAtual;
        console.log(`Colaborador Total Atual: ${cAtual}, Preenchimento Total Atual: ${pAtual}`);

        const data = {
          labels: ['Total Atual'],
          datasets: [{
            label: 'Preenchimento',
            data: [pAtual],
            backgroundColor: '#BBED94',
            //categoryPercentage: 0.7,
            barThickness: 55,
            //barPercentage: 0.4,
          }, {
            label: 'Colaborador',
            data: [cAtual],
            backgroundColor: '#88BBCC',
            barThickness: 55,
          }]
        };
      
        new Chart(ctx, {
          type: 'bar',
          options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
              x: {
                
                stacked: true,

              },
              y: {
                beginAtZero: true,
                
              },
            },
  
          
          },
          data: data,
        });
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
                label: 'Quantidade de preenchimentos por mês',
                data: pmesData,
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
              }]
            },
          });
          break;
        case 2: //PAno

        const panoLabels: number[] = [];
        const panoData: number[] = [];

        metasDTO.PreenchimentosAno.forEach(item => {
          panoData.push(item.Preenchimento);
        
          // Faça o mapeamento do número do mês para o nome do mês
          const nomeAno = item.Ano;
          panoLabels.push(nomeAno);
        });

          new Chart(ctx, {
            type: 'bar',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: panoLabels,
              datasets: [{
                label: 'Quantidade de preenchimentos por ano',
                data: panoData,
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
      canvas.width = 515;
      canvas.height = 235;

      switch (index) {
        case 0: //SG
        
          // criar lista Data e Labels para cada grafico, nessa lista tera labels 5.4.3.2.1. em data tera o n de pessoas que caiu em cada um desses numeros

          //const sgData = estatisticasDTO.ScoresST.map((Score: ScoreAvaliacao) => Score.MediaScore);
          //const sgLabels = estatisticasDTO.ScoresST.map((Score: ScoreAvaliacao) => Score.NumeroPessoas);
          const sgLabels = [estatisticasDTO.ScoresRI[0].MediaScore,
          estatisticasDTO.ScoresRI[1].MediaScore,
          estatisticasDTO.ScoresRI[2].MediaScore,
          estatisticasDTO.ScoresRI[3].MediaScore,
          estatisticasDTO.ScoresRI[4].MediaScore];

          const sgData = [Math.round((estatisticasDTO.ScoresRI[0].NumeroPessoas + estatisticasDTO.ScoresSP[0].NumeroPessoas + estatisticasDTO.ScoresST[0].NumeroPessoas) / 3),
          Math.round((estatisticasDTO.ScoresRI[1].NumeroPessoas + estatisticasDTO.ScoresSP[1].NumeroPessoas + estatisticasDTO.ScoresST[1].NumeroPessoas) / 3),
          Math.round((estatisticasDTO.ScoresRI[2].NumeroPessoas + estatisticasDTO.ScoresSP[2].NumeroPessoas + estatisticasDTO.ScoresST[2].NumeroPessoas) / 3),
          Math.round((estatisticasDTO.ScoresRI[3].NumeroPessoas + estatisticasDTO.ScoresSP[3].NumeroPessoas + estatisticasDTO.ScoresST[3].NumeroPessoas) / 3),
          Math.round((estatisticasDTO.ScoresRI[4].NumeroPessoas + estatisticasDTO.ScoresSP[4].NumeroPessoas + estatisticasDTO.ScoresST[4].NumeroPessoas) / 3)];

          new Chart(ctx, {
            type: 'pie',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: sgLabels,
              datasets: [{
                label: 'Quantidade colaboradores',
                data: sgData,
                backgroundColor: ['#C43030', '#ED944B', '#E8E766', '#5C93AD','#84BD57'],
                hoverOffset: 4
              }]
            },
          });
          break;

        case 1: //NE
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
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true, 
                  max: 5,
                  reverse: true
                }
              }
            },
            data: {
              labels: ['Geral', 'Satisfação no Trabalho', 'Satisfação Pessoal', 'Relações Interpessoais'],
              datasets: [{
                label: 'Média de estresse geral e por avaliação',
                data: neData,
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
              }]
            },
          });
          break;
        case 2:

          const ttLabels = estatisticasDTO.TendenciasTemporais.map(tt => tt.Mes);
          const ttData = estatisticasDTO.TendenciasTemporais.map(tt => tt.MediaScore);

          new Chart(ctx, {
            type: 'line',
            options: {
              responsive: false,
              maintainAspectRatio: false
            },
            data: {
              labels: ttLabels,
              datasets: [{
                label: 'Média de score ao longo do tempo',
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
              labels: ['Satisfação no Trabalho', 'Satisfação Pessoal'],
              datasets: [{
                label: 'Média de Score entre as duas avaliações',
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
