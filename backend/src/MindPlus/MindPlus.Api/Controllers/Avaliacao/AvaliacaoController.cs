
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MindPlus.Api.Contracts.Repository;
using MindPlus.Api.Service;

namespace MindPlus.Api.Controllers
{
    [ApiController]
    [Route("avaliacoes")]
    public class AvaliacaoController : ControllerBase
    {
        private readonly AvaliacaoService _avaliacaoService;

        public AvaliacaoController(AvaliacaoService avaliacaoService)
        {
            _avaliacaoService = avaliacaoService;
        }//injeção de dependência

        private readonly AvaliacaoRepository repositorio = new AvaliacaoRepository();

        [HttpGet("estatisticas")]
        public async Task<EstatisticasDTO> ObterEstatisticas()
        {
            try
            {
                var EstatisticasDTO = await repositorio.ObterEstatisticas();

                return Ok(EstatisticasDTO);
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }

        [HttpGet("metas")]
        public async Task<MetasDTO> ObterMetas()
        {
            try
            {
                var MetasDTO = await repositorio.ObterMetas();

                return Ok(MetasDTO);
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }

    }
}
