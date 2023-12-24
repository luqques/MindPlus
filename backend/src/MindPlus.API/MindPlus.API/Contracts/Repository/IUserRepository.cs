using MindPlus.API.DTO;
using MindPlus.API.Entity;

namespace MindPlus.API.Contracts.Repository
{
    public interface IUserRepository
    {
        Task CadastrarUsuario(UserDTO user);
        Task AtualizarUsuario(UserEntity user);
        Task RemoverUsuario(int id);
        Task<IEnumerable<UserEntity>> VisualizarUsuarios();
        Task<UserTokenDTO> LogIn(LoginDTO user);
    }
}
