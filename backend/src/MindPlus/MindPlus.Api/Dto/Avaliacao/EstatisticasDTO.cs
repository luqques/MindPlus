
using System.Collections.Generic;

namespace MindPlus.Api.Dto.Avaliacao
{
    public class EstatisticasDTO
    {
        //public List<EscoreAvaliacao> EscoreTOTAL { get; set; }
        public List<EscoreAvaliacao> EscoresST { get; set; }
        public List<EscoreAvaliacao> EscoresSP { get; set; }
        public List<EscoreAvaliacao> EscoresRI { get; set; }
        public NiveisEstresse NiveisEstresse = new NiveisEstresse(); //utiliza mï¿½dia uma vez
        public List<TendenciasTemporais> TendenciasTemporais { get; set; } //ï¿½ uma lista pois utiliza mï¿½dia de vï¿½rios meses
        //public EquilibrioVida EquilibrioVida { get; set; }


    }

    //SG
    public class EscoreAvaliacao
    {
        public int MediaEscore { get; set; } //serï¿½ repetido 5 vezes na tela, pois o grï¿½fico de pizza irï¿½ mostrar 1-5 fatias.
        public int NumeroPessoas { get; set; } //nï¿½ de pessoas que atingiram tal mï¿½dia
    }   //[PROBLEMA FLOAT: IF para a mï¿½dia "if > 2.2" ]

    //[avaliacao1esore:3.5, avaliacao2escore:4.6, avaliacao3escore:1.2]
    //NE grafico de barra - if escore total< 3 /nivel de estresse = ruim (media de cada prova + media geral das provas de cada pessoa)
    //pode ser separado por nivï¿½is (baixo, medio e alto) ou apenas baixo
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
        public int Mes { get; set; }
        public double MediaEscore { get; set; }
    }


    
   /*
    //EVP/P grafico em barra com numero indicando 1-5 - media geral de cada um (ST e SP), compara qual é o maior, e quanto maior é
    public class EquilibrioVida
    {
        //public string Categoria { get; set; } REVISAR UTILIDADE DA CLASSE
        //public double MediaGeral { get; set; }
    }
*/

}

