using System.Reflection;

namespace MindPlus.Api.Dto.Usuario
{
    public class UsuarioAtualizacaoDto
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
    }
}