using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IStepsLogService
    {
        public Task<List<StepsLog>> GetAllStepLogs();

        public Task<List<StepsLog>> GetStepLogsByUserId(string userId);
        public Task AddStepLog(StepsLog stepsLog);
    }
}
