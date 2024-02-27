﻿using MindPlus.Api.Dto.Empresa;
using MindPlus.Api.Entity.Empresa;

namespace MindPlus.Api.Contracts.Repository
{
    public interface IEmpresaRepository
    {
        Task CadastrarEmpresa(EmpresaDto empresa);
        Task<EmpresaEntity> ObterPorId(int id);
    }
}
