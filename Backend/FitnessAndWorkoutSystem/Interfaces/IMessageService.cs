using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IMessageService
    {
        public Task<List<Message>> GetAllMessages(string senderId, string receiverId);

        public Task AddMessage(Message message);
    }
}
