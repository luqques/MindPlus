
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
            WHERE Status = 'ativo'";
            dto.ColaboradorTotalAtual = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlColaboradorAtualTotal);

            string sqlPreenchimentoAtual = @"
            SELECT COUNT(DISTINCT USUARIO_Id) 
            FROM avaliacao 
            JOIN usuario ON usuario.Id = avaliacao.usuario_Id
            WHERE MONTH(Data) = MONTH(NOW()) AND Funcao = 'colaborador' AND YEAR(Data) = YEAR(NOW());";
            dto.PreenchimentoTotalAtual = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlPreenchimentoAtual);


            dto.PreenchimentosMes = new List<PreenchimentoMes>();
            //for que roda a quantidade de meses
            for (int i = 1; i <= DateTime.Today.Month; i++)
            {
                PreenchimentoMes mes = new PreenchimentoMes();
                mes.Mes = i;

                string sqlpreenchimentoMes = $"SELECT batatinhas WHERE MES = {i}";
                mes.Preenchimento = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlpreenchimentoMes);

                dto.PreenchimentosMes.Add(mes);
            }

             dto.PreenchimentosMes = new List<PreenchimentoMes>();
            //for que roda a quantidade de meses
            for (int i = 1; i <= DateTime.Today.Month; i++)
            {
                PreenchimentoMes mes = new PreenchimentoMes();
                mes.Mes = i;

                string sqlpreenchimentoMes = $"SELECT batatinhas WHERE MES = {i}";
                mes.Preenchimento = await GetConnection().QueryFirstOrDefaultAsync<int>(sqlpreenchimentoMes);

                dto.PreenchimentosMes.Add(mes);
            }

            

            return dto;
        }

        public async Task<EstatisticasDTO> ObterEstatisticas()
        {
            EstatisticasDTO dto = new EstatisticasDTO();
            string sql = @"SELECT (SELECT COUNT(*) FROM AVALIACAO WHERE MONTH(Data) = MONTH(GETDATE()) AND YEAR(Data) = YEAR(GETDATE())),";
            dto.    = await GetConnection().QueryFirstOrDefaultAsync<int>(sql);

            return dto;
        }

    }
}