using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FitnessAndWorkoutSystem.Models
{
    public class WorkoutPlan
    {
        [BsonElement("_id")]
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

        public string WorkoutPlanId { get; set; } = Guid.NewGuid().ToString();

        public required string TrainerId { get; set; }

        public required string WorkoutPlanName { get; set; }

        public required string Goal {  get; set; }
        public required Workout[] Workouts { get; set; }

        public required string[] Days { get; set; }
    }
}
