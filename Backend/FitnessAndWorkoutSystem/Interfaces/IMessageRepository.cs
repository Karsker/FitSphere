using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IMessageRepository
    {
        
        public Task<List<Message>> GetAll(string senderId, string receiverId);

        public Task Add(Message message);
    }
}
