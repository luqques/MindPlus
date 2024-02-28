using MindPlus.Domain.Entities.Base;

namespace MindPlus.Domain.Interfaces.Repositories.Base
{
    public interface IRepository<TEntity> where TEntity : Entity
    {
        Task AddAsync(TEntity entity);
        Task AddOrUpdateAsync(TEntity entity);
        Task AddRangeAsync(params TEntity[] entities);
        Task DeleteAsync(TEntity entity);
        Task DeleteRangeAsync(params TEntity[] entities);
        Task<TEntity?> GetByIdAsync(Guid id);
        Task<IEnumerable<TEntity>> ListAsync();
        Task<IEnumerable<TEntity>> ListByIdsAsync(params Guid[] ids);
        Task UpdateAsync(TEntity entity);
        Task UpdateRangeAsync(params TEntity[] entities);
    }
}
