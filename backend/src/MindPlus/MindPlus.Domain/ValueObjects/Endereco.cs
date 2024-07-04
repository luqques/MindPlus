namespace MindPlus.Domain.ValueObjects
{
    public class Endereco
    {
        public string Rua { get; set; }
        public int Numero { get; set; }
        public string Cep { get; set; }
        public string? Complemento { get; set; }
    }
}