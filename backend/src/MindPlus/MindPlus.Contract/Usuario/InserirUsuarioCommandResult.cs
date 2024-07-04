namespace MindPlus.Contract.Usuario
{
    public class InserirUsuarioCommandResult
    {
        public string Mensagem { get; set; }

        public static InserirUsuarioCommandResult Sucesso()
        {
            return new InserirUsuarioCommandResult { Mensagem = "Usuário cadastrado com sucesso!" };
        }
    }
}
