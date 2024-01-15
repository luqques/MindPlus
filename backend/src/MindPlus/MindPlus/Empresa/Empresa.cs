using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Empresa
{
    public class Empresa
    {
        public int Id { get; set; }
        public string RazaoSocial { get; set; }
        public string? NomeFantasia { get; set; }
        public string Cnpj { get; set; }

        public Empresa(int id,
                       string razaoSocial,
                       string nomeFantasia,
                       string cnpj)
        {
            Contract.Requires<ArgumentException>(!string.IsNullOrEmpty(razaoSocial), "A Razão Social da Empresa não pode ser vazio.");
            Contract.Requires<ArgumentException>(!string.IsNullOrEmpty(nomeFantasia), "O Nome Fantasia da Empresa não pode ser vazio.");
            Contract.Requires<ArgumentException>(!string.IsNullOrEmpty(cnpj), "O CNPJ da Empresa não pode ser vazio.");

            Id = id;
            RazaoSocial = razaoSocial;
            NomeFantasia = nomeFantasia;
            Cnpj = cnpj;
        }
    }
}
