﻿using MindPlus.Api.Dto.Usuario;
using MindPlus.Api.Entity.Usuario;

namespace MindPlus.Api.Contracts.Repository
{
    public interface IUsuarioRepository
    {
        Task CadastrarUsuario(UsuarioCadastroDto usuario);
        Task AtualizarUsuario(UsuarioEntity usuario);
        Task RemoverUsuario(int id);
        Task<IEnumerable<UsuarioEntity>> VisualizarUsuariosAtivos();
        Task<UsuarioEntity> ObterPorId(int id);
        Task<UsuarioTokenDto> LogIn(LoginDto usuario);
        Task AtualizarProprioPerfil(UsuarioAtualizacaoDto usuario);
    }
}
