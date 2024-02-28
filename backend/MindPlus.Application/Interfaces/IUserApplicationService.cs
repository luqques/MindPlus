using MindPlus.Application.ViewModels;
using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.ApplicationServices.Base;

namespace MindPlus.Domain.Interfaces.ApplicationServices
{
    public interface IUserApplicationService : IApplicationService<User>
    {
        Task<bool> AddAsync(UserViewModel userVM);
        Task<bool> DeleteAsync(Guid id);
        Task<UserViewModel> GetByIdAsync(Guid id);
        Task<UserViewModel> GetUserByEmailAndPasswordAsync(string email, string password);
        Task<AvaliationGoalViewModel> ListGoalsAsync();
        Task<bool> UpdateAsync(UserViewModel userVM);
    }
}
