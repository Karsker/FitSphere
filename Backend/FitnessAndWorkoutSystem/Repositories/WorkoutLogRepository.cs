using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Services;
using MongoDB.Driver;

namespace FitnessAndWorkoutSystem.Repositories
{
    public class WorkoutLogRepository : IWorkoutLogRepository
    {

        private readonly IMongoCollection<WorkoutLog> _workoutLogsCollection;

        public WorkoutLogRepository(MongoDbClientService mongoClient)
        {
            _workoutLogsCollection = mongoClient.database.GetCollection<WorkoutLog>("workoutLogs");
        }
        public async Task Add(WorkoutLog workoutLog)
        {
            await _workoutLogsCollection.InsertOneAsync(workoutLog);
        }

        public async Task<List<WorkoutLog>> GetByUserId(string userId)
        {
            var logs = await _workoutLogsCollection.Find(_ => true).ToListAsync();
            return logs;
        }
    }
}
