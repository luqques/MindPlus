
using Microsoft.EntityFrameworkCore;
using MindPlus.Application.Services;
using MindPlus.Core.Api.ActionFilter;
using MindPlus.Core.Api.Middlewares;
using MindPlus.Core.Notifications;
using MindPlus.Domain.Interfaces.ApplicationServices;
using MindPlus.Domain.Interfaces.Repositories;
using MindPlus.Domain.Interfaces.Services;
using MindPlus.Domain.Services;
using MindPlus.Infrastructure.Context;
using MindPlus.Infrastructure.Repositories;
using MindPlus.Infrastructure.UnityOfWork;

namespace MindPlus.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            #region Web API

            builder.Services.AddControllers(opt =>
            {
                opt.Filters.Add<ResponseActionFilter>();
            });
            builder.Services.AddRouting(opt => opt.LowercaseUrls = true);
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            #endregion

            #region Entity Framework Core

            builder.Services.AddDbContext<MindPlusContext>(option =>
            {
                option.UseSqlServer(builder.Configuration["ConnectionString"]);      
            }, contextLifetime: ServiceLifetime.Scoped);

            #endregion

            #region Dependency Injection

            builder.Services.AddScoped<INotificationService, NotificationService>();

            builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

            builder.Services.AddScoped<IAvaliationApplicationService, AvaliationApplicationService>();
            builder.Services.AddScoped<IAvaliationDomainService, AvaliationDomainService>();
            builder.Services.AddScoped<IAvaliationRepository, AvaliationRepository>();

            builder.Services.AddScoped<IUserApplicationService, UserApplicationService>();
            builder.Services.AddScoped<IUserDomainService, UserDomainService>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();

            #endregion

            var app = builder.Build();

            #region Exception Middleware

            app.UseMiddleware<ExceptionMiddleware>();

            #endregion

            #region Web Api

            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            #endregion

            app.Run();
        }
    }
}
