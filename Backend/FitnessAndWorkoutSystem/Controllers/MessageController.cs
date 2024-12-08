using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FitnessAndWorkoutSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageService _messageService;

        public MessageController(IMessageService messageService)
        {
            _messageService = messageService;
        }

        [Authorize(Policy = "All")]
        [HttpGet("{userId}")]
        public async Task<ActionResult<List<Message>>> GetAllMessages(string userId)
        {
            var messages = await _messageService.GetAllMessages(userId);
            return Ok(messages);
        }

        [Authorize(Policy = "All")]
        [HttpPost]
        public async Task<IActionResult> AddMessage([FromBody] Message message)
        {
            await _messageService.AddMessage(message);
            return CreatedAtAction(nameof(GetAllMessages), new { userId = message.FromId }, message);
        }
    }
}
