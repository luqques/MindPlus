using System.Reflection;

namespace MindPlus.Helpers
{
    //
    // Resumo:
    //     Metadado de uma mensagem - abstração.
    public abstract class BindingMetadata
    {
        public string MessageTypeName { get; }

        public MessageType BindingType { get; }

        public Type HandlerType { get; protected set; }

        public Type MessageRequestType { get; }

        public MethodInfo HandlerMethod { get; protected set; }

        protected BindingMetadata(MessageType bindingType, Type messageRequestType)
        {
            BindingType = bindingType;
            MessageRequestType = messageRequestType;
            MessageTypeName = messageRequestType.Name.ToLower();
        }
    }
}