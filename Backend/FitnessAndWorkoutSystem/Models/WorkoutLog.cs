using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FitnessAndWorkoutSystem.Models
{
    public class WorkoutLog
    {
        [BsonElement("_id")]
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

        public string LogId { get; set; } = Guid.NewGuid().ToString();

        public required string UserId { get; set; }

        public required string ExerciseName { get; set; }

        public required int Reps { get; set; }

        public required int Sets { get; set; }

        public required int Calories { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;
    }
}
