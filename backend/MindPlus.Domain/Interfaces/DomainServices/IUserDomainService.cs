using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.Services.Base;

namespace MindPlus.Domain.Interfaces.Services
{
    public interface IUserDomainService : IDomainService<User>
    {
        Task<User> GetByEmailAndPasswordAsync(string email, string password);
        Task<List<User>> ListActivesWithAvaliationsAsync();
    }
}
