using Microsoft.EntityFrameworkCore;
using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.Repositories;
using MindPlus.Infrastructure.Context;
using MindPlus.Infrastructure.Repositories.Base;

namespace MindPlus.Infrastructure.Repositories
{
    public class AvaliationRepository : Repository<Avaliation>, IAvaliationRepository
    {
        public AvaliationRepository(MindPlusContext context) : base(context)
        {
        }

        public async Task<List<Avaliation>> ListByUserIdAsync(Guid userId)
        {
            return await GetDbSet().Where(x => x.UserId == userId).ToListAsync();
        }

        public async Task<List<Avaliation>> ListByYearAsync(int year)
        {
            return await GetDbSet().Where(x => x.AvaliatedAt.Year == year).ToListAsync();
        }
    }
}
