using MindPlus.Domain.Entities;

namespace MindPlus.Domain.Interfaces
{
    public interface IUsuarioCommandStore
    {
        Task InserirUsuarioAsync(UsuarioEntity usuario);

        Task AtualizarUsuarioAsync(UsuarioEntity usuario);
    }
}
