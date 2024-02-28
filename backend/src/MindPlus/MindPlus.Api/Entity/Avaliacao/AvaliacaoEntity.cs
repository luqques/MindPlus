namespace MindPlus.Api.Entity.Avaliacao
{
    public class AvaliacaoEntity
    {
        public int Id { get; set; }
        public int USUARIO_Id { get; set; }
        public int Avaliacao { get; set; }
        public DateTime Data { get; set; }
        public double Score { get; set; }
    }
}
