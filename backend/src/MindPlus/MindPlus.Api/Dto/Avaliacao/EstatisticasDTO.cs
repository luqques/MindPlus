
using System.Collections.Generic;

namespace MindPlus.Api.Dto.Avaliacao
{
    public class EstatisticasDTO
    {
        //public List<EscoreAvaliacao> EscoreTOTAL { get; set; }
        public List<EscoreAvaliacao> EscoresST { get; set; }
        public List<EscoreAvaliacao> EscoresSP { get; set; }
        public List<EscoreAvaliacao> EscoresRI { get; set; }
        public NiveisEstresse NiveisEstresse { get; set; } //utiliza média uma vez
        public List<TendenciasTemporais> TendenciasTemporais { get; set; } //é uma lista pois utiliza média de vários meses
        public EquilibrioVida EquilibrioVida { get; set; }
    }

    //SG
    class EscoreAvaliacao
    {
        public int MediaEscore { get; set; } //será repetido 5 vezes na tela, pois o gráfico de pizza irá mostrar 1-5 fatias.
        public int NumeroPessoas { get; set; } //nº de pessoas que atingiram tal média
    }   //[PROBLEMA FLOAT: IF para a média "if > 2.2" ]

    //[avaliacao1esore:3.5, avaliacao2escore:4.6, avaliacao3escore:1.2]
    //NE grafico de barra - if escore total< 3 /nivel de estresse = ruim (media de cada prova + media geral das provas de cada pessoa)
    //pode ser separado por nivéis (baixo, medio e alto) ou apenas baixo
    public class NiveisEstresse
    {
        public double MediaGeral { get; set; }
        public double MediaGST { get; set; }
        public double MediaGSP { get; set; }
        public double MediaGRI { get; set; }
    }

    //TT grafico linha - media de escore das provas por mes
    public class TendenciasTemporais
    {
        public string Mes { get; set; }
        public double MediaEscore { get; set; }
    }

    //EVP/P grafico em barra com numero indicando 1-5 - media geral de cada um (ST e SP), compara qual é o maior, e quanto maior é
   /*
    public class EquilibrioVida
    {
        public string Categoria { get; set; } REVISAR UTILIDADE DA CLASSE
        public double MediaGeral { get; set; }
    }
   */

}

