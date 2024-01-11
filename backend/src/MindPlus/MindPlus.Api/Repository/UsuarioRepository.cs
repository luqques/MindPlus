using Dapper;
using MindPlus.Api.Contracts.Repository;
using MindPlus.Api.DTO;
using MindPlus.Api.Entity;
using MindPlus.Api.Infrastructure;

namespace MindPlus.Api.Repository
{
    public class UsuarioRepository : Connection, IUsuarioRepository
    {
        public async Task AtualizarUsuario(UsuarioEntity user)
        {
            string sql = @"
                    UPDATE USER
                        SET Nome = @Nome,
                            Email = @Email,
                            Senha = @Senha,
                            Telefone = @Telefone,
                            Endereco = @Endereco,
                            EmpresaId = @EmpresaId,
                            Role = @Role
                        WHERE Id = @Id
            ";
            await Execute(sql, user);
        }

        public async Task CadastrarUsuario(UsuarioDTO user)
        {
            string sql = @"
                    INSERT INTO USER (Nome, Email, Senha, Telefone, Endereco, EmpresaId, Role)
                        VALUE (@Nome, @Email, @Senha, @Telefone, @Endereco, @EmpresaId, @Role)
            ";
            await Execute(sql, user);
        }

        public async Task<UsuarioEntity> GetById(int id)
        {
            string sql = @"SELECT * FROM USER WHERE Id = @Id";
            return await GetConnection().QueryFirstAsync<UsuarioEntity>(sql, new { id });
        }

        public async Task<UsuarioTokenDTO> LogIn(LoginDTO user)
        {
            string sql = "SELECT * FROM USER WHERE Email = @Email AND Senha = @Senha AND Ativo = 'S'";
            UsuarioEntity colaboradorLogin = await GetConnection().QueryFirstAsync<UsuarioEntity>(sql, user);
            return new UsuarioTokenDTO
            {
                Token = Authentication.GenerateToken(colaboradorLogin),
                User = colaboradorLogin
            };
        }

        public async Task RemoverUsuario(int id)
        {
            string sql = @"
                    UPDATE USER 
                        SET Ativo = 'N'
                        WHERE Id = @id";
            await Execute(sql, new { id });
        }

        public async Task<IEnumerable<UsuarioEntity>> VisualizarUsuarios()
        {
            string sql = @"SELECT * FROM USER";
            return await GetConnection().QueryAsync<UsuarioEntity>(sql);
        }
    }
}
