using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Services
{
    public class WorkoutLogService: IWorkoutLogService
    {
        private readonly IWorkoutLogRepository _repo;

        public WorkoutLogService(IWorkoutLogRepository repo)
        {
            _repo = repo;
        }

        public async Task AddWorkoutLog(WorkoutLog workoutLog)
        {
            await _repo.Add(workoutLog);   
        }

        public async Task<List<WorkoutLog>> GetWorkoutLogByUserId(string userId)
        {
            var logs = await _repo.GetByUserId(userId);
            return logs;
        }
    }
}
