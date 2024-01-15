
namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Eventos de Domínio - são enviados dentro do contexto por Mediator
    public abstract class DomainEventBase : IDomainEvent, IEvent, IMessage
    {
        public string Id { get; set; }

        public DateTime Timestamp { get; set; }

        protected DomainEventBase()
        {
            Id = Guid.NewGuid().ToString();
            Timestamp = DateTime.UtcNow;
        }
    }
}