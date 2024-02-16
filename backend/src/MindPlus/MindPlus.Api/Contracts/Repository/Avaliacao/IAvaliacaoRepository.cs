
using System;
using System.Threading.Tasks;
using MindPlus.Api.Entity;

namespace MindPlus.Api.Contracts.Repository
{
    public interface IAvaliacaoRepository
    {
        Task CadastrarEmpresa(EmpresaDto empresa);
        Task<int> ObterQuantidadeAvaliacoesMesAtual();
        Task CadastrarEmpresa(EmpresaDto empresa);
        Task<EmpresaEntity> ObterPorId(int id);
    }
}
