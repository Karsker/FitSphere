using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Services
{
    public class MealsService : IMealsService
    {
        private readonly IMealsRepository _repo;

        public MealsService(IMealsRepository repo)
        {
            _repo = repo;
        }
        public async Task AddMeal(Meal meal)
        {
            await _repo.Add(meal);
        }

        public async Task<List<Meal>> GetAllMeals()
        {
            var meals = await _repo.GetAll();
            return meals;
        }

        public async Task<Meal> GetMealById(string mealId)
        {
            var meal = await _repo.GetById(mealId);
            return meal;
        }
    }
}
