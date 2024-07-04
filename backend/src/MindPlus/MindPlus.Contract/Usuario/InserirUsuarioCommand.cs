using MindPlus.Domain.Entities;
using MindPlus.Domain.ValueObjects;

namespace MindPlus.Contract.Usuario
{
    public class InserirUsuarioCommand
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Cpf { get; set; }
        public Endereco Endereco { get; set; }
        public EStatusUsuario Status { get; set; }
        public EFuncaoUsuario Funcao { get; set; }
    }
}
