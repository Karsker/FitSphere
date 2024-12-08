using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IMessageService
    {
        public Task<List<Message>> GetAllMessages(string userId);

        public Task AddMessage(Message message);
    }
}
