namespace MindPlus.Core.Notifications
{
    public interface INotificationService
    {
        void NotifyError(params string[] error);
        bool HasErrors();
        string[] GetErrors();
    }
}
