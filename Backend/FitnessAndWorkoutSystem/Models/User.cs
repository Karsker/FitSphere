using System.ComponentModel.DataAnnotations;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
namespace FitnessAndWorkoutSystem.Models
{
    public class User
    {
        // During registration only Name, Email, Age, Role and Gender fields are populated
        // For clients, the weight, goal, and height will be populated later. For trainers, these fields remain blank.

        [BsonElement("_id")]
        public ObjectId? Id { get; set; } = ObjectId.GenerateNewId();

        [Required]
        [BsonRepresentation(BsonType.String)]
        public string? UserId { get; set; } = Guid.NewGuid().ToString();

        public required string Name { get; set; }

        [EmailAddress]
        public required string Email { get; set; }

        [Range(18, 100)]
        public required int Age { get; set; }

        [AllowedValues("User", "Trainer")]
        public required string Role { get; set; }

        [AllowedValues("Male", "Female")]
        public required string Gender { get; set; }

        // Password strength is validated on the controller, to allow the model to store the password hash
        public required string Password { get; set; }

        public string? TrainerId { get; set; }
  
        public string? Goal {  get; set; }

        public string? NutritionistId { get; set; }

        // Unit is Kg
       
        [Range(30.00, 300.00)]
        public decimal? Weight { get; set; }

        // Unit is cm  
        [Range(130.00, 220.00)]
        public decimal? Height { get; set; }

        [Range(30.00, 300.00)]
        public decimal? TargetWeight { get; set; }

    }
}
