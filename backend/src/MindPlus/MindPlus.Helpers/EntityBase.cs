using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Abstração básica de uma entidade.
    //
    // Parâmetros de Tipo:
    //   TIdType:
    public abstract class EntityBase<TIdType> : IEntity<TIdType>, IEntity
    {
        private readonly List<DomainEventBase> _domainEvents = new List<DomainEventBase>();

        public virtual TIdType Id { get; protected set; }

        public virtual void SetId(TIdType id)
        {
            Contract.Requires.IsNotNull(id, "id").Guard();
            Id = id;
        }

        public virtual IReadOnlyCollection<DomainEventBase> GetEvents()
        {
            return _domainEvents;
        }

        //
        // Resumo:
        //     Limpa eventos a serem publicados.
        public virtual void ClearEvents()
        {
            _domainEvents.Clear();
        }

        public override bool Equals(object obj)
        {
            EntityBase<TIdType> other = obj as EntityBase<TIdType>;
            return Equals(other);
        }

        protected bool Equals(EntityBase<TIdType> other)
        {
            if (other != null)
            {
                return Id.Equals(other.Id);
            }

            return false;
        }

        public override int GetHashCode()
        {
            if ((object)Id != (object)default(TIdType))
            {
                return Id.GetHashCode();
            }

            return Guid.NewGuid().GetHashCode();
        }

        //
        // Resumo:
        //     Publica evento de domínio.
        //
        // Parâmetros:
        //   domainEvent:
        protected virtual void Publish(DomainEventBase domainEvent)
        {
            _domainEvents.Add(domainEvent);
        }
    }
}
