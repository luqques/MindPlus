namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Initializador padrão de injeção de dependência.
    public interface IBootstrapper
    {
        //
        // Resumo:
        //     Identificador da inicialização.
        string Name { get; }

        //
        // Resumo:
        //     Método de inicialização da injeção de dependência.
        //
        // Parâmetros:
        //   injector:
        //     Injetor de dependência.
        void Initialize(IInjector injector);
    }
}