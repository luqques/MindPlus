namespace MindPlus.Api.Entity.Usuario
{
    public class UsuarioEntity
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public int EmpresaId { get; set; }
        public string Status { get; set; }
        public string Funcao { get; set; }
    }
}
