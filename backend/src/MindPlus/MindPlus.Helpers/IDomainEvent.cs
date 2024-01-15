using Ailos.Foundation.Core.Messaging.Commands;

namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Evento de domínio.
    public interface IDomainEvent : IEvent, IMessage
    {
    }
}