using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Interfaces
{
    public interface IPaymentsService
    {
        public Task<List<Payment>> GetAllPayments();

        public Task AddPayment(Payment payment);
    }
}
