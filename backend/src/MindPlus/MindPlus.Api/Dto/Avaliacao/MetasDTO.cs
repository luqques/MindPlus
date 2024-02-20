
using System.Collections.Generic;
using System.Reflection;

namespace MindPlus.Api.Dto.Avaliacao
{
    public class MetasDTO
    {
        public int ColaboradorTotalAtual { get; set; } /* quantos colaboradores existem agora */
        public int PreenchimentoTotalAtual { get; set; } /* quantos colaboradores preencheram atualmente */
        public List<PreenchimentoMes> PreenchimentosMes { get; set; }
        public List<PreenchimentoAno> PreenchimentosAno { get; set; }
    }

    class PreenchimentoMes
    {
        public int Preenchimento { get; set; }
        public int Mes { get; set; }
    }

    class PreenchimentoAno 
    {
        public int Preenchimento { get; set; }
        public int Ano { get; set; }
    }

}