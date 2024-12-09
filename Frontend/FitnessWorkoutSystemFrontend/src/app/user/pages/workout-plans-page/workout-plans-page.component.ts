import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Workout, WorkoutPlan } from '../../../types';
import { WorkoutPlansService } from '../../../shared/services/workout-plans.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-workout-plans-page',
  templateUrl: './workout-plans-page.component.html',
  styleUrl: './workout-plans-page.component.scss'
})
export class WorkoutPlansPageComponent implements OnInit {
  
  workoutPlans: WorkoutPlan[] = []; // Array to hold the workout plans assigned to user
  displayedColumns: string[] = ["PlanName", "Goal", "Days", "View"]; // Columns displayed for the workout plans table

  constructor(private userService: UserService, private workoutPlanService: WorkoutPlansService){}

  ngOnInit(): void {
    this.userService.CurrentUser.subscribe(user => {
      console.log(user);
      if (user != null) {
        user.workoutPlans.forEach(planId => {
          console.log(planId);
          this.workoutPlanService.getPlan(planId).subscribe(plan => {
            this.workoutPlans = [...this.workoutPlans, plan as WorkoutPlan];
          });
        });
      }
    });
  }
}
