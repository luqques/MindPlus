using Microsoft.AspNetCore.Mvc;
using MindPlus.Application.ViewModels;
using MindPlus.Core.Api.Controllers;
using MindPlus.Domain.Interfaces.ApplicationServices;

namespace MindPlus.Api.Controllers
{
    public class UserController : ApiController
    {
        private readonly IUserApplicationService _appService;

        public UserController(IUserApplicationService appService)
        {
            _appService = appService;
        }

        [HttpGet]
        public async Task<UserViewModel> Get(Guid? id = null, string email = null, string password = null)
        {
            if (id != null)
                return await _appService.GetByIdAsync(id.Value);
        
            return await _appService.GetUserByEmailAndPasswordAsync(email, password);
        }

        [HttpPost]
        public async Task<bool> Post([FromBody] UserViewModel userVM)
        {
            return await _appService.AddAsync(userVM);
        }

        [HttpPut]
        public async Task<bool> Put([FromBody] UserViewModel userVM)
        {
            return await _appService.UpdateAsync(userVM);
        }

        [HttpDelete]
        public async Task<bool> Delete(Guid id)
        {
            return await _appService.DeleteAsync(id);
        }

        [HttpGet("goals")]
        public async Task<AvaliationGoalViewModel> ListGoalsAsync()
        {
            return await _appService.ListGoalsAsync();
        }
    }
}
