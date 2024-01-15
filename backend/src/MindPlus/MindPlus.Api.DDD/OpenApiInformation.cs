using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.OpenApi.Models;

namespace MindPlus.Api.DDD
{
    /// <summary>
    /// Informações da API
    /// </summary>
    public sealed class OpenApiInformation : ConfigureSwaggerOptions
    {
        /// <summary>
        /// Informações da API
        /// </summary>
        public OpenApiInformation(IApiVersionDescriptionProvider provider) : base(provider) { }

        /// <summary>
        /// Informações da API
        /// </summary>
        protected override OpenApiInfo CreateInfoForApiVersion(ApiVersionDescription description)
        {
            var info = new OpenApiInfo
            {
                Title = "API Cooperados Ailos",
                Version = description.ApiVersion.ToString(),
                Description = "Exemplo de aplicação f8n.",
                //Contact = new OpenApiContact() { Name = "Bill Mei", Email = "bill.mei@somewhere.com" },
                //License = new OpenApiLicense() { Name = "MIT", Url = new Uri("https://opensource.org/licenses/MIT") }
            };

            if (description.IsDeprecated)
                info.Description += " API OBSOLETA.";

            return info;
        }
    }
}
