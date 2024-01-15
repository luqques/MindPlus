namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Representa um escopo de execução para o injetor de dependências.
    public interface IInjectorScope : IServiceResolver, IDisposable
    {
    }
}