using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IWorkoutLogRepository
    {
        public Task Add(WorkoutLog workoutLog);

        public Task<List<WorkoutLog>> GetByUserId(string userId);
    }
}
