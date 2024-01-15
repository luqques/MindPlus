using MindPlus.Usuario.Entity;
using MindPlus.Usuario.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Usuario.Service
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioCommandStore _usuarioCommandStore;

        public UsuarioService(IUsuarioCommandStore usuarioEntity)
        {
            _usuarioCommandStore = usuarioEntity;
        }

        public async Task AtualizarUsuario(UsuarioEntity usuarioEntity)
        {
            await _usuarioCommandStore.Atualizar(usuarioEntity);
        }

        public async Task InserirUsuario(UsuarioEntity usuarioEntity)
        {
            await _usuarioCommandStore.Inserir(usuarioEntity);
        }

        public async Task<UsuarioEntity> ObterUsuarioPorId(int id)
        {
            var usuario = await _usuarioCommandStore.ObterPorId(id);

            if (usuario is null)
                throw new ArgumentNullException(nameof(usuario));

            return usuario;
        }

        public async Task DeletarUsuario(int id)
        {
            await _usuarioCommandStore.Deletar(id);
        }

        public Task<IEnumerable<UsuarioEntity>> ListarUsuarios()
        {
            var usuarios = _usuarioCommandStore.Listar();

            return usuarios;
        }
    }
}
