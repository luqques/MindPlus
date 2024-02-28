
using Microsoft.EntityFrameworkCore;
using MindPlus.Core.Notifications;
using MindPlus.Infrastructure.Context;

namespace MindPlus.Infrastructure.UnityOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MindPlusContext _context;
        private readonly INotificationService _notification;

        public UnitOfWork(MindPlusContext context, INotificationService notification)
        {
            _context = context;
            _notification = notification;
        }

        public async Task<bool> CommitAsync()
        {
            var transaction = _context.Database.BeginTransaction();
            
            try
            {
                var success = (await _context.SaveChangesAsync()) > 0;

                if (success)
                    await transaction.CommitAsync();
                else
                    await transaction.RollbackAsync();

                return true;
            }
            catch
            {
                await transaction.RollbackAsync();

                _notification.NotifyError("Erro ao tentar salvar os dados! Por favor contate um administrador.");
                return false;
            }
        }
    }
}
