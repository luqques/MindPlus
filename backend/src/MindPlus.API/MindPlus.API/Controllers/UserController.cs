using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MindPlus.API.Contracts.Repository;
using MindPlus.API.DTO;
using MindPlus.API.Entity;
using Org.BouncyCastle.Utilities;
using Swashbuckle.AspNetCore.Annotations;

namespace MindPlus.API.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        /// <summary>
        /// Visualizar todos os usuários. (Requer autenticação como 'colaborador')
        /// </summary>
        [HttpGet]
        [Authorize(Roles = "colaborador")]
        [SwaggerOperation(Summary = "Visualizar todos os usuários", Description = "Requer autenticação como 'colaborador'.")]
        public async Task<IActionResult> VisualizarUsuarios()
        {
            return Ok(await _userRepository.VisualizarUsuarios());
        }

        /// <summary>
        /// Cadastrar um novo usuário. (Requer autenticação como 'admin')
        /// </summary>
        [HttpPost]
        [Authorize(Roles = "admin")]
        [SwaggerOperation(Summary = "Cadastrar um novo usuário", Description = "Requer autenticação como 'admin'.")]
        public async Task<IActionResult> CadastrarUsuario(UserDTO user)
        {
            await _userRepository.CadastrarUsuario(user);
            return Ok("Colaborador cadastrado com sucesso!");
        }

        /// <summary>
        /// Atualizar informações de um usuário. (Requer autenticação como 'admin')
        /// </summary>
        [HttpPut]
        [Authorize(Roles = "admin")]
        [SwaggerOperation(Summary = "Atualizar informações de um usuário", Description = "Requer autenticação como 'admin'.")]
        public async Task<IActionResult> AtualizarUsuario(UserEntity user)
        {
            await _userRepository.AtualizarUsuario(user);
            return Ok("Usuário atualizado com sucesso!");
        }

        /// <summary>
        /// Remover um usuário. (Requer autenticação como 'admin')
        /// </summary>
        [HttpDelete]
        [Authorize(Roles = "admin")]
        [SwaggerOperation(Summary = "Remover um usuário", Description = "Requer autenticação como 'admin'.")]
        public async Task<IActionResult> RemoverUsuario(int id)
        {
            await _userRepository.RemoverUsuario(id);
            return Ok("Usuário removido com sucesso.");
        }

        /// <summary>
        /// Autenticar um usuário.
        /// </summary>
        [HttpPost]
        [Route("login")]
        [SwaggerOperation(Summary = "Autenticar um usuário", Description = "Autentica um usuário com base nas credenciais fornecidas.")]
        public async Task<IActionResult> LogIn(LoginDTO user)
        {
            try
            {
                return Ok(await _userRepository.LogIn(user));
            }
            catch (Exception ex)
            {
                return Unauthorized("Usuario ou senha inválidos.");
            }
        }
    }
}
