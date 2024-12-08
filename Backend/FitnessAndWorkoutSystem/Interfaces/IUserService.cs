using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IUserService
    {
        public Task AddUser(User user);

        public Task<User?> GetUserByEmail(string email);

        public Task<User?> GetUserById(string userId);

        public Task<List<User>?> GetUsersByRole(string role);

        public Task UpdateUser(string userId, User user);
    }
}
