
using MindPlus.Api.Dto.Empresa;
using MindPlus.Api.Entity.Empresa;

namespace MindPlus.Api.Contracts.Repository
{
    public interface IAvaliacaoRepository
    {
        Task CadastrarEmpresa(EmpresaDto empresa);
        Task<int> ObterQuantidadeAvaliacoesMesAtual();
        Task<EmpresaEntity> ObterPorId(int id);
    }
}
