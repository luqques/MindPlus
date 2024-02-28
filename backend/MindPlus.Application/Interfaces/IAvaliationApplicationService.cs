using MindPlus.Application.ViewModels;
using MindPlus.Domain.Entities;
using MindPlus.Domain.Interfaces.ApplicationServices.Base;

namespace MindPlus.Domain.Interfaces.ApplicationServices
{
    public interface IAvaliationApplicationService : IApplicationService<Avaliation>
    {
        Task<bool> AddAsync(AvaliationViewModel avaliationViewModel);
        Task<AvaliationStatisticViewModel> GetStatisticsAsync();
    }
}
