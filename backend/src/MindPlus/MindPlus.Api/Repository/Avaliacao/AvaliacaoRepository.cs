
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

using Dapper;
using MindPlus.Api.Entity;
using MindPlus.Api.Dto.Avaliacao;
using MindPlus.Api.Entity.Avaliacao;
using MindPlus.Api.Infrastructure;
using MindPlus.Api.Contracts.Repository;

namespace MindPlus.Api.Repository.Avaliacao
{
    public class AvaliacaoRepository : Connection, IAvaliacaoRepository
    {

        public async Task<MetasDTO> ObterMetas()
        {
            MetasDTO dto = new MetasDTO();

            string sqlColaboradorAtualTotal = @"
            SELECT COUNT(DISTINCT Id) 
            FROM usuario 
            WHERE Status = 'ativo' AND Funcao = 'colaborador'";
            dto.ColaboradorTotalAtual = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlColaboradorAtualTotal);

            string sqlPreenchimentoAtual = @"
            SELECT COUNT(DISTINCT USUARIO_Id) 
            FROM avaliacao 
            JOIN usuario ON usuario.Id = avaliacao.usuario_Id
            WHERE MONTH(`Data`) = MONTH(NOW()) AND YEAR(`Data`) = YEAR(NOW()) AND Status = 'ativo' AND Funcao = 'colaborador';";
            dto.PreenchimentoTotalAtual = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlPreenchimentoAtual);


            dto.PreenchimentosMes = new List<PreenchimentoMes>();
            //for que roda a quantidade de meses
            for (int i = 1; i <= DateTime.Today.Month; i++)
            {
                PreenchimentoMes mes = new PreenchimentoMes();
                mes.Mes = i;

                string sqlpreenchimentoMes = @$"
                SELECT count(distinct USUARIO_Id)
                FROM mp.avaliacao
                WHERE YEAR(`Data`) = {DateTime.Today.Year} AND
                MONTH(`Data`) = {i}";
                mes.Preenchimento = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlpreenchimentoMes);

                dto.PreenchimentosMes.Add(mes);
            }

            dto.PreenchimentosAno = new List<PreenchimentoAno>();

            string sqlAnosComPreenchimento = "SELECT distinct year(`Data`) FROM mp.avaliacao";
            int[]? anosComPreenchimento = await GetConnection().QueryFirstOrDefaultAsync<int[]>(sqlAnosComPreenchimento);

            //for que roda a quantidade de anos
            for (int i = 0; i < (anosComPreenchimento == null ? 0 : anosComPreenchimento.Length); i++)
            {//se for nulo ele não retorna nada pois é zero, evitando NullPointerExeption
                PreenchimentoAno ano = new PreenchimentoAno();
                ano.Ano = anosComPreenchimento[i];

                string sqlPreenchimentosAno = @$"SELECT count(Id)
                                                FROM mp.avaliacao
                                                WHERE YEAR(`Data`) = {anosComPreenchimento[i]} 
                                                AND Avaliacao = 1";
                ano.Preenchimento = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlPreenchimentosAno);

                dto.PreenchimentosAno.Add(ano);
            }

            return dto;
        }

        public async Task<EstatisticasDTO> ObterEstatisticas()
        {
            EstatisticasDTO dto = new EstatisticasDTO();
            dto.EscoresST = new List<EscoreAvaliacao>();
            dto.EscoresSP = new List<EscoreAvaliacao>();
            dto.EscoresRI = new List<EscoreAvaliacao>();

            for (int i = 0; i < 5; i++)
            {
                var avaliacao = new EscoreAvaliacao();
                avaliacao.MediaEscore = i + 1;

                string sqlNumeroPessoas = @$"SELECT COUNT(DISTINCT USUARIO_Id) 
                                            FROM avaliacao 
                                            WHERE MONTH(`Data`) = MONTH(NOW()) 
                                            AND YEAR(`Data`) = YEAR(NOW())
                                            AND Escore > {i + 0.1} AND Escore < {i + 1}
                                            AND Avaliacao = 1";
                avaliacao.NumeroPessoas = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlNumeroPessoas);

                dto.EscoresST.Add(avaliacao);

            }


            for (int i = 0; i < 5; i++)
            {
                var avaliacao = new EscoreAvaliacao();
                avaliacao.MediaEscore = i + 1;

                string sqlNumeroPessoas = @$"SELECT COUNT(DISTINCT USUARIO_Id) 
                                            FROM avaliacao 
                                            WHERE MONTH(`Data`) = MONTH(NOW()) 
                                            AND YEAR(`Data`) = YEAR(NOW())
                                            AND Escore > {i + 0.1} AND Escore < {i + 1}
                                            AND Avaliacao = 2";
                avaliacao.NumeroPessoas = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlNumeroPessoas);

                dto.EscoresSP.Add(avaliacao);

            }

            for (int i = 0; i < 5; i++)
            {
                var avaliacao = new EscoreAvaliacao();
                avaliacao.MediaEscore = i + 1;

                string sqlNumeroPessoas = @$"SELECT COUNT(DISTINCT USUARIO_Id) 
                                            FROM avaliacao 
                                            WHERE MONTH(`Data`) = MONTH(NOW()) 
                                            AND YEAR(`Data`) = YEAR(NOW())
                                            AND Escore > {i + 0.1} AND Escore < {i + 1}
                                            AND Avaliacao = 3";
                avaliacao.NumeroPessoas = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlNumeroPessoas);


                dto.EscoresRI.Add(avaliacao);
            }

            string sqlMediaGST = @"
            SELECT avg(Escore)
            FROM mp.avaliacao
            WHERE Avaliacao = 1 AND MONTH(`Data`) = MONTH(NOW()) AND YEAR(`Data`) = YEAR(NOW());";
            dto.NiveisEstresse.MediaGST = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlMediaGST);

            string sqlMediaGSP = @"
            SELECT avg(Escore)
            FROM mp.avaliacao
            WHERE Avaliacao = 2 AND MONTH(`Data`) = MONTH(NOW()) AND YEAR(`Data`) = YEAR(NOW());";
            dto.NiveisEstresse.MediaGSP = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlMediaGSP);

            string sqlMediaGRI = @"
            SELECT avg(Escore)
            FROM mp.avaliacao
            WHERE Avaliacao = 3 AND MONTH(`Data`) = MONTH(NOW()) AND YEAR(`Data`) = YEAR(NOW());";
            dto.NiveisEstresse.MediaGRI = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlMediaGRI);
            //MediaGeral de todos
            dto.NiveisEstresse.MediaGeral = (dto.NiveisEstresse.MediaGST + dto.NiveisEstresse.MediaGSP + dto.NiveisEstresse.MediaGRI) / 3;


            dto.TendenciasTemporais = new List<TendenciasTemporais>();
            //for que roda a quantidade de meses
            for (int i = 1; i <= DateTime.Today.Month; i++)
            {
                TendenciasTemporais mes = new TendenciasTemporais();
                mes.Mes = i;

                string sqlTendenciasTemporais = @$"
                SELECT avg(Escore)
                FROM mp.avaliacao
                WHERE YEAR(`Data`) = {DateTime.Today.Year} AND
                MONTH(`Data`) = {i}";
                mes.MediaEscore = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlTendenciasTemporais);

                dto.TendenciasTemporais.Add(mes);
            }
            //Equilíbrio Vida Pessoal será no front
            return dto;

        }
    }
}