using MindPlus.Usuario.Entity;
using MindPlus.Usuario.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.CommandStore.Usuario
{
    internal class UsuarioCommandStore : IUsuarioCommandStore
    {
        private readonly 

        public Task Atualizar(UsuarioEntity usuarioEntity)
        {
            throw new NotImplementedException();
        }

        public Task Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public Task Inserir(UsuarioEntity usuarioEntity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<UsuarioEntity>> Listar()
        {
            throw new NotImplementedException();
        }

        public Task<UsuarioEntity> ObterPorId(int id)
        {
            throw new NotImplementedException();
        }
    }
}
