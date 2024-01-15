using MindPlus.Empresa.Entity;

namespace MindPlus.Empresa.Interface
{
    public interface IEmpresaCommandStore
    {
        Task Atualizar(EmpresaEntity empresaEntity);
        Task Deletar(int id);
        Task Inserir(EmpresaEntity empresaEntity);
        Task<EmpresaEntity> ObterEmpresaPorId(int id);
    }
}
