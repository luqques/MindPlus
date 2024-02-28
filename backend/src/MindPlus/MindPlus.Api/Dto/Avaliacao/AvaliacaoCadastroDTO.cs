using Microsoft.VisualBasic;
using MySql.Data.Types;
using System.Runtime.Serialization;

namespace MindPlus.Api.Dto.Avaliacao
{
    public class AvaliacaoCadastroDTO
    {
        public int Usuario_Id { get; set; }
        public int Avaliacao { get; set; }
        public DateTime Data { get; set; } = DateTime.Now;
        public double Score { get; set; }
    }
}
