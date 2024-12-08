using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace FitnessAndWorkoutSystem.Models
{
    public class Exercise
    {
        [BsonElement("_id")]
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

        [Required]
        [BsonRepresentation(BsonType.String)]
        public string? ExerciseId { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string Name { get; set; }

        [Required]
        public required string[] Equipment { get; set; }

        [Required]
        public required string[] Muscles { get; set; }

        [Required]
        public required string Description { get; set; }

        [Required]
        public required string[] Instructions { get; set; }

        [Required]
        public required string VideoLink { get; set; }
    }
}
