using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.Services.Base;

namespace MindPlus.Domain.Interfaces.Services
{
    public interface IAvaliationDomainService : IDomainService<Avaliation>
    {
        Task<List<Avaliation>> ListByUserIdAsync(Guid userId);
        Task<List<Avaliation>> ListByYearAsync(int year);
    }
}
