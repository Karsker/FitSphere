using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Services
{
    public class ExerciseService: IExerciseService
    {
        private readonly IExerciseRepository _repo;

        public ExerciseService(IExerciseRepository repo)
        {
            _repo = repo;
        }

        public async Task AddExercise(Exercise exercise)
        {
            await _repo.Add(exercise);
            return;
        }

        public async Task<List<Exercise>> GetExerciseList()
        {
            return await _repo.GetAll();
        }

        public async Task<Exercise?> GetExerciseById(string exerciseId)
        {
            var exercise = await _repo.GetById(exerciseId);
            return exercise;
        }
    }
}
