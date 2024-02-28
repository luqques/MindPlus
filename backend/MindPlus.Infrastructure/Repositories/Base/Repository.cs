using Microsoft.EntityFrameworkCore;
using MindPlus.Domain.Entities.Base;
using MindPlus.Domain.Interfaces.Repositories.Base;

namespace MindPlus.Infrastructure.Repositories.Base
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity
    {
        //para ter acesso ao banco e poder fazer as querys
        protected DbContext Context { get; }

        public Repository(DbContext context)
        {
            Context = context;
        }
        //----------------------------------------------//

        public async Task AddOrUpdateAsync(TEntity entity)
        {
            var entityDb = await GetByIdAsync(entity.Id);

            if (entityDb is not null)
            {
                Context.Entry(entityDb).CurrentValues.SetValues(entity);
                Context.Entry(entityDb).State = EntityState.Modified;
                return;
            }

            await GetDbSet().AddAsync(entity);
        }

        public async Task UpdateAsync(TEntity entity)
        {
            var context = await GetByIdAsync(entity.Id);

            if (context is null)
                return;

            Context.Entry(context).CurrentValues.SetValues(entity);
            Context.Entry(context).State = EntityState.Modified;
        }

        public async Task UpdateRangeAsync(params TEntity[] entities)
         => await GetDbSet().BulkUpdateAsync(entities);

        public async Task AddAsync(TEntity entity)
            => await GetDbSet().AddAsync(entity);

        public async Task AddRangeAsync(params TEntity[] entities)
         => await GetDbSet().BulkInsertAsync(entities);

        public async Task DeleteAsync(TEntity entity)
            => await Task.Run(() => GetDbSet().Remove(entity));

        public async Task DeleteRangeAsync(params TEntity[] entities)
            => await GetDbSet().BulkDeleteAsync(entities);

        public async Task<TEntity?> GetByIdAsync(Guid id) =>
            await GetDbSet().FindAsync(id);

        public async Task<IEnumerable<TEntity>> ListByIdsAsync(params Guid[] ids)
            => await GetDbSet().Where(x => ids.Contains(x.Id)).ToListAsync();

        public async Task<IEnumerable<TEntity>> ListAsync() =>
            await GetDbSet().ToListAsync();

        protected DbSet<TEntity> GetDbSet()
            => Context.Set<TEntity>();

        protected DbSet<TSet> GetDbSet<TSet>() where TSet : class
            => Context.Set<TSet>();
    }
}
