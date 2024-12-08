using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IWorkoutPlanService
    {
        public Task AddWorkoutPlan(WorkoutPlan workoutPlan);

        public Task<List<WorkoutPlan>> GetAllWorkoutPlans(string trainerId);

        public Task<WorkoutPlan?> GetPlanById(string planId);

        public Task UpdateWorkoutPlan(string planId,  WorkoutPlan workoutPlan);
    }
}
