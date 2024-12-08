using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Services;
using MongoDB.Driver;

namespace FitnessAndWorkoutSystem.Repositories
{
    public class ExerciseRepository: IExerciseRepository
    {
        private readonly IMongoCollection<Exercise> _exerciseCollection;
        
        public ExerciseRepository(MongoDbClientService mongoClient)
        {
            _exerciseCollection = mongoClient.database.GetCollection<Exercise>("exercises");
        }

        public async Task Add(Exercise exercise)
        {
            await _exerciseCollection.InsertOneAsync(exercise);
            return;
        }

        public async Task<List<Exercise>> GetAll()
        {
            var exercises = await _exerciseCollection.Find(_ => true).ToListAsync<Exercise>();
            return exercises;
        }

        public async Task<Exercise> GetById(string exerciseId)
        {
            var exercise = await    _exerciseCollection.Find(e => e.ExerciseId == exerciseId).FirstOrDefaultAsync<Exercise>();
            Console.WriteLine($"Exercise: {exercise}");
            return exercise;
        }
    }
}
