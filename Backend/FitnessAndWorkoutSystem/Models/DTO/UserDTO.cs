using System.ComponentModel.DataAnnotations;

namespace FitnessAndWorkoutSystem.Models.DTO
{
    public class UserDTO
    {
        [EmailAddress]
        public required string Email { get; set; }

        public required string Password { get; set; }
    }
}
