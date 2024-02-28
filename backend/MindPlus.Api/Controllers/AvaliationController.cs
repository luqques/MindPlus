using Microsoft.AspNetCore.Mvc;
using MindPlus.Application.ViewModels;
using MindPlus.Core.Api.Controllers;
using MindPlus.Domain.Interfaces.ApplicationServices;

namespace MindPlus.Api.Controllers
{
    public class AvaliationController : ApiController
    {
        private readonly IAvaliationApplicationService _appService;

        public AvaliationController(IAvaliationApplicationService appService)
        {
            _appService = appService;
        }

        [HttpPost]
        public async Task<bool> Post([FromBody] AvaliationViewModel avaliationViewModel)
        {
            return await _appService.AddAsync(avaliationViewModel);
        }

        [HttpGet("statistics")]
        public async Task<AvaliationStatisticViewModel> Get()
        {
            return await _appService.GetStatisticsAsync();
        }
    }
}
