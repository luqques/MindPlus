using MindPlus.Domain.Entities;
using MindPlus.Domain.Enums;

namespace MindPlus.Application.ViewModels
{
    public class UserViewModel
    {
        public Guid Id { get; set; }
        public bool Active { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Cpf { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string Role { get; set; }
        public UserStatus Status { get; set; }
        public UserFunction Function { get; set; }

        public UserViewModel FromEntity(User user)
        {
            Id = user.Id;
            Name = user.Name;
            Email = user.Email;
            PhoneNumber = user.PhoneNumber;
            Address = user.Address;
            Role = user.Role;
            Function = user.Function;
            Status = user.Status;
            Cpf = user.Cpf;
            Active = user.Active;

            return this;
        }

    }
}
