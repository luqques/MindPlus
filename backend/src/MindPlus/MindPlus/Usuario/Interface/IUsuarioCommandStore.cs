using MindPlus.Empresa.Entity;
using MindPlus.Usuario.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Usuario.Interface
{
    public interface IUsuarioCommandStore
    {
        Task Atualizar(UsuarioEntity usuarioEntity);
        Task Deletar(int id);
        Task Inserir(UsuarioEntity usuarioEntity);
        Task<UsuarioEntity> ObterPorId(int id);
        Task<IEnumerable<UsuarioEntity>> Listar();
    }
}
