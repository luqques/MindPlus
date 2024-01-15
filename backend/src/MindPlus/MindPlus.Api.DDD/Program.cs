using Microsoft.AspNetCore.Hosting;

namespace MindPlus.Api.DDD
{
    /// <summary>
    /// Programa principal
    /// </summary>
    public static class Program
    {
        /// <summary>
        /// Entrada da aplicação principal
        /// </summary>
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        /// <summary>
        /// Inicializa a aplicação
        /// </summary>
        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return Host
                .CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                })
                .UseSerilog();
        }
    }
}