using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FitnessAndWorkoutSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutLogController : ControllerBase
    {
        private readonly IWorkoutLogService _workoutLogService;

        public WorkoutLogController(IWorkoutLogService workoutLogService)
        {
            _workoutLogService = workoutLogService;
        }

        [Authorize(Policy = "All")]
        [HttpGet("{userId}")]
        public async Task<ActionResult<List<WorkoutLog>>> GetWorkoutLogsByUserId(string userId)
        {
            var logs = await _workoutLogService.GetWorkoutLogByUserId(userId);
            return Ok(logs);
        }

        [Authorize(Policy = "UserOnly")]
        [HttpPost]
        public async Task<IActionResult> AddWorkoutLog([FromBody] WorkoutLog workoutLog)
        {
            await _workoutLogService.AddWorkoutLog(workoutLog);
            return CreatedAtAction(nameof(GetWorkoutLogsByUserId), new { userId = workoutLog.UserId }, workoutLog);
        }


    }
}
