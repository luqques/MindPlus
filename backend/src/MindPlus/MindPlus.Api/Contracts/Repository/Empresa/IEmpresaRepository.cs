using MindPlus.Api.Dto.Empresa;
using MindPlus.Api.Entity;

namespace MindPlus.Api.Contracts.Repository.Empresa
{
    public interface IEmpresaRepository
    {
        Task CadastrarEmpresa(EmpresaDto empresa);
        Task<EmpresaEntity> ObterPorId(int id);
    }
}
