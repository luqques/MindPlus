using Microsoft.IdentityModel.Tokens;
using MindPlus.Api.Entity;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MindPlus.Api.Infrastructure
{
    public class Authentication
    {
        public static string GenerateToken(UsuarioEntity usuario)
        {
            var key = Encoding.ASCII.GetBytes(Configuration.JWTSecret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, usuario.Nome),
                    new Claim(ClaimTypes.Email, usuario.Email),
                    new Claim(ClaimTypes.Role, usuario.Funcao),
                    new Claim("UsuarioId", usuario.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public static string? ObterUsuarioIdPorToken(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var readToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

            if (readToken?.Claims != null)
            {
                var userIdClaim = readToken.Claims.FirstOrDefault(claim => claim.Type == "UsuarioId");
                if (userIdClaim != null)
                {
                    return userIdClaim.Value;
                }
            }

            return null;
        }
    }
}
