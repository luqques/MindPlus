
using MindPlus.Api.Dto.Empresa;
using MindPlus.Api.Entity.Empresa;

namespace MindPlus.Api.Contracts.Repository
{
    public interface IAvaliacaoRepository
    {
        Task<EstatisticasDTO> ObterEstatisticas();
        Task<MetasDTO> ObterMetas();
    }
}
