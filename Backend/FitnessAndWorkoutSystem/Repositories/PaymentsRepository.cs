using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Services;
using MongoDB.Driver;

namespace FitnessAndWorkoutSystem.Repositories
{
    public class PaymentsRepository : IPaymentsRepository
    {
        private readonly IMongoCollection<Payment> _paymentsCollection;

        public PaymentsRepository(MongoDbClientService mongoClient)
        {
            _paymentsCollection = mongoClient.database.GetCollection<Payment>("payments");
        }
        public async Task Add(Payment payment)
        {
            await _paymentsCollection.InsertOneAsync(payment);
        }

        public async Task<List<Payment>> GetAll()
        {
            var payments = await _paymentsCollection.Find(_ => true).ToListAsync();
            return payments;
        }
    }
}
