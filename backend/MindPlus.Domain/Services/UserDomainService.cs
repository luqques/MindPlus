using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.Repositories;
using MindPlus.Domain.Interfaces.Services;
using MindPlus.Domain.Services.Base;

namespace MindPlus.Domain.Services
{
    public class UserDomainService : DomainService<User>, IUserDomainService
    {
        private readonly IUserRepository _repository;

        public UserDomainService(IUserRepository repository) : base(repository)
        {
            this._repository = repository;
        }

        public async Task<List<User>> ListActivesWithAvaliationsAsync()
        {
            return await _repository.ListActivesWithAvaliationsAsync();
        }

        public async Task<User> GetByEmailAndPasswordAsync(string email, string password)
        {
            return await _repository.GetByEmailAndPasswordAsync(email, password);
        }
    }
}
