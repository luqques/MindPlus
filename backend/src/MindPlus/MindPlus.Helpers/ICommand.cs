namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Representa um comando para o sistema.
    public interface ICommand<TCommandResult> : IMessage where TCommandResult : ICommandResult
    {
    }
}
