namespace MindPlus.Domain.Entities.Base
{
    public abstract class Entity
    {
        public Guid Id { get; private set; } = Guid.NewGuid();
        public bool Active { get; private set; } = true;

        public Entity SetId(Guid id)
        {
            Id = id;
            return this;
        }

        public Entity Inactivate()
        {
            Active = false;
            return this;
        }

        public Entity Activate()
        {
            Active = true;
            return this;
        }
    }
}
