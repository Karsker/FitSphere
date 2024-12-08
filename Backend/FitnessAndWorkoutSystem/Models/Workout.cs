using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace FitnessAndWorkoutSystem.Models
{
    public class Workout
    {
        public required string ExerciseId { get; set; }
        public required string ExerciseName { get; set; }

        public required int Reps { get; set; }

        public required int Sets { get; set; }

    }
}
