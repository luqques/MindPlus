using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.CommandStore.Usuario
{
    public class UsuarioCommandStoreConsts
    {
        public const string SQL_CADASTRAR_USUARIO = @"
            INSERT INTO USUARIO (Nome,
                                 Email,
                                 Senha,
                                 Telefone,
                                 Endereco,
                                 Status,
                                 Funcao)
                         VALUES (@Nome,
                                 @Email,
                                 @Senha,
                                 @Telefone,
                                 @Endereco,
                                 @Status,
                                 @Funcao)";

        public const string SQL_ATUALIZAR_USUARIO = @"
            UPDATE USUARIO
                SET Nome = @Nome,
                    Email = @Email,
                    Senha = @Senha,
                    Telefone = @Telefone,
                    Endereco = @Endereco,
                    Status = @Status,
                    Funcao = @Funcao
                WHERE Id = @Id";
    }
}
