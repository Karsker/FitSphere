using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace FitnessAndWorkoutSystem.Models
{
    public class StepsLog
    {
        [BsonElement("_id")]
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

        public string LogId { get; set; } = Guid.NewGuid().ToString();

        public required string UserId { get; set; }

        public required int Steps { get; set; }

        public required decimal Distance { get; set; }

        public required int Calories { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;
    }
}
