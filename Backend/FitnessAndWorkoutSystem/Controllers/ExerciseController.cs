using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FitnessAndWorkoutSystem.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseController : ControllerBase
    {
        private readonly IExerciseService _exerciseService;

        public ExerciseController(IExerciseService exerciseService)
        {
            _exerciseService = exerciseService;
        }

        [Authorize(Policy = "All")]
        [HttpGet]
        public async Task<ActionResult<List<Exercise>>> GetExerciseList()
        {
            var data = await _exerciseService.GetExerciseList();
            return Ok(data);
        }

        [Authorize(Policy = "All")]
        [HttpGet("search/{id}")]
        public async Task<ActionResult<Exercise?>> GetExerciseById(string id)
        {
            Console.WriteLine($"id: {id}");
            var exercise = await _exerciseService.GetExerciseById(id);
            if (exercise is null)
            {
                return NotFound();
            }

            return Ok(exercise);
        }

        // TODO: Make Admin access only
        [Authorize(Policy = "AdminOnly")]
        [HttpPost]
        public async Task<IActionResult> AddExercise(Exercise exercise)
        {
            await _exerciseService.AddExercise(exercise);
            return CreatedAtAction(nameof(GetExerciseList), exercise);
        }
    }
}
