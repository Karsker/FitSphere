using FitnessAndWorkoutSystem.Interfaces;
using FitnessAndWorkoutSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FitnessAndWorkoutSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealsController : ControllerBase
    {
        private readonly IMealsService _mealsService;

        public MealsController(IMealsService mealsService)
        {
            _mealsService = mealsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Meal>>> GetAllMeals()
        {
            var meals = await _mealsService.GetAllMeals();
            return Ok(meals);
        }

        [HttpGet("search/{id}")]
        public async Task<ActionResult<Meal>> GetMealById(string id)
        {
            var meal = await _mealsService.GetMealById(id);
            if (meal is null)
            {
                return NotFound("No meal found with the given Id");
            }

            return Ok(meal);
        }

        [HttpPost]
        public async Task<IActionResult> AddMeal(Meal meal)
        {
            await _mealsService.AddMeal(meal);
            return CreatedAtAction(nameof(GetMealById), new { id = meal.MealId }, meal);
        }
    }
}
