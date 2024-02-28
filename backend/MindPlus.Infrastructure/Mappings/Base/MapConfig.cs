using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MindPlus.Domain.Entities.Base;

namespace MindPlus.Infrastructure.Mappings.Base
{
    internal abstract class MapConfig<TEntity> : IEntityTypeConfiguration<TEntity> where TEntity : Entity
    {
        public virtual void Configure(EntityTypeBuilder<TEntity> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).IsRequired().HasDefaultValue(Guid.NewGuid());
            builder.Property(x => x.Active).IsRequired();
        }
    }
}
