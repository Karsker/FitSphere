import { Component, OnInit } from '@angular/core';
import { WorkoutPlan } from '../../../types';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ViewExerciseButtonComponent } from '../../components/view-exercise-button/view-exercise-button.component';
import { WorkoutPlansService } from '../../services/workout-plans.service';

@Component({
  selector: 'app-workout-plan-desc-page',
  templateUrl: './workout-plan-desc-page.component.html',
  styleUrl: './workout-plan-desc-page.component.scss'
})
export class WorkoutPlanDescPageComponent implements OnInit {

  workoutPlanId!: string; // The workoutPlanId of the selected workout
  workoutPlan!: WorkoutPlan; // The WorkoutPlan object associated with the selected workout
  loading: boolean = false; // Loading state

  displayedColumns = ["name", "reps", "sets", "view"] // Columns displayed in the exercises table

  constructor(private api: ApiService, private route: ActivatedRoute, private workoutPlanService: WorkoutPlansService){}

  ngOnInit(): void {

    // Get the workout plan ID from the route
    this.workoutPlanId = this.route.snapshot.paramMap.get('id') ?? "";

    this.workoutPlanService.getPlan(this.workoutPlanId).subscribe(res => {
      this.workoutPlan = res as WorkoutPlan;
      this.loading = false;
    });
  }
}
