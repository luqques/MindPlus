using Microsoft.AspNetCore.Mvc;
using MindPlus.Api.Contracts.Repository;
using MindPlus.Api.Dto.Avaliacao;

namespace MindPlus.Api.Controllers
{
    [ApiController]
    [Route("avaliacoes")]
    public class AvaliacaoController : ControllerBase
    {

        private readonly IAvaliacaoRepository _repository;

        public AvaliacaoController(IAvaliacaoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("estatisticas")]
        public async Task<IActionResult> ObterEstatisticas()
        {
            try
            {
                var EstatisticasDTO = await _repository.ObterEstatisticas();

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
                var MetasDTO = await _repository.ObterMetas();

                return Ok(MetasDTO);
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno: {ex.Message}");
            }
        }

        [HttpPost("gravar")]
        public async Task<IActionResult> CadastrarAvaliacao(AvaliacaoCadastroDTO avaliacao)
        {
            try
            {
                await _repository.CadastrarAvaliacao(avaliacao);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
