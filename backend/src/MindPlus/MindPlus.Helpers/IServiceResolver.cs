namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Abstração de serviço de resolução de inversão de controle.
    public interface IServiceResolver
    {
        //
        // Resumo:
        //     Resolve um serviço genérico.
        //
        // Parâmetros de Tipo:
        //   TService:
        TService Resolve<TService>() where TService : class;

        //
        // Resumo:
        //     Resolve um serviço pelo tipo.
        //
        // Parâmetros:
        //   serviceType:
        object Resolve(Type serviceType);

        IEnumerable<TService> ResolveAll<TService>() where TService : class;

        IEnumerable<object> ResolveAll(Type serviceType);

        TService TryResolve<TService>() where TService : class;

        object TryResolve(Type serviceType);
    }
}