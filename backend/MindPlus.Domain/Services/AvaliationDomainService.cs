using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.Repositories;
using MindPlus.Domain.Interfaces.Services;
using MindPlus.Domain.Services.Base;

namespace MindPlus.Domain.Services
{
    public class AvaliationDomainService : DomainService<Avaliation>, IAvaliationDomainService
    {
        private readonly IAvaliationRepository _repository;

        public AvaliationDomainService(IAvaliationRepository repository) : base(repository)
        {
            this._repository = repository;
        }

        public async Task<List<Avaliation>> ListByUserIdAsync(Guid userId)
        {
            return await _repository.ListByUserIdAsync(userId);
        }

        public async Task<List<Avaliation>> ListByYearAsync(int year)
        {
            return await _repository.ListByYearAsync(year);
        }   
    }
}
