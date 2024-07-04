using MindPlus.Domain.Entities;
using MindPlus.Domain.ValueObjects;
using Xunit;

namespace MindPlus.Unit.Tests
{
    public sealed class UsuarioTests
    {
        private UsuarioEntity MockUsuario()
        {
            var usuario = new UsuarioEntity(Guid.NewGuid(), 
                                            "Usuario Teste",
                                            "teste@email.com",
                                            "senha-teste",
                                            "05870211956", 
                                            new Endereco() { 
                                                Cep = "89032001",
                                                Complemento = "Bloco M",
                                                Numero = 5800,
                                                Rua = "Bahia"
                                            },
                                            EStatusUsuario.Ativo,
                                            EFuncaoUsuario.Colaborador);
            return usuario;
        }

        [Fact]
        public void Deve_Instanciar_Usuario()
        {
            var usuario = MockUsuario();

            Assert.NotNull(usuario);
        }

        [Fact]
        public void Deve_Inativar_Usuario()
        {
            var usuario = MockUsuario();

            usuario.InativarStatus();

            Assert.Equals(usuario.Status, EStatusUsuario.Inativo);
        }
    }
}