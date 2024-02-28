namespace MindPlus.Core.Notifications
{
    public sealed class NotificationService : INotificationService
    {
        private List<string> _errors = new List<string>();

        public void NotifyError(params string[] error)
        {
            _errors.AddRange(error);
        }

        public string[] GetErrors() => _errors.ToArray();

        public bool HasErrors() => _errors.Any();
    }
}
