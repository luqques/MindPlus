using Microsoft.AspNetCore.Mvc;
using MindPlus.Api.Dto.Avaliacao;
using MindPlus.Api.Repository.Avaliacao;

namespace MindPlus.Api.Controllers
{
    [ApiController]
    [Route("avaliacoes")]
    public class AvaliacaoController : ControllerBase
    {

        private readonly AvaliacaoRepository repositorio = new AvaliacaoRepository();

        [HttpGet("estatisticas")]
        public async Task<IActionResult> ObterEstatisticas()
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
        public async Task<IActionResult> ObterMetas()
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
