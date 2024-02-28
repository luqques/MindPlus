using System.Text.Json.Serialization;

namespace MindPlus.Core.Api.Responses
{
    public class Response<TData>
    {
        // Success é um parametro opcional, caso ninguem passe o success, ele sera null e depois... true por conta do operador nullable "??"
        // Isso foi criado para que quando o parametro generico for STRING, nao de conflito com o outro construtor :P
        public Response(TData data, bool? success = null)
        {
            Data = data;
            Success = success ?? true;
        }

        public Response(string error)
        {
            Error = error;
            Success = false;
        }

        public bool Success { get; set; }
        
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public TData Data { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Error { get; set; }
    }
}
