using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FitnessAndWorkoutSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StepsLogController : ControllerBase
    {
        private readonly IStepsLogService _stepsLogService;

        public StepsLogController(IStepsLogService stepsLogService)
        {
            _stepsLogService = stepsLogService;
        }

        [Authorize(Policy = "All")]
        [HttpGet("{userId}")]
        public async Task<ActionResult<List<StepsLog>>> GetStepLogsByUserId(string userId)
        {
            var logs = await _stepsLogService.GetStepLogsByUserId(userId);
            return Ok(logs);
        }

        [Authorize(Policy = "UserOnly")]
        [HttpPost]
        public async Task<IActionResult> AddStepLog([FromBody] StepsLog stepsLog)
        {
            await _stepsLogService.AddStepLog(stepsLog);
            return CreatedAtAction(nameof(GetStepLogsByUserId), new { userId = stepsLog.UserId }, stepsLog);
        }

    }
}
