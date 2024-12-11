using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IPaymentsRepository
    {
        public Task<List<Payment>> GetAll();

        public Task Add(Payment payment);
    }
}
