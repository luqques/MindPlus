using MindPlus.Api.Dto.Usuario;
using MindPlus.Domain.Entities;

namespace MindPlus.Contract.Repository
{
    public interface IUsuarioRepository
    {
        Task CadastrarUsuario(UsuarioCadastroDto usuario);
        Task AtualizarUsuario(UsuarioEntity usuario);
        Task RemoverUsuario(int id);
        Task<IEnumerable<UsuarioEntity>> VisualizarUsuariosAtivos();
        Task<UsuarioEntity> ObterPorId(int id);
        Task<UsuarioTokenDto> LogIn(LoginDto usuario);
        Task AtualizarProprioPerfil(UsuarioAtualizacaoDto usuario);
    }
}
