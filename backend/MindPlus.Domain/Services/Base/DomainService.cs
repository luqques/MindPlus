using MindPlus.Domain.Entities.Base;
using MindPlus.Domain.Interfaces.Repositories.Base;
using MindPlus.Domain.Interfaces.Services.Base;

namespace MindPlus.Domain.Services.Base
{
    public class DomainService<TEntity> : IDomainService<TEntity> where TEntity : Entity
    {
        private readonly IRepository<TEntity> _repository;

        public DomainService(IRepository<TEntity> repository) 
        {
            this._repository = repository;
        }  

        public async Task AddAsync(TEntity entity)
        {
            await _repository.AddAsync(entity);
        }

        public async Task AddOrUpdateAsync(TEntity entity)
        {
            await _repository.AddOrUpdateAsync(entity);
        }

        public async Task AddRangeAsync(params TEntity[] entities)
        {
            await _repository.AddRangeAsync(entities);
        }

        public async Task DeleteAsync(TEntity entity)
        {
            await _repository.DeleteAsync(entity);
        }

        public async Task DeleteRangeAsync(params TEntity[] entities)
        {
            await _repository.DeleteRangeAsync(entities);
        }

        public async Task<TEntity?> GetByIdAsync(Guid id)
        {
            return await _repository.GetByIdAsync(id);
        }

        public async Task<IEnumerable<TEntity>> ListAsync()
        {
            return await _repository.ListAsync();
        }

        public async Task<IEnumerable<TEntity>> ListByIdsAsync(params Guid[] ids)
        {
            return await _repository.ListByIdsAsync(ids);
        }

        public async Task UpdateAsync(TEntity entity)
        {
            await _repository.UpdateAsync(entity);
        }

        public async Task UpdateRangeAsync(params TEntity[] entities)
        {
            await _repository.UpdateRangeAsync(entities);
        }


    }
}
