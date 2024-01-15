using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Contract.Empresa
{
    public class CadastrarEmpresaCommand
    {
        public int Id { get; set; }
        public string RazaoSocial { get; set; }
        public string? NomeFantasia { get; set; }
        public string Cnpj { get; set; }
    }
}
