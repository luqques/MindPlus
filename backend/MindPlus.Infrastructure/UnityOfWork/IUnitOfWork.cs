namespace MindPlus.Infrastructure.UnityOfWork
{
    public interface IUnitOfWork
    {
        Task<bool> CommitAsync();
    }
}
