using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Services;
using MongoDB.Driver;

namespace FitnessAndWorkoutSystem.Repositories
{
    public class MealsRepository: IMealsRepository
    {
        private readonly IMongoCollection<Meal> _mealsCollection;

        public MealsRepository(MongoDbClientService mongoClient)
        {
            _mealsCollection = mongoClient.database.GetCollection<Meal>("meals");
        }

        public async Task Add(Meal meal)
        {
            await _mealsCollection.InsertOneAsync(meal);
            return;
        }

        public async Task<List<Meal>> GetAll()
        {
            var meals = await _mealsCollection.Find(_ => true).ToListAsync();
            return meals;
        }

        public async Task<Meal> GetById(string mealId)
        {
            var meal = await _mealsCollection.Find(m => m.MealId == mealId).FirstOrDefaultAsync<Meal>();

            return meal;
        }
    }
}
