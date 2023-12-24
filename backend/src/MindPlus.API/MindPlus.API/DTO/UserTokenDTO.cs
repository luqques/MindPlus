using MindPlus.API.Entity;

namespace MindPlus.API.DTO
{
    public class UserTokenDTO
    {
        public string Token { get; set; }
        public UserEntity User { get; set; }
    }
}
