using Microsoft.AspNetCore.Http;
using MindPlus.Core.Api.Factories;
using System.Buffers;
using System.Text;
using System.Text.Json;

namespace MindPlus.Core.Api.Middlewares
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);

                context.Response.ContentType = "application/json";
                context.Response.StatusCode = 400;
                context.Response.BodyWriter.Write(Encoding.UTF8.GetBytes(JsonSerializer.Serialize(ResponseFactory.GetError("Exceção não tratada! Contate o administrador."))));
            }
        }
    }
}
