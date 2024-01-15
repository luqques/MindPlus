namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Representa uma entidade persistível na aplicação.
    public interface IEntity
    {
        IReadOnlyCollection<DomainEventBase> GetEvents();

        void ClearEvents();
    }
}