using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.Repositories.Base;

namespace MindPlus.Domain.Interfaces.Repositories
{
    public interface IAvaliationRepository : IRepository<Avaliation>
    {
        Task<List<Avaliation>> ListByUserIdAsync(Guid userId);
        Task<List<Avaliation>> ListByYearAsync(int year);
    }
}
