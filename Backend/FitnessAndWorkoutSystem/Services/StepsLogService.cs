using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
namespace FitnessAndWorkoutSystem.Services
{
    public class StepsLogService: IStepsLogService
    {
        private readonly IStepsLogRepository _repo;

        public StepsLogService(IStepsLogRepository repo)
        {
            _repo = repo;
        }

        public async Task<List<StepsLog>> GetAllStepLogs()
        {
            return await _repo.GetAll();
        }

        public async Task<List<StepsLog>> GetStepLogsByUserId(string userId)
        {
            return await _repo.GetByUserId(userId);
        }

        public async Task AddStepLog(StepsLog stepsLog)
        {
            await _repo.AddLog(stepsLog);
        }
    }
}
