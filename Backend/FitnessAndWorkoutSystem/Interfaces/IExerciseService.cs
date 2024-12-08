using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IExerciseService
    {
        public Task AddExercise(Exercise exercise);

        public Task<List<Exercise>> GetExerciseList();

        public Task<Exercise?> GetExerciseById(string exerciseId);

    }
}
