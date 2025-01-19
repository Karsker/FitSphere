using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IMealsRepository
    {
        public Task Add(Meal meal);
        public Task<List<Meal>> GetAll();

        public Task<Meal> GetById(string mealId);

    }
}
