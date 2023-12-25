using Dapper;
using MindPlus.API.Contracts.Repository;
using MindPlus.API.DTO;
using MindPlus.API.Entity;
using MindPlus.API.Infrastructure;

namespace MindPlus.API.Repository
{
    public class UserRepository : Connection, IUserRepository
    {
        public async Task AtualizarUsuario(UserEntity user)
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

        public async Task CadastrarUsuario(UserDTO user)
        {
            string sql = @"
                    INSERT INTO USER (Nome, Email, Senha, Telefone, Endereco, EmpresaId, Role)
                        VALUE (@Nome, @Email, @Senha, @Telefone, @Endereco, @EmpresaId, @Role)
            ";
            await Execute(sql, user);
        }

        public async Task<UserEntity> GetById(int id)
        {
            string sql = @"SELECT * FROM USER WHERE Id = @Id";
            return await GetConnection().QueryFirstAsync<UserEntity>(sql, new { id });
        }

        public async Task<UserTokenDTO> LogIn(LoginDTO user)
        {
            string sql = "SELECT * FROM USER WHERE Email = @Email AND Senha = @Senha AND Ativo = 'S'";
            UserEntity colaboradorLogin = await GetConnection().QueryFirstAsync<UserEntity>(sql, user);
            return new UserTokenDTO
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

        public async Task<IEnumerable<UserEntity>> VisualizarUsuarios()
        {
            string sql = @"SELECT * FROM USER";
            return await GetConnection().QueryAsync<UserEntity>(sql);
        }
    }
}
