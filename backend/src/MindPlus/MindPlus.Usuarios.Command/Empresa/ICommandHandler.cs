namespace MindPlus.Command.Empresa
{
    public interface ICommandHandler<in TCommandRequest, TCommandResult>
    {
        Task<TCommandResult> Handle(TCommandRequest commandRequest);

        Task OnError(Exception exception, TCommandRequest commandRequest);
    }
}