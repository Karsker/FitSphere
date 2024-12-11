using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IStepsLogRepository
    {
        public Task<List<StepsLog>> GetAll();

        public Task<List<StepsLog>> GetByUserId(string userId);

        public Task AddLog(StepsLog stepsLog);
    }
}
