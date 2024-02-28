namespace MindPlus.Api.Dto.Avaliacao
{
    public class AvaliacaoCadastroDTO
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public DateTime Data { get; set; }
        public double Score { get; set; }
    }
}
