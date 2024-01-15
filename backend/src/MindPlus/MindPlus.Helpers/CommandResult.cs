
namespace Ailos.Foundation.Core.Messaging.Commands
{
    public class CommandResult : ICommandResult, IMessage
    {
        public string SourceId { get; }

        public CommandResult()
        {
        }

        public CommandResult(string sourceId)
            : this()
        {
            SourceId = sourceId;
        }

        public static CommandResult FromSource(string sourceId)
        {
            return new CommandResult(sourceId);
        }
    }
}