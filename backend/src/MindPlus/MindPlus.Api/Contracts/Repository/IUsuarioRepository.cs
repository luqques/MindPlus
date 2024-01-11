using MindPlus.Api.DTO;
using MindPlus.Api.Entity;

namespace MindPlus.Api.Contracts.Repository
{
    public interface IUsuarioRepository
    {
        Task CadastrarUsuario(UsuarioDTO usuario);
        Task AtualizarUsuario(UsuarioEntity usuario);
        Task RemoverUsuario(int id);
        Task<IEnumerable<UsuarioEntity>> VisualizarUsuarios();
        Task<UsuarioEntity> ObterPorId(int id);
        Task<UsuarioTokenDTO> LogIn(LoginDTO usuario);
    }
}
