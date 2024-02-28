using MindPlus.Core.Api.Responses;

namespace MindPlus.Core.Api.Factories
{
    public static class ResponseFactory
    {
        public static Response<TData> GetSuccess<TData>(TData data)
        {
            return new Response<TData>(data, true);
        }

        public static Response<object> GetError(string error)
        {
            return new Response<object>(error);
        }
    }
}
