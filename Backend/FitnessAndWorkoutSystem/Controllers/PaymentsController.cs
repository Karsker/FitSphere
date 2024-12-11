using FitnessAndWorkoutSystem.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Razorpay.Api;
using FitnessAndWorkoutSystem.Models;
using Microsoft.AspNetCore.Authorization;

namespace FitnessAndWorkoutSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IPaymentsService _paymentsService;

        static private readonly string keyId = Environment.GetEnvironmentVariable("RAZORPAY_KEY_ID");

        static private readonly string keySecret = Environment.GetEnvironmentVariable("RAZORPAY_KEY_SECRET");

        static private readonly RazorpayClient client = new RazorpayClient(keyId, keySecret);
            
        public PaymentsController(IPaymentsService paymentsService)
        {
            _paymentsService = paymentsService;
        }

        [Authorize(Policy = "UserOnly")]
        [HttpPost("orders")]
        public ActionResult AddOrder()
        {
            Dictionary<string, object> options = new Dictionary<string, object>();

            options.Add("amount", 49900);
            options.Add("receipt", "order_rcptid_11");
            options.Add("currency", "INR");
            Order order = client.Order.Create(options);
            //Console.WriteLine(order["id"]);
            string order_id = order["id"];

            return Ok(new { order_id });
        }

        [Authorize(Policy = "AdminOnly")]
        [HttpGet]
        public async Task<ActionResult<List<Models.Payment>>> GetAllPayments()
        {
            var payments = await _paymentsService.GetAllPayments();
            return Ok(payments);
        }

        [Authorize(Policy = "UserOnly")]
        [HttpPost]
        public async Task<IActionResult> AddPayment([FromBody] Models.Payment payment)
        {
            await _paymentsService.AddPayment(payment);
            return CreatedAtAction(nameof(GetAllPayments), payment);

        }


    }
}
