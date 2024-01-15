using Ailos.Foundation.Core.Messaging.Commands;
using MindPlus.Contract.Empresa;
using MindPlus.Empresa.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MindPlus.Command.Empresa
{
    public class CadastrarEmpresaCommandHandler : ICommandHandler<CadastrarEmpresaCommand, CommandResult>
    {
        private readonly IEmpresaCommandStore _empresaStore;

        public CadastrarEmpresaCommandHandler(IEmpresaCommandStore empresaStore)
        {
            _empresaStore = empresaStore;
        }

        public async Task<CommandResult> Handle(CadastrarEmpresaCommand commandRequest)
        {
            var empresa = new MindPlus.Empresa.EmpresaEntity(commandRequest.Id,
                                                       commandRequest.RazaoSocial,
                                                       commandRequest.NomeFantasia,
                                                       commandRequest.Cnpj);

            await _empresaStore.CadastrarEmpresa(empresa);

            return CommandResult.FromSource(empresa.Id.ToString());
        }

        public Task OnError(Exception exception, CadastrarEmpresaCommand commandRequest)
        {
            throw exception;
        }
    }
}
