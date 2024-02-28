using MindPlus.Core.Hash;
using MindPlus.Domain.Entities.Base;
using MindPlus.Domain.Enums;

namespace MindPlus.Domain.Entities
{
    public class User : Entity
    {
        private User() { }

        public User(string name, string email, string password, string cpf, string phoneNumber, string address, string role, UserStatus status, UserFunction function)
        {
            SetName(name);
            SetEmail(email);
            SetCpf(cpf);
            SetPassword(password);
            SetPhoneNumber(phoneNumber);
            SetAddress(address);
            SetRole(role);
            SetStatus(status);
            SetFunction(function);
        }

        public string Name { get; private set; }
        public string Email { get; private set; }
        public string Password { get; private set; }
        public string Cpf { get; private set; }
        public string PhoneNumber { get; private set; }
        public string Address { get; private set; }
        public string Role { get; private set; }
        public UserStatus Status { get; private set; }
        public UserFunction Function { get; private set; }

        public ICollection<Avaliation> Avaliations { get; private set; }


        public User SetName(string name)
        {
            Name = name;
            return this;
        }

        public User SetEmail(string email)
        {
            Email = email;
            return this;
        }

        public User SetPassword(string password)
        {
            Password = HashService.Encrypt(password);
            return this;
        }

        public User SetCpf(string cpf)
        {
            Cpf = cpf;
            return this;
        }

        public User SetPhoneNumber(string phoneNumber)
        {
            PhoneNumber = phoneNumber;
            return this;
        }

        public User SetAddress(string address)
        {
            Address = address;
            return this;
        }

        public User SetRole(string role)
        {
            Role = role;
            return this;
        }

        public User SetStatus(UserStatus status)
        {
            Status = status;
            return this;
        }
        
        public User SetFunction(UserFunction function)
        {
            Function = function;
            return this;
        }
    }
}
