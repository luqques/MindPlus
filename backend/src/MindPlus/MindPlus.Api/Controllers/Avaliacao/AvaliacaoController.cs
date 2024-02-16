
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MindPlus.Api.Service;

namespace MindPlus.Api.Controllers
{
    [ApiController]
    [Route("api/avaliacoes")]
    public class AvaliacaoController : ControllerBase
    {
        private readonly AvaliacaoService _avaliacaoService;

        public AvaliacaoController(AvaliacaoService avaliacaoService)
        {
            _avaliacaoService = avaliacaoService;
        }

        [HttpGet("estatisticas/preenchimento-atual")]
        public async Task<IActionResult> ObterEstatisticasPreenchimentoAtual()
        {
            try
            {
                var quantidadeAvaliacoes = await _avaliacaoService.ObterQuantidadeAvaliacoesMesAtual();
                var totalColaboradores = 200; // Substitua pelo total real de colaboradores ativos

                return Ok(new { preenchidos = quantidadeAvaliacoes, total = totalColaboradores });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }
    }
}
