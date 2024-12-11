using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;

namespace FitnessAndWorkoutSystem.Services
{
    public class PaymentsService: IPaymentsService
    {
        private readonly IPaymentsRepository _repo;

        public PaymentsService(IPaymentsRepository repo)
        {
            _repo = repo;
        }

        public async Task AddPayment(Payment payment)
        {
            await _repo.Add(payment);
        }

        public async Task<List<Payment>> GetAllPayments()
        {
            return await _repo.GetAll();
        }
    }
}
