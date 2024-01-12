using MindPlus.Api.Dto;
using MindPlus.Api.Entity;

namespace MindPlus.Api.Contracts.Repository
{
    public interface IUsuarioRepository
    {
        Task CadastrarUsuario(UsuarioDto usuario);
        Task AtualizarUsuario(UsuarioEntity usuario);
        Task RemoverUsuario(int id);
        Task<IEnumerable<UsuarioEntity>> VisualizarUsuarios();
        Task<UsuarioEntity> ObterPorId(int id);
        Task<UsuarioTokenDto> LogIn(LoginDto usuario);
    }
}
