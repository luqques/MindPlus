using MindPlus.Empresa.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.CommandStore.Empresa.Tables
{
    public record EmpresaDto(int Id,
                             string RazaoSocial,
                             string NomeFantasia,
                             string Cnpj)
    {
        internal EmpresaEntity ToEntity()
        {
            if (Id == 0)
                return null;

            var entidade = new EmpresaEntity(Id, RazaoSocial, NomeFantasia, Cnpj);

            return entidade;
        }
    }
}
