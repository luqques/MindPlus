using MindPlus.Api.DTO;
using MindPlus.Api.Entity;

namespace MindPlus.Api.Contracts.Repository
{
    public interface IUserRepository
    {
        Task CadastrarUsuario(UserDTO user);
        Task AtualizarUsuario(UserEntity user);
        Task RemoverUsuario(int id);
        Task<IEnumerable<UserEntity>> VisualizarUsuarios();
        Task<UserEntity> GetById(int id);
        Task<UserTokenDTO> LogIn(LoginDTO user);
    }
}
