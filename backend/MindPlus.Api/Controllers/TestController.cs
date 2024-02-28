using Microsoft.AspNetCore.Mvc;
using MindPlus.Core.Api.Controllers;
using MindPlus.Domain.Entities;
using MindPlus.Domain.Enums;
using MindPlus.Domain.Interfaces.Repositories;
using MindPlus.Infrastructure.UnityOfWork;

namespace MindPlus.Api.Controllers
{
    public class TestController : ApiController
    {
        private readonly IAvaliationRepository _avaliationRepository;
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public TestController(IAvaliationRepository avaliationRepository, IUserRepository userRepository, IUnitOfWork unitOfWork)
        {
            _avaliationRepository = avaliationRepository;
            _userRepository = userRepository;
            this._unitOfWork = unitOfWork;
        }

        [HttpPost("add-data")]
        public async Task<List<object>> Post(int number)
        {
            if (number == 0) return null;

            var random = new Random();

            var usersCreated = new List<object>();
            var users = new List<User>();
            var avaliations = new List<Avaliation>();

            var lastUserNumber = await _userRepository.GetLastTestUserNumberAsync();

            for (int index = 1; index <= number; index++)
            {
                var i = lastUserNumber + index;

                var user = new User
                (
                    name: $"user-{i}",
                    email: $"user-{i}@gmail.com",
                    password: $"password-{i}",
                    cpf: $"{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}",
                    phoneNumber: $"{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}",
                    address: $"Rua {i}, Blumenau - SC",
                    role: "colaborator",
                    status: (UserStatus)random.Next(0, 1),
                    function: (UserFunction)random.Next(0, 1)
                );

                usersCreated.Add(new
                {
                    user.Name,
                    user.Email,
                    Password = $"password-{i}"
                });

                users.Add(user);

                for (int j = 1; j <= 10; j++)
                {
                    var avaliation = new Avaliation
                    (
                        score: random.Next(1, 5),
                        type: (AvaliationType) random.Next(0, 2),
                        avaliatedAt: DateTime.UtcNow,
                        userId: user.Id
                    );

                    avaliations.Add(avaliation);
                }
            }

            await _userRepository.AddRangeAsync(users.ToArray());
            await _avaliationRepository.AddRangeAsync(avaliations.ToArray());

            await _unitOfWork.CommitAsync();
            
            return usersCreated;
        }
    }
}
