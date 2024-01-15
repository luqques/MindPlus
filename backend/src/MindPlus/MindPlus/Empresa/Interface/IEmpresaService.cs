using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MindPlus.Empresa.Entity;

namespace MindPlus.Empresa.Interface
{
    public interface IEmpresaService
    {
        Task InserirEmpresa(EmpresaEntity empresaEntity);
        Task<EmpresaEntity> ObterEmpresaPorId(int id);
        Task DeletarEmpresa(int id);
        Task AtualizarEmpresa(EmpresaEntity empresaEntity);
    }
}
