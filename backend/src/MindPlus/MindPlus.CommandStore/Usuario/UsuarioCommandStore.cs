using MindPlus.Api.Infrastructure;
using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces;

namespace MindPlus.CommandStore.Usuario
{
    public class UsuarioCommandStore : Connection, IUsuarioCommandStore
    {
        public async Task InserirUsuarioAsync(UsuarioEntity usuario)
        {
            await Execute(UsuarioCommandStoreConsts.SQL_CADASTRAR_USUARIO, usuario);
        }

        public async Task AtualizarUsuarioAsync(UsuarioEntity usuario)
        {
            await Execute(UsuarioCommandStoreConsts.SQL_ATUALIZAR_USUARIO, usuario);
        }
    }
}
