﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MindPlus.Api.Contracts.Repository;
using MindPlus.Api.Dto.Usuario;
using MindPlus.Api.Entity.Usuario;
using MindPlus.Api.Infrastructure;
using Org.BouncyCastle.Utilities;
using Swashbuckle.AspNetCore.Annotations;

namespace MindPlus.Api.Controllers
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
            catch (Exception)
            {
                return Unauthorized(new { message = "E-mail ou senha inválidos." });
            }
        }

        /// <summary>
        /// Visualizar todos os usuários.
        /// </summary>
        [HttpGet]
        [SwaggerOperation(Summary = "Visualizar todos os usuários ativos", Description = "Lista todos os usuários ativos do sistema.")]
        public async Task<IActionResult> VisualizarUsuariosAtivos()
        {
            try
            {
                return Ok(await _usuarioRepository.VisualizarUsuariosAtivos());
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Visualizar usuário.
        /// </summary>
        [HttpGet("{id:int}")]
        [SwaggerOperation(Summary = "Visualizar usuário", Description = "Visualiza um usuário de acordo com o Id passado por parâmetro.")]
        public async Task<IActionResult> ObterUsuarioPorId(int id)
        {
            try
            {
                return Ok(await _usuarioRepository.ObterPorId(id));
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Cadastrar um novo usuário. (Requer autenticação como 'admin')
        /// </summary>
        [HttpPost]
        [SwaggerOperation(Summary = "Cadastrar um novo usuário", Description = "Requer autenticação como 'admin'.")]
        public async Task<IActionResult> CadastrarUsuario(UsuarioCadastroDto usuario)
        {
            try
            {
                await _usuarioRepository.CadastrarUsuario(usuario);
                return Ok(new { message = "Colaborador cadastrado com sucesso!" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Atualizar informações de um usuário. (Requer autenticação como 'admin')
        /// </summary>
        [HttpPut]
        [SwaggerOperation(Summary = "Atualizar informações de um usuário", Description = "Requer autenticação como 'admin'.")]
        public async Task<IActionResult> AtualizarUsuario([FromBody] UsuarioEntity usuario)
        {
            try
            {
                await _usuarioRepository.AtualizarUsuario(usuario);
                return Ok(new { message = "Usuário atualizado com sucesso!" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Atualizar informações do próprio perfil. (Requer autenticação)
        /// </summary>
        [HttpPut]
        [Route("perfil")]
        [SwaggerOperation(Summary = "Atualizar informações do próprio perfil", Description = "Requer autenticação.")]
        public async Task<IActionResult> AtualizarProprioPerfil([FromBody] UsuarioAtualizacaoDto usuario)
        {
            try
            {
                await _usuarioRepository.AtualizarProprioPerfil(usuario);
                return Ok(new { message = "Seu perfil foi atualizado com sucesso!" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        /// <summary>
        /// Remover um usuário. (Requer autenticação como 'admin')
        /// </summary>
        [HttpDelete]
        [SwaggerOperation(Summary = "Remover um usuário", Description = "Requer autenticação como 'admin'.")]
        public async Task<IActionResult> RemoverUsuario(int id)
        {
            try
            {
                await _usuarioRepository.RemoverUsuario(id);
                return Ok(new { message = "Usuário removido com sucesso." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
