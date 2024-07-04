using MindPlus.Domain.ValueObjects;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace MindPlus.Domain.Entities
{
    public class UsuarioEntity
    {
        public UsuarioEntity(Guid id, string nome, string email, string senha, string cpf, Endereco endereco, EStatusUsuario status, EFuncaoUsuario funcao)
        {
            Id = id;
            Nome = nome;
            Email = email;
            Senha = senha;
            Cpf = cpf;
            Endereco = endereco;
            Status = status;
            Funcao = funcao;
        }

        [Required]
        public Guid Id { get; set; }
        
        [Required]
        [Display(Name = "Nome")]
        public string Nome { get; set; }
        
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Senha")]
        public string Senha { get; set; }
        
        [Required]
        public string Cpf { get; set; }
        public Endereco Endereco { get; set; }

        [Required]
        public EStatusUsuario Status { get; set; }
        
        [Required]
        public EFuncaoUsuario Funcao { get; set; }

        public void InativarStatus()
        {
            Status = EStatusUsuario.Inativo;
        }
    }
}
