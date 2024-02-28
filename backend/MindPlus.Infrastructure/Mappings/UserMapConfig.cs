using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MindPlus.Domain.Entities;
using MindPlus.Infrastructure.Mappings.Base;

namespace MindPlus.Infrastructure.Mappings
{
    internal class UserMapConfig : MapConfig<User>
    {
        public override void Configure(EntityTypeBuilder<User> builder)
        {
            base.Configure(builder);

            builder.Property(user => user.Name).IsRequired();
            builder.Property(user => user.Email).IsRequired();
            builder.Property(user => user.Password).IsRequired();
            builder.Property(user => user.Cpf).IsRequired();
            builder.Property(user => user.PhoneNumber).IsRequired();
            builder.Property(user => user.Role).IsRequired();
            builder.Property(user => user.Status).IsRequired();
            builder.Property(user => user.Function).IsRequired();

            builder.ToTable("Users");
        }
    }
}
