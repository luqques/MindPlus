using MindPlus.Api.DTO;
using MindPlus.Api.Entity;

namespace MindPlus.Api.Contracts.Repository
{
    public interface IUsuarioRepository
    {
        Task CadastrarUsuario(UsuarioDTO user);
        Task AtualizarUsuario(UsuarioEntity user);
        Task RemoverUsuario(int id);
        Task<IEnumerable<UsuarioEntity>> VisualizarUsuarios();
        Task<UsuarioEntity> GetById(int id);
        Task<UsuarioTokenDTO> LogIn(LoginDTO user);
    }
}
