using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using FitnessAndWorkoutSystem.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FitnessAndWorkoutSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutPlanController : ControllerBase
    {
        private readonly IWorkoutPlanService _workoutPlanService;

        public WorkoutPlanController(IWorkoutPlanService workoutPlanService)
        {
            _workoutPlanService = workoutPlanService;
        }

        [Authorize(Policy = "TrainerOnly")]
        [HttpGet("{trainerId}")]
        public async Task<ActionResult<List<WorkoutPlan>>> GetAllWorkoutPlans(string trainerid)
        {
            var plans = await _workoutPlanService.GetAllWorkoutPlans(trainerid);
            return Ok(plans);
        }

        [Authorize(Policy = "All")]
        [HttpGet("search/{planId}")]
        public async Task<ActionResult<WorkoutPlan>> GetPlanById(string planId)
        {
            var plan = await _workoutPlanService.GetPlanById(planId);
            return Ok(plan);
        }

        [Authorize(Policy = "TrainerOnly")]
        [HttpPost]
        public async Task<IActionResult> AddWorkoutPlan(WorkoutPlan workoutPlan)
        {
            await _workoutPlanService.AddWorkoutPlan(workoutPlan);
            return CreatedAtAction(nameof(GetAllWorkoutPlans), new { trainerId = workoutPlan.TrainerId }, workoutPlan);
        }

        [Authorize(Policy = "TrainerOnly")]
        [HttpPut("{planId}")]
        public async Task<IActionResult> UpdateWorkoutPlan(string planId, [FromBody] WorkoutPlan workoutPlan)
        {
            await _workoutPlanService.UpdateWorkoutPlan(planId, workoutPlan);
            return CreatedAtAction(nameof(GetAllWorkoutPlans), new { trainerId = workoutPlan.TrainerId }, workoutPlan);
        }

    }
}
