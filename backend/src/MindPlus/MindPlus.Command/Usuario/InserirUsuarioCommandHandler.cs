using MindPlus.Contract.Usuario;
using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces;

namespace MindPlus.Command.Usuario
{
    public class InserirUsuarioCommandHandler : InserirUsuarioCommand
    {
        private readonly IUsuarioCommandStore _usuarioCommandStore;

        public InserirUsuarioCommandHandler(IUsuarioCommandStore usuarioCommandStore)
        {
            _usuarioCommandStore = usuarioCommandStore;
        }

        public async Task<InserirUsuarioCommandResult> Handle(InserirUsuarioCommand commandRequest)
        {
            var usuario = new UsuarioEntity(
                Guid.NewGuid(),
                commandRequest.Nome,
                commandRequest.Email,
                commandRequest.Senha,
                commandRequest.Cpf,
                commandRequest.Endereco,
                commandRequest.Status,
                commandRequest.Funcao);

            await _usuarioCommandStore.InserirUsuarioAsync(usuario);

            return InserirUsuarioCommandResult.Sucesso();
        }

        public Task OnError(Exception exception, InserirUsuarioCommand commandRequest)
        {
            throw exception;
        }
    }
}
