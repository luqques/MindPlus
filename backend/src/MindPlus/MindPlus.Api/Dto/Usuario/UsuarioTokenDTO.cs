using MindPlus.Api.Entity;

namespace MindPlus.Api.Dto.Usuario
{
    public class UsuarioTokenDto
    {
        public string Token { get; set; }
        public UsuarioEntity Usuario { get; set; }
    }
}
