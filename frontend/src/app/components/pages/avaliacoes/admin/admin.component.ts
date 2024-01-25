import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioLogin } from 'src/app/interfaces/UsuarioLogin';
import { UsuarioLoginService } from 'src/app/services/usuario-login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private usuarioLoginService: UsuarioLoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

}
  /*
 // usuario: UsuarioLogin = {
    token: '',
    usuario: '',
  };

  keepLogged: boolean = false;
  toggleCheckbox() {
    this.keepLogged = !this.keepLogged;
  }

  formSubmitted: boolean = false;
  async onSubmit(usuarioLoginForm: NgForm) {
    this.formSubmitted = true;

    if (usuarioLoginForm.valid) {
      this.usuarioLoginService
        .autenticarLogin(usuarioLoginForm.value)
        .subscribe(
          (response: UsuarioLogin) => {
            console.log('Login autenticado!');
            console.log('Retorno da API: ', response);

            const bearerToken = 'Bearer' + response.token;
            const usuario = response.usuario;
            console.log('Dados do usuário:', usuario);

            this.localStorageService.set('bearerToken', bearerToken)
            this.localStorageService.set('usuarioData', JSON.stringify(usuario))

            if (bearerToken) {
              console.log('Token: ', bearerToken);
              this.router.navigate(['/']);
            } else {
              console.error('Objeto de resposta inválido:', response);
            }
          },
          (error: any) => {
            alert('E-mail ou senha incorretos.');
            console.error('Erro ao autenticar.', error);
          }
        );
    } else {
      alert('Todos os campos devem ser preenchidos.');
      console.log('Todos os campos devem ser preenchidos.');
    }
  }
}
*/


//Método abre e fecha Modal Isa - Meus colaboradores // Estatísticas
/*
function openModal(idModal, idOverlay) { // Método que faz o modal ser criado (display block) ao selecionar algum valor
  console.log(idOverlay);
  let modal = document.getElementById(idModal); 
  let overlay = document.getElementById(idOverlay);

  modal.style.display = 'block';
  overlay.style.display = 'block';
  
}

function closeModal(idModal, idOverlay) { // Método que faz o modal ser finalizado (display none) ao querer sair (clicar fora)
  let modal = document.getElementById(idModal);
  let overlay = document.getElementById(idOverlay);

  modal.style.display = 'none';
  overlay.style.display = 'none';
}
*/

/*
// Método criador de Gráficos Isa - Metas 

function drawChartGoals() {

    //METAS
    let data1 = google.visualization.arrayToDataTable([ //Gráfico 1
        ['MÊS', 'Nº Preenchimentos', 'Nº Colaboradores'],
        ['Jan', 1740, 1996],
        ['Fev', 1881, 1992],
        ['Mar', 1866, 2000],
        ['Abr', 1868, 2000],
        ['Mai', 1859, 1998],
        ['Jun', 1980, 1998],
        ['Jul', 1899, 2004],
        ['Ago', 1992, 2003],
        ['Set', 1980, 2000],
        ['Out', 1981, 2000],
        ['Nov', 0, 0],
        ['Dez', 0, 0]
    ]);

    let data2 = google.visualization.arrayToDataTable([ //Gráfico 2
        ['ANO', 'Nº Preenchimentos', 'Nº Colaboradores'],
        ['2019', 832, 845],
        ['2020', 798, 860],
        ['2021', 980, 1120],
        ['2022', 1242, 1800]
    ]);

    let options1 = { // Título Gráfico 2
        chart: {
            title: 'Adesão dos colaboradores por mês (2023).',
            subtitle: 'Nº de Preenchimentos X Nº de Colaboradores. Dados coletados mensalmente.',
        }
    };

    let options2 = { // Título Gráfico 2
        chart: {
            title: 'Adesão dos colaboradores por ano (2019 - 2022).',
            subtitle: 'Nº de Preenchimentos X Nº de Colaboradores anuais. Dados coletados mensalmente: 2019-2022',
        }
    };

    let chart1 = new google.charts.Bar(document.getElementById('columnchart_material1'));
    let chart2 = new google.charts.Bar(document.getElementById('columnchart_material2'));

    chart1.draw(data1, google.charts.Bar.convertOptions(options1));
    chart2.draw(data2, google.charts.Bar.convertOptions(options2));

}


// Método criador de Gráficos Isa - Estatísticas - chart

function drawChartStat() {

    let data4 = google.visualization.arrayToDataTable([
        ['Autocuidado I', 'Autocuidado II'],
        ['Autocuidado1', 1],
        ['Autocuidado2', 2],
        ['Autocuidado3', 2],
        ['Autocuidado4', 2],
        ['Autocuidado5', 7]
      ]);

    let data5 = google.visualization.arrayToDataTable([
        ['Satisfação Geral I', 'Satisfação Geral II'],
        ['Satisfação Geral1', 1],
        ['Satisfação Geral2', 2],
        ['Satisfação Geral3', 2],
        ['Satisfação Geral4', 2],
        ['Satisfação Geral5', 7]
      ]);

      let options4 = {
        title: 'Form Autocuidado',
        is3D: true,
      };
  
      let options5 = {
        title: 'Satisfação Geral',
        is3D: true,
      };  

    let chart4 = new google.visualization.PieChart(document.getElementById('FA'));
    let chart5 = new google.visualization.PieChart(document.getElementById('SG'));

    chart4.draw(data4, options4);
    chart5.draw(data5, options5);
  }


// Método Modal Isa - Estatísticas - chart

function showGraph() { 

    let selectElement1 = document.getElementById('forms-adm');
    let selectedValue1 = selectElement1.options[selectElement1.selectedIndex].value; //Pega o value(valor) referente a opção escolhida no Gráfico 1 (G1)

    let selectElement2 = document.getElementById('select-adm');
    let selectedValue2 = selectElement2.options[selectElement2.selectedIndex].value; //Pega o value(valor) referente a opção escolhida Gráfico 2 (G2)

    // Lógica para o Gráfico 1 - G1

    if (selectedValue1 === 'FT') {
        openModal(); // Abre Modal - Formulário de Satisfação no Trabalho
    }

    if (selectedValue1 === 'FP') {
        openModal(); // Abre Modal - Formulário de Satisfação Pessoal
    }

    if (selectedValue1 === 'FE') {
        openModal(); // Abre Modal - Formulário de Identificação de Fatores de Estresse
    }

    if (selectedValue1 === 'FA') {
        openModal('modalFA','overlayFA'); // Abre Modal - Níveis de Estresse 
        
    }
    
    if (selectedValue1 === 'SG') {
        openModal('modalSG','overlaySG'); // Abre Modal - Satisfação Geral dos Colaboradores
    }


    // Lógica para o Gráfico 2 - G2

    if (selectedValue2 === 'DF') {
        openModal(); // Abre Modal - Distribuição de Respostas por Formulário
    }

    if (selectedValue2 === 'DS') {
        openModal(); // Abre Modal - Distribuição de Respostas por Setor
    }

    if (selectedValue2 === 'NE') {
        openModal(); // Abre Modal - Níveis de Estresse 

    }
    if (selectedValue2 === 'TT') {
        openModal(); // Abre Modal - Tendências Temporais
    }

    if (selectedValue2 === 'VPP') {
        openModal(); // Abre Modal - Equilíbrio de Vida Pessoal/Profissional
    }

    if (selectedValue2 === 'CR') {
        openModal(); // Abre Modal - Correlações
    }

    if (selectedValue2 === 'FB') {
        openModal(); // Abre Modal - Feedback
    }

}


*/