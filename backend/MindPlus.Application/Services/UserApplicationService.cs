using Microsoft.Extensions.Configuration;
using MindPlus.Application.Services.Base;
using MindPlus.Application.ViewModels;
using MindPlus.Core.Hash;
using MindPlus.Core.Notifications;
using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.ApplicationServices;
using MindPlus.Domain.Interfaces.Services;
using MindPlus.Infrastructure.UnityOfWork;

namespace MindPlus.Application.Services
{
    public class UserApplicationService : ApplicationService<User>, IUserApplicationService
    {
        private readonly IUserDomainService _domainService;

        public UserApplicationService(IUserDomainService service, 
                                      INotificationService notificationService, 
                                      IUnitOfWork unitOfWork) 
            : base(service, notificationService, unitOfWork)
        {
            _domainService = service;
        }

        public async Task<AvaliationGoalViewModel> ListGoalsAsync()
        {
            var usersActives = await _domainService.ListActivesWithAvaliationsAsync();
            var avaliations = usersActives.SelectMany(x => x.Avaliations).ToList();

            var monthAvaliationsTotal = avaliations.Where(x => x.AvaliatedAt.Month == DateTime.UtcNow.Month).Count();
            var monthAvaliationsAverage = avaliations.Where(x => x.AvaliatedAt.Month == DateTime.UtcNow.Month).Average(x => x.Score);

            var yearAvaliationsTotal = avaliations.Where(x => x.AvaliatedAt.Year == DateTime.UtcNow.Year).Count();
            var yearAvaliationsAverage = avaliations.Where(x => x.AvaliatedAt.Year == DateTime.UtcNow.Year).Average(x => x.Score);

            return new AvaliationGoalViewModel
            {
                TotalUsers = usersActives.Count(),
                TotalAvaliations = avaliations.Count(),
                Infos = new List<FilledInfoDTO>()
                {
                    new FilledInfoDTO()
                    {
                        Number = monthAvaliationsAverage,
                        Total = monthAvaliationsTotal,
                        Type = FilledInfoType.Month
                    },
                    new FilledInfoDTO()
                    {
                        Number = yearAvaliationsAverage,
                        Total = yearAvaliationsTotal,
                        Type = FilledInfoType.Year
                    }
                }
            };
        }

        public async Task<bool> AddAsync(UserViewModel userVM)
        {
            var user = new User(userVM.Name, userVM.Email, userVM.Password, userVM.Cpf, userVM.PhoneNumber, userVM.Address, userVM.Role, userVM.Status, userVM.Function);
            
            await _domainService.AddAsync(user);

            return await UnitOfWork.CommitAsync();
        }

        public async Task<bool> UpdateAsync(UserViewModel userVM)
        {
            var user = await _domainService.GetByIdAsync(userVM.Id);

            if (user is null)
            {
                Notification.NotifyError("Usuário não encontrado!");
                return false;
            }

            user.SetName(userVM.Name);
            user.SetCpf(userVM.Cpf);
            user.SetStatus(userVM.Status);
            user.SetEmail(userVM.Email);
            user.SetFunction(userVM.Function);
            user.SetAddress(userVM.Address);
            user.SetPhoneNumber(userVM.PhoneNumber);
            user.SetRole(userVM.Role);

            await _domainService.UpdateAsync(user);

            return await UnitOfWork.CommitAsync();
        }

        public async Task<UserViewModel> GetByIdAsync(Guid id)
        {
            var user = await _domainService.GetByIdAsync(id);

            if (user is null)
            {
                Notification.NotifyError("Usuário não encontrado!");
                return null;
            }

            return new UserViewModel().FromEntity(user);
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var user = await _domainService.GetByIdAsync(id);

            if (user is null)
            {
                Notification.NotifyError("Usuário não encontrado!");
                return false;
            }

            user.Inactivate();

            await _domainService.UpdateAsync(user);

            return await UnitOfWork.CommitAsync();
        }

        public async Task<UserViewModel> GetUserByEmailAndPasswordAsync(string email, string password)
        {
            var user = await _domainService.GetByEmailAndPasswordAsync(email, HashService.Encrypt(password));

            if (user is null)
            {
                Notification.NotifyError("Usuário não encontrado!");
                return null;
            }

            return new UserViewModel().FromEntity(user);
        }
    }
}
