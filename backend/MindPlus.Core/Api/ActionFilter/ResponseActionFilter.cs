using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using MindPlus.Core.Api.Factories;
using MindPlus.Core.Notifications;

namespace MindPlus.Core.Api.ActionFilter
{
    // Filtro que padroniza os retornos de TODAS as APIS
    public class ResponseActionFilter : IActionFilter
    {
        private readonly INotificationService _notificationService;

        public ResponseActionFilter(INotificationService notification)
        {
            _notificationService = notification;
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            if (context.Result == null) return;
            
            var result = ((ObjectResult)context.Result).Value;

            if (_notificationService.HasErrors())
            {
                context.Result = new JsonResult(ResponseFactory.GetError(_notificationService.GetErrors().FirstOrDefault()));

                return;
            }

            context.Result = new JsonResult(ResponseFactory.GetSuccess(result));
        }

        public void OnActionExecuting(ActionExecutingContext context) { }
    }
}
