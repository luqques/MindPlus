using Dapper;
using MindPlus.Api.Contracts.Repository;
using MindPlus.Api.Dto.Empresa;
using MindPlus.Api.Entity.Empresa;
using MindPlus.Api.Infrastructure;

namespace MindPlus.Api.Repository
{
    public class EmpresaRepository : Connection, IEmpresaRepository
    {
        public async Task CadastrarEmpresa(EmpresaDto empresa)
        {
            string sql = @"
                        INSERT INTO EMPRESA (Nome, Cnpj)
                        VALUES (@Nome, @Cnpj)";
            await Execute(sql, empresa);
        }

        public async Task<EmpresaEntity> ObterPorId(int id)
        {
            string sql = @"SELECT * FROM EMPRESA WHERE Id = @Id";
            return await GetConnection().QueryFirstAsync<EmpresaEntity>(sql, new { id });
        }
    }
}
