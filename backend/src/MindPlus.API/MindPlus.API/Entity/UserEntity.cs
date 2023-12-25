namespace MindPlus.API.Entity
{
    public class UserEntity
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public string? Senha { get; set; }
        public string? Telefone { get; set; }
        public string? Endereco { get; set; }
        public int EmpresaId { get; set; }
        public string? Ativo { get; set; }
        public string? Role { get; set; }
    }
}
