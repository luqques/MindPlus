using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MindPlus.Api.Contracts.Repository.Usuario;
using MindPlus.Api.Dto.Usuario;
using MindPlus.Api.Entity;
using MindPlus.Api.Infrastructure;
using Org.BouncyCastle.Utilities;
using Swashbuckle.AspNetCore.Annotations;

namespace MindPlus.Api.Controllers.Usuario
{
    [ApiController]
    [Route("usuario")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }


        /// <summary>
        /// Autenticar um usuário.
        /// </summary>
        [HttpPost]
        [Route("login")]
        [SwaggerOperation(Summary = "Autenticar um usuário", Description = "Autentica um usuário com base nas credenciais fornecidas.")]
        public async Task<IActionResult> LogIn(LoginDto usuario)
        {
            try
            {
                return Ok(await _usuarioRepository.LogIn(usuario));
            }
            catch (Exception ex)
            {
                return Unauthorized("E-mail ou senha inválidos.");
            }
        }

        /// <summary>
        /// Visualizar todos os usuários.
        /// </summary>
        [HttpGet]
        [Authorize]
        [SwaggerOperation(Summary = "Visualizar todos os usuários", Description = "Lista todos os usuários do sistema.")]
        public async Task<IActionResult> VisualizarUsuarios()
        {
            return Ok(await _usuarioRepository.VisualizarUsuarios());
        }

        /// <summary>
        /// Visualizar usuário.
        /// </summary>
        [HttpGet("{id:int}")]
        [SwaggerOperation(Summary = "Visualizar usuário", Description = "Visualiza um usuário de acordo com o Id passado por parâmetro.")]
        public async Task<IActionResult> ObterUsuarioPorId(int id)
        {
            return Ok(await _usuarioRepository.ObterPorId(id));
        }

        /// <summary>
        /// Cadastrar um novo usuário. (Requer autenticação como 'admin')
        /// </summary>
        [HttpPost]
        [Authorize(Roles = "admin")]
        [SwaggerOperation(Summary = "Cadastrar um novo usuário", Description = "Requer autenticação como 'admin'.")]
        public async Task<IActionResult> CadastrarUsuario(UsuarioDto usuario)
        {
            await _usuarioRepository.CadastrarUsuario(usuario);
            return Ok("Colaborador cadastrado com sucesso!");
        }

        /// <summary>
        /// Atualizar informações de um usuário. (Requer autenticação como 'admin')
        /// </summary>
        [HttpPut]
        [Authorize(Roles = "admin")]
        [SwaggerOperation(Summary = "Atualizar informações de um usuário", Description = "Requer autenticação como 'admin'.")]
        public async Task<IActionResult> AtualizarUsuario(UsuarioEntity usuario)
        {
            await _usuarioRepository.AtualizarUsuario(usuario);
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
            await _usuarioRepository.RemoverUsuario(id);
            return Ok("Usuário removido com sucesso.");
        }
    }
}
