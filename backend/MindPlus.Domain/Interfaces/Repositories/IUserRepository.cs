using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.Repositories.Base;

namespace MindPlus.Domain.Interfaces.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User?> GetByEmailAndPasswordAsync(string email, string password);
        Task<int> GetLastTestUserNumberAsync();
        Task<List<User>> ListActivesWithAvaliationsAsync();
    }
}
