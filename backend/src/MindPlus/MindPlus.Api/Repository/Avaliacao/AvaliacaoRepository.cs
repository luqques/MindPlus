
using System;
using System.Threading.Tasks;
using Dapper;
using MindPlus.Api.Contracts.Repository;
using MindPlus.Api.Entity;

namespace MindPlus.Api.Repository
{
    public class AvaliacaoRepository : Connection, IAvaliacaoRepository
    {
        public async Task<int> ObterQuantidadeAvaliacoesMesAtual()
        {
           
        }

        public async Task<EstatisticasDTO> ObterEstatisticas()
        {
            string sql = @"SELECT (SELECT COUNT(*) FROM AVALIACAO WHERE MONTH(Data) = MONTH(GETDATE()) AND YEAR(Data) = YEAR(GETDATE())),
                            ";




        }

        public async Task<MetasDTO> ObterMetas()
        {

             string sql = @"
                SELECT COUNT(*) 
                FROM AVALIACAO 
                WHERE MONTH(Data) = MONTH(GETDATE()) 
                AND YEAR(Data) = YEAR(GETDATE())";
            
            return await GetConnection().QueryFirstOrDefaultAsync<int>(sql);

        }
    }
