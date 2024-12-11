using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace FitnessAndWorkoutSystem.Models
{
    public class Payment
    {
        [BsonElement("_id")]
        public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

        public string PaymentId { get; set; } = Guid.NewGuid().ToString();

        public required string RazorpayPaymentId { get; set; }

        public required string UserId { get; set; }

        public required decimal Amount { get; set; }

        public required string PaymentFor {  get; set; }

        public DateTime Date { get; set; } = DateTime.Now;
    }
}
