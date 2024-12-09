//using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;

namespace FitnessAndWorkoutSystem.Services
{
    public class JWTService
    {
        private readonly string _key;
        private readonly string _issuer;
        private readonly string _audience;

        public JWTService()
        {
            _key = Environment.GetEnvironmentVariable("JWT_KEY");
            _issuer = Environment.GetEnvironmentVariable("JWT_ISSUER");
            _audience = Environment.GetEnvironmentVariable("JWT_AUDIENCE");
        }

        public string GetToken(string username, string userId, string role)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key));
            var cred = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new Dictionary<string, object>
            {
                //{ JwtRegisteredClaimNames.Sub, username },
                //{ ClaimTypes.Role, role },
                //{ JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()},
                //{"userId", userId }
                [JwtRegisteredClaimNames.Sub] = username,
                [ClaimTypes.Role] = role,
                [JwtRegisteredClaimNames.Jti] = Guid.NewGuid().ToString(),
                ["userId"] = userId
            };

            var descriptor = new SecurityTokenDescriptor {
                Issuer = _issuer,
                Audience = _audience,
                Claims = claims,
                Expires = DateTime.Now.AddMonths(1),
                SigningCredentials = cred
            };
            var handler = new JsonWebTokenHandler();

            handler.SetDefaultTimesOnTokenCreation = false;

            var tokenString = handler.CreateToken(descriptor);

            return tokenString;


        }
    }
}
