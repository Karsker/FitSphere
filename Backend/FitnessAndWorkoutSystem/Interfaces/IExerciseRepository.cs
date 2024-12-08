using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IExerciseRepository
    {
        public Task Add(Exercise exercise);

        public Task<List<Exercise>> GetAll();

        public Task<Exercise> GetById(string exerciseId);
    }
}
