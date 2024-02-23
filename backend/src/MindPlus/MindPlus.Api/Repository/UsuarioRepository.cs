using Dapper;
using MindPlus.Api.Contracts.Repository;
using MindPlus.Api.Dto.Usuario;
using MindPlus.Api.Entity.Usuario;
using MindPlus.Api.Infrastructure;

namespace MindPlus.Api.Repository
{
    public class UsuarioRepository : Connection, IUsuarioRepository
    {
        public async Task AtualizarUsuario(UsuarioEntity usuario)
        {
            string sql = @"
                    UPDATE USUARIO
                        SET Nome = @Nome,
                            Email = @Email,
                            Senha = @Senha,
                            Telefone = @Telefone,
                            Endereco = @Endereco,
                            EmpresaId = @EmpresaId,
                            Status = @Status,
                            Funcao = @Funcao
                        WHERE Id = @Id
            ";
            await Execute(sql, usuario);
        }

        public async Task CadastrarUsuario(UsuarioCadastroDto usuario)
        {
            string sql = @"
                    INSERT INTO USUARIO (Nome, Email, Senha, Telefone, Endereco, EmpresaId, Status, Funcao)
                        VALUES (@Nome, @Email, @Senha, @Telefone, @Endereco, @EmpresaId, @Status, @Funcao)
            ";
            await Execute(sql, usuario);
        }

        public async Task<UsuarioEntity> ObterPorId(int id)
        {
            string sql = @"SELECT * FROM USUARIO WHERE Id = @Id";
            return await GetConnection().QueryFirstAsync<UsuarioEntity>(sql, new { id });
        }

        public async Task<UsuarioTokenDto> LogIn(LoginDto usuario)
        {
            string sql = "SELECT * FROM USUARIO WHERE Email = @Email AND Senha = @Senha AND Status = 'ativo'";
            UsuarioEntity colaboradorLogin = await GetConnection().QueryFirstAsync<UsuarioEntity>(sql, usuario);
            return new UsuarioTokenDto
            {
                Token = Authentication.GenerateToken(colaboradorLogin),
                Usuario = colaboradorLogin
            };
        }

        public async Task RemoverUsuario(int id)
        {
            string sql = @"
                    UPDATE USUARIO 
                        SET Status = 'inativo'
                        WHERE Id = @id";
            await Execute(sql, new { id });
        }

        public async Task<IEnumerable<UsuarioEntity>> VisualizarUsuariosAtivos()
        {
            string sql = @"SELECT * FROM USUARIO WHERE Status = 'ativo'";
            return await GetConnection().QueryAsync<UsuarioEntity>(sql);
        }

        public async Task AtualizarProprioPerfil(UsuarioAtualizacaoDto usuario)
        {
            string sql = @"
                    UPDATE USUARIO
                        SET Email = @Email,
                            Telefone = @Telefone,
                            Endereco = @Endereco
                        WHERE Id = @Id";
            await Execute(sql, usuario);
        }
    }
}
