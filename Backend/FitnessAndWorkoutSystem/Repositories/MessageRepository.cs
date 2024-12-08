using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Services;
using MongoDB.Driver;

namespace FitnessAndWorkoutSystem.Repositories
{
    public class MessageRepository: IMessageRepository
    {
        private readonly IMongoCollection<Message> _messagesCollection;

        public MessageRepository(MongoDbClientService mongoClient)
        {
            _messagesCollection = mongoClient.database.GetCollection<Message>("messages");
        }

        // Get all messasges for a user
        public async Task<List<Message>> GetAll(string userId)
        {
            var messages = await _messagesCollection.Find(m => (m.FromId == userId || m.ToId == userId)).ToListAsync();
            return messages;
        }

        public async Task Add(Message message)
        {
            await _messagesCollection.InsertOneAsync(message);
        }
    }
}
