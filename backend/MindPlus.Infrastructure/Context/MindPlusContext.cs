using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace MindPlus.Infrastructure.Context
{
    public class MindPlusContext : DbContext
    {
        public MindPlusContext(DbContextOptions options) : base(options) { }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); 

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
