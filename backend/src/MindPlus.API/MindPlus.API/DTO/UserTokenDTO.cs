using MindPlus.Api.Entity;

namespace MindPlus.Api.DTO
{
    public class UserTokenDTO
    {
        public string Token { get; set; }
        public UserEntity User { get; set; }
    }
}
