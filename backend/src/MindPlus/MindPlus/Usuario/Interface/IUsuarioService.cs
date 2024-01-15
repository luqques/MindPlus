using MindPlus.Usuario.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Usuario.Interface
{
    public interface IUsuarioService
    {
        Task InserirUsuario(UsuarioEntity usuario);
        Task AtualizarUsuario(UsuarioEntity usuario);
        Task DeletarUsuario(int id);
        Task<IEnumerable<UsuarioEntity>> ListarUsuarios();
        Task<UsuarioEntity> ObterUsuarioPorId(int id);
    }
}
