
namespace MindPlus.Api.Dto.Avaliacao
{
    public class EstatisticasDTO
    {
        //public List<EscoreAvaliacao> EscoreTOTAL { get; set; }
        public List<EscoreAvaliacao> EscoresST { get; set; }
        public List<EscoreAvaliacao> EscoresSP { get; set; }
        public List<EscoreAvaliacao> EscoresRI { get; set; }

    }

    class EscoreAvaliacao
    {
        public int MediaEscore { get; set; } //será repetido 5 vezes na tela, pois o gráfico de pizza irá mostrar 1-5 fatias.
        public int NumeroPessoas { get; set; } //nº de pessoas que atingiram tal média
    }   //[PROBLEMA FLOAT: IF para a média "if > 2.2" ]

    //NE grafico de barra - if escore total< 3 /nivel de estresse = ruim (media de cada prova + media geral das provas de cada pessoa)
    //pode ser separado por nivéis (baixo, medio e alto) ou apenas baixo

    //TT grafico linha - media de escore das provas por mes

    //EVP/P grafico em barra com numero indicando 1-5 - media geral de cada um (ST e SP), compara qual é o maior, e quanto maior é



    class PreenchimentoAno
    {
        public int Preenchimento { get; set; }
        public int Ano { get; set; }
    }

}
