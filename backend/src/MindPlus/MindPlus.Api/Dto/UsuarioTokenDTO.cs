using MindPlus.Api.Entity;

namespace MindPlus.Api.DTO
{
    public class UsuarioTokenDTO
    {
        public string Token { get; set; }
        public UsuarioEntity Usuario { get; set; }
    }
}
