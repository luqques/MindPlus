using MindPlus.Empresa.Entity;
using MindPlus.Empresa.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Empresa.Service
{
    public class EmpresaService : IEmpresaService
    {
        private readonly IEmpresaCommandStore _empresaCommandStore;

        public EmpresaService(IEmpresaCommandStore empresaCommandStore)
        {
            _empresaCommandStore = empresaCommandStore;
        }

        public async Task AtualizarEmpresa(EmpresaEntity empresaEntity)
        {
            await _empresaCommandStore.Atualizar(empresaEntity);
        }

        public async Task DeletarEmpresa(int id)
        {
            await _empresaCommandStore.Deletar(id);
        }

        public async Task InserirEmpresa(EmpresaEntity empresaEntity)
        {
            await _empresaCommandStore.Inserir(empresaEntity);
        }

        public async Task<EmpresaEntity> ObterEmpresaPorId(int id)
        {
            var empresa = await _empresaCommandStore.ObterEmpresaPorId(id);

            if (empresa is null)
                throw new ArgumentNullException(nameof(empresa));

            return empresa;
        }
    }
}
