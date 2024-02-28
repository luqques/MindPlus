using MindPlus.Application.Services.Base;
using MindPlus.Application.ViewModels;
using MindPlus.Core.Notifications;
using MindPlus.Domain.Entities;
using MindPlus.Domain.Enums;
using MindPlus.Domain.Interfaces.ApplicationServices;
using MindPlus.Domain.Interfaces.Services;
using MindPlus.Infrastructure.UnityOfWork;

namespace MindPlus.Application.Services
{
    public class AvaliationApplicationService : ApplicationService<Avaliation>, IAvaliationApplicationService
    {
        private readonly IAvaliationDomainService _domainService;

        public AvaliationApplicationService(IAvaliationDomainService service, 
                                            INotificationService notificationService,
                                            IUnitOfWork unitOfWork) 
            : base(service, notificationService, unitOfWork)
        {
            _domainService = service;
        }

        public async Task<AvaliationStatisticViewModel> GetStatisticsAsync()
        {
            var avaliations = await _domainService.ListByYearAsync(DateTime.UtcNow.Year);

            var interpersonalAvaliations = avaliations.Where(x => x.Type == AvaliationType.InterpersonalRelationships);
            var jobAvaliations = avaliations.Where(x => x.Type == AvaliationType.JobSatisfaction);
            var personalAvaliations = avaliations.Where(x => x.Type == AvaliationType.PersonalSatisfaction);

            return new AvaliationStatisticViewModel()
            {
                TotalScoreIR = interpersonalAvaliations.Any() ? interpersonalAvaliations.Sum(x => x.Score) : 0,
                TotalScoreJS = jobAvaliations.Any() ? jobAvaliations.Sum(x => x.Score) : 0,
                TotalScorePS = personalAvaliations.Any() ? personalAvaliations.Sum(x => x.Score) : 0,
                AverageScoreIR = interpersonalAvaliations.Any() ? interpersonalAvaliations.Average(x => x.Score) : 0,
                AverageScoreJS = jobAvaliations.Any() ? jobAvaliations.Average(x => x.Score) : 0,
                AverageScorePS = personalAvaliations.Any() ? personalAvaliations.Average(x => x.Score) : 0
            };
        }

        public async Task<bool> AddAsync(AvaliationViewModel avaliationViewModel)
        {
            var avaliation = new Avaliation(avaliationViewModel.Score, avaliationViewModel.Type, DateTime.UtcNow, avaliationViewModel.UserId);

            await _domainService.AddAsync(avaliation);

            return await UnitOfWork.CommitAsync();
        }
    }
}
