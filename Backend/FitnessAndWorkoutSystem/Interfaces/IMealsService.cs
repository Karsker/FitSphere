using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IMealsService
    {
        public Task AddMeal(Meal meal);
        public Task<List<Meal>> GetAllMeals();

        public Task<Meal> GetMealById(string mealId);
    }
}
