using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FitnessAndWorkoutSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // Get a user by ID
        [Authorize(Policy = "All")]
        [HttpGet("search/{id}")]
        public async Task<ActionResult<User>> GetUserById(string id)
        {
            var user = await _userService.GetUserById(id);
            if (user is null)
            {
                return NotFound("User not found");
            }

            return Ok(user);
        }

        // Filter users by role
        [Authorize(Policy = "All")]
        [HttpGet("filterByRole/{role}")]
        public async Task<ActionResult<List<User>>> GetUserByRole(string role)
        {
            var users = await _userService.GetUsersByRole(role);
            if (users is null || users.Count == 0)
            {
                return NotFound("No users found");
            }

            return Ok(users);
        }

        // Filter users by trainer
        [Authorize(Policy = "TrainerOnly")]
        [HttpGet("filterByTrainer/{trainerId}")]
        public async Task<ActionResult<List<User>>> GetUsersByTrainer(string trainerId)
        {
            var users = await _userService.GetUsersByTrainer(trainerId);
            if (users is null || users.Count == 0)
            {
                return NotFound("No users found");
            }

            return Ok(users);
        }

        // Update user
        [Authorize(Policy = "All")]
        [HttpPut("{userId}")]
        public async Task<IActionResult> UpdateUser(string userId, [FromBody] User user)
        {
            await _userService.UpdateUser(userId, user);
            return CreatedAtAction(nameof(GetUserById), new { id = userId }, user);
        }
    }
}
