namespace MindPlus.Api.Dto.Avaliacao
{
    public class AvaliacaoCadastroDTO
    {
        public int UsuarioId { get; set; }
        public int Avaliacao { get; set; }
        public DateTime Data { get; set; }
        public double Score { get; set; }
    }
}
