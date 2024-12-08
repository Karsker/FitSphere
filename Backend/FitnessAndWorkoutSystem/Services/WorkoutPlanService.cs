using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Services
{
    public class WorkoutPlanService : IWorkoutPlanService
    {
        private readonly IWorkoutPlanRepository _repo;

        public WorkoutPlanService(IWorkoutPlanRepository repo)
        {
            _repo = repo;
        }

        public async Task AddWorkoutPlan(WorkoutPlan workoutPlan)
        {
            await _repo.Add(workoutPlan);
        }

        public async Task<List<WorkoutPlan>> GetAllWorkoutPlans(string trainerId)
        {
            return await _repo.GetAll(trainerId);
        }

        public async Task<WorkoutPlan?> GetPlanById(string planId)
        {
            return await _repo.GetById(planId);
        }

        public async Task UpdateWorkoutPlan(string planid, WorkoutPlan workoutPlan)
        {
            var plan = await _repo.GetById(planid);
            if (plan is null)
            {
                return;
            }
            workoutPlan.Id = plan.Id;
            await _repo.Update(planid, workoutPlan);
        }
    }
}
