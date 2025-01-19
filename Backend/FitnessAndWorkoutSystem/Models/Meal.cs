using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace FitnessAndWorkoutSystem.Models
{
    public class Meal
    {
        [BsonElement("_id")]
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

        [Required]
        [BsonRepresentation(BsonType.String)]
        public string? MealId { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public required string Name { get; set; }

        [Required]
        [AllowedValues("Vegetarian", "Non Vegetarian")]
        public required string Type {  get; set; }


        [Required]
        public required string[] Ingredients { get; set; }

        [Required]
        public required string Description { get; set; }

        [Required]
        public required string[] Recipe { get; set; }

        [Required]
        public required string VideoLink { get; set; }

        [Required]
        public required decimal Calories { get; set; }

        [Required]
        public required decimal Carbohydrate {  get; set; }

        [Required]
        public required decimal Protein { get; set; }

        [Required]
        public required decimal Fat {  get; set; }
    }
}
