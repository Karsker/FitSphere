using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IUserRepository
    {
        public Task Add(User user);

        public Task<List<User>> GetAll();

        public Task<User?> GetByEmail(string email);

        public Task<User?> GetById(string userId);

        public Task<List<User>> GetByRole(string role);

        public Task<List<User>> GetByTrainer(string trainerId);

        public Task UpdateUser(string userId, User user);

        public Task Delete(string userId);
    }
}
