using Dapper;
using MindPlus.Api.Contracts.Repository;
using MindPlus.Api.DTO;
using MindPlus.Api.Entity;
using MindPlus.Api.Infrastructure;

namespace MindPlus.Api.Repository
{
    public class UsuarioRepository : Connection, IUsuarioRepository
    {
        public async Task AtualizarUsuario(UsuarioEntity usuario)
        {
            string sql = @"
                    UPDATE USUSARIO
                        SET Nome = @Nome,
                            Email = @Email,
                            Senha = @Senha,
                            Telefone = @Telefone,
                            Endereco = @Endereco,
                            EmpresaId = @EmpresaId,
                            Funcao = @Funcao
                        WHERE Id = @Id
            ";
            await Execute(sql, usuario);
        }

        public async Task CadastrarUsuario(UsuarioDTO usuario)
        {
            string sql = @"
                    INSERT INTO USUARIO (Nome, Email, Senha, Telefone, Endereco, EmpresaId, Funcao)
                        VALUE (@Nome, @Email, @Senha, @Telefone, @Endereco, @EmpresaId, @Funcao)
            ";
            await Execute(sql, usuario);
        }

        public async Task<UsuarioEntity> ObterPorId(int id)
        {
            string sql = @"SELECT * FROM USUARIO WHERE Id = @Id";
            return await GetConnection().QueryFirstAsync<UsuarioEntity>(sql, new { id });
        }

        public async Task<UsuarioTokenDTO> LogIn(LoginDTO usuario)
        {
            string sql = "SELECT * FROM USUARIO WHERE Email = @Email AND Senha = @Senha AND Ativo = 'S'";
            UsuarioEntity colaboradorLogin = await GetConnection().QueryFirstAsync<UsuarioEntity>(sql, usuario);
            return new UsuarioTokenDTO
            {
                Token = Authentication.GenerateToken(colaboradorLogin),
                Usuario = colaboradorLogin
            };
        }

        public async Task RemoverUsuario(int id)
        {
            string sql = @"
                    UPDATE USUARIO 
                        SET Ativo = 'N'
                        WHERE Id = @id";
            await Execute(sql, new { id });
        }

        public async Task<IEnumerable<UsuarioEntity>> VisualizarUsuarios()
        {
            string sql = @"SELECT * FROM USUARIO";
            return await GetConnection().QueryAsync<UsuarioEntity>(sql);
        }
    }
}
