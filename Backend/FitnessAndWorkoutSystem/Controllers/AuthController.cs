using System.Text.RegularExpressions;
using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Models.DTO;
using FitnessAndWorkoutSystem.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FitnessAndWorkoutSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly JWTService _jwtService;
        public AuthController(IUserService userService, JWTService jwtService)
        {
            _userService = userService;
            _jwtService = jwtService;
        }

        // Function to check password strength
        static bool PasswordIsStrong(string passwd)
        {
            string regexPattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{6,}$";

            if (Regex.IsMatch(passwd, regexPattern))
            {
                return true;
            }

            return false;

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            // Check if password is strong
            if (!PasswordIsStrong(user.Password))
            {
                return BadRequest("Password does not meet recommended security requirements");
            }
            await _userService.AddUser(user);
            return Ok();
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(UserDTO creds)
        {
            // Check if user exists
            var userFromDb = await _userService.GetUserByEmail(creds.Email);

            if (userFromDb is null)
            {
                return NotFound("User not found");
            }

            // Check if password is correct by matching the hash
            var passwordHash = UserService.ComputeHash(creds.Password);
            if (!passwordHash.Equals(userFromDb.Password))
            {
                return Unauthorized("Invalid password");
            }

            // Generate JWT token
            var token = _jwtService.GetToken(userFromDb.Name, userFromDb.UserId, userFromDb.Role);

            return new JsonResult(new { token, user = new { userId = userFromDb.UserId, name = userFromDb.Name, email = userFromDb.Email, role = userFromDb.Role } });


        }
    }
}
