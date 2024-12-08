using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IMessageRepository
    {
        
        public Task<List<Message>> GetAll(string userId);

        public Task Add(Message message);
    }
}
