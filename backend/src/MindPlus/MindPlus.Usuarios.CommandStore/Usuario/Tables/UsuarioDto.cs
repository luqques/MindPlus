using MindPlus.Empresa.Entity;
using MindPlus.Usuario.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static MindPlus.Enumerado.Usuario.Usuario;

namespace MindPlus.CommandStore.Usuario.Tables
{
    public record UsuarioDto(int Id,
                             string Nome,
                             string Email,
                             string Senha,
                             string Cpf,
                             string Telefone,
                             string Endereco,
                             EmpresaEntity Empresa,
                             StatusAtivoInativo Status,
                             FuncaoUsuario Funcao)
    {
        internal UsuarioEntity ToEntity()
        {
            if (Id == 0)
                return null;

            var entidade = new UsuarioEntity(Id, Nome, Email, Senha, Cpf, Telefone, Endereco, Empresa, Status, Funcao);

            return entidade;
        }
    }
}
