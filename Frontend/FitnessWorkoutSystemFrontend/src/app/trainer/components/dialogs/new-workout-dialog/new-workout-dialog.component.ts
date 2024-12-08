import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkoutPlan } from '../../../../types';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-new-workout-dialog',
  templateUrl: './new-workout-dialog.component.html',
  styleUrl: './new-workout-dialog.component.scss'
})
export class NewWorkoutDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {trainerId: string, workoutPlans: WorkoutPlan[]}, private api: ApiService){};

  newWorkoutPlanForm = new FormGroup({
    planName: new FormControl<string>("", Validators.required),
    days: new FormControl<string[]>([], Validators.required),
    goal: new FormControl<string>("", Validators.required)
  });

  onSubmit() {
    if (this.newWorkoutPlanForm.valid) {
      let newWorkoutPlan: WorkoutPlan = {
        trainerId: this.data.trainerId,
        days: this.newWorkoutPlanForm.value.days ?? [],
        workoutPlanName: this.newWorkoutPlanForm.value.planName ?? "Unknown",
        goal: this.newWorkoutPlanForm.value.goal ?? "Unknown",
        workouts: [],
      }

      this.api.request('POST', '/workoutPlan', JSON.stringify(newWorkoutPlan)).subscribe(res => {
        this.data.workoutPlans.push(newWorkoutPlan);
      });
      
    }
  }
}

