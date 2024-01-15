using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Enumerado.Usuario
{
    public class Usuario
    {
        public enum StatusAtivoInativo
        {
            Ativo = 'S',
            Inativo = 'N'
        }
        public enum FuncaoUsuario { Admin, Colaborador }
    }
}
