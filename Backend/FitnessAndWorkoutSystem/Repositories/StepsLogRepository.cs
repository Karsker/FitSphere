using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Services;
using MongoDB.Driver;

namespace FitnessAndWorkoutSystem.Repositories
{
    public class StepsLogRepository: IStepsLogRepository
    {
        private readonly IMongoCollection<StepsLog> _stepsLogsCollection;

        public StepsLogRepository(MongoDbClientService mongoClient)
        {
            _stepsLogsCollection = mongoClient.database.GetCollection<StepsLog>("stepsLogs");
        }

        public async Task<List<StepsLog>> GetAll()
        {
            var logs = await _stepsLogsCollection.Find(_ => true).ToListAsync();
            return logs;
        }

        public async Task<List<StepsLog>> GetByUserId(string userId)
        {
            var logs = await _stepsLogsCollection.Find(log => log.UserId == userId).ToListAsync();
            return logs;
        } 

        public async Task AddLog(StepsLog stepsLog)
        {
            await _stepsLogsCollection.InsertOneAsync(stepsLog);
        }
    }
}
