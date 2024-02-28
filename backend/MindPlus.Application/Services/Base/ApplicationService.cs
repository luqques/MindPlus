using MindPlus.Core.Notifications;
using MindPlus.Domain.Entities.Base;
using MindPlus.Domain.Interfaces.ApplicationServices.Base;
using MindPlus.Domain.Interfaces.Services.Base;
using MindPlus.Infrastructure.UnityOfWork;

namespace MindPlus.Application.Services.Base
{
    public abstract class ApplicationService<TEntity> : IApplicationService<TEntity> where TEntity : Entity 
    {
        protected readonly INotificationService Notification;
        protected readonly IUnitOfWork UnitOfWork;

        public ApplicationService(IDomainService<TEntity> service, 
                                  INotificationService notificationService,
                                  IUnitOfWork unitOfWork)
        {
            Notification = notificationService;
            UnitOfWork = unitOfWork;
        }
    }
}
