using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FitnessAndWorkoutSystem.Models
{
    public class Message
    {
        [BsonElement("_id")]
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

        public string MessageId { get; set; } = Guid.NewGuid().ToString();

        public required string FromId { get; set; }

        public required string FromName { get; set; }

        public required string ToId { get; set; }

        public required string ToName  { get; set; }

        [AllowedValues("Trainer", "Nutritionist")]
        public required string Relation {  get; set; }

        public required string Content { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;



    }
}
