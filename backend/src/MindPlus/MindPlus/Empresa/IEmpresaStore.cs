using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Empresa
{
    public interface IEmpresaStore
    {
        Task CadastrarEmpresaAsync(Empresa empresa);
    }
}
