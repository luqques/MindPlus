using Microsoft.EntityFrameworkCore;
using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.Repositories;
using MindPlus.Infrastructure.Context;
using MindPlus.Infrastructure.Repositories.Base;

namespace MindPlus.Infrastructure.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(MindPlusContext context) : base(context)
        {
        }

        public async Task<List<User>> ListActivesWithAvaliationsAsync()
        {
            return await GetDbSet().Where(x => x.Active)
                                   .Include(x => x.Avaliations)
                                   .ToListAsync();
        }

        public async Task<User?> GetByEmailAndPasswordAsync(string email, string password)
        {
            return await GetDbSet().FirstOrDefaultAsync(x => x.Email.ToLower().Equals(email.ToLower()));
        }

        public async Task<int> GetLastTestUserNumberAsync()
        {
            return await GetDbSet().CountAsync();
        }
    }
}
