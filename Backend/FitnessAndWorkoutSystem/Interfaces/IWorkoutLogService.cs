using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IWorkoutLogService
    {
        public Task AddWorkoutLog(WorkoutLog workoutLog);

        public Task<List<WorkoutLog>> GetWorkoutLogByUserId(string userId);
    }
}
