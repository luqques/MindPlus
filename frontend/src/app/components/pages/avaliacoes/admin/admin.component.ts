import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AvaliacaoService } from 'src/app/services/avaliacoes/avaliacoes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})

export class AdminComponent {

  public metas: Object = [];
  public estatisticas: Object = [];
  //public avaliacoesService: AvaliacaoService = new AvaliacaoService();

  @Input() cartaoMetas: { title: string; numeroPreenchimentos: string }[] = [];
  @Input() cartaoChart: { title2: string; chart: string }[] = [];

  constructor() {
    
    this.inicializarDados()
    
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

  private inicializarDados(): void {
    /*
      AvaliacaoService.obterMetas().subscribe((dadosDTO) => {
      // Processar dados conforme necessário
      this.metas = dadosDTO;
    });

    AvaliacaoService.obterEstatisticas().subscribe((dadosDTO) => {
      // Processar dados conforme necessário
      this.estatisticas = dadosDTO;
    });
    */
  }
} 