using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Services;
using MongoDB.Driver;

namespace FitnessAndWorkoutSystem.Repositories
{
    public class WorkoutPlanRepository: IWorkoutPlanRepository
    {
        private readonly IMongoCollection<WorkoutPlan> _workoutPlanCollection;

        public WorkoutPlanRepository(MongoDbClientService mongoClient)
        {
            _workoutPlanCollection = mongoClient.database.GetCollection<WorkoutPlan>("workoutPlans");
        }

        public async Task Add(WorkoutPlan workoutPlan)
        {
            await _workoutPlanCollection.InsertOneAsync(workoutPlan);
        }

        public async Task<WorkoutPlan?> GetById(string planId)
        {
            var plan = await _workoutPlanCollection.Find(plan => plan.WorkoutPlanId == planId).FirstOrDefaultAsync<WorkoutPlan>();

            return plan;
        }

        public async Task<List<WorkoutPlan>> GetAll(string trainerId)
        {
            var plans = await _workoutPlanCollection.Find(wp => wp.TrainerId == trainerId).ToListAsync();

            return plans;
        }

        public async Task Update(string planId, WorkoutPlan workoutPlan)
        {
            await _workoutPlanCollection.ReplaceOneAsync(plan => plan.WorkoutPlanId == planId, workoutPlan);
        }
    }
}
