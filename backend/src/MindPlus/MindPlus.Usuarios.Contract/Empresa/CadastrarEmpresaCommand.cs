using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Contract.Empresa
{
    public sealed class CadastrarEmpresaCommand 
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int Id { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string? RazaoSocial { get; set; }

        public string? NomeFantasia { get; set; }

        [Required(AllowEmptyStrings = false)]
        public string? Cnpj { get; set; }

        public bool Validation()
        {
            return Id > 0 && RazaoSocial != null && NomeFantasia != null && Cnpj != null;
        }
    }
}
