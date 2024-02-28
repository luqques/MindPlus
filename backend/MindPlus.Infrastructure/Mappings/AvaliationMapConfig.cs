using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MindPlus.Domain.Entities;
using MindPlus.Infrastructure.Mappings.Base;

namespace MindPlus.Infrastructure.Mappings
{
    internal class AvaliationMapConfig : MapConfig<Avaliation>
    {
        public override void Configure(EntityTypeBuilder<Avaliation> builder)
        {
            base.Configure(builder);

            builder.Property(avaliation => avaliation.AvaliatedAt).IsRequired();
            builder.Property(avaliation => avaliation.Score).IsRequired();
            builder.Property(avaliation => avaliation.Type).IsRequired();
            builder.Property(avaliation => avaliation.UserId).IsRequired();

            builder.HasOne(avaliation => avaliation.User)
                   .WithMany(user => user.Avaliations)
                   .HasForeignKey(avaliation => avaliation.UserId);


            builder.ToTable("Avaliations"); 
        }
    }
}
