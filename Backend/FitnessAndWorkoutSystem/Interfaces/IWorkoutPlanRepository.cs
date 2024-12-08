using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IWorkoutPlanRepository
    {
        public Task Add(WorkoutPlan workoutPlan);

        public Task<WorkoutPlan?> GetById(string planId);
        public Task<List<WorkoutPlan>> GetAll(string trainerId);

        public Task Update(string planId, WorkoutPlan workoutPlan); 
    }
}
