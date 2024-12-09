import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutPlan } from '../../../../types';
import { TrainerDataService } from '../../../services/trainer-data.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-add-exercise-dialog',
  templateUrl: './add-exercise-dialog.component.html',
  styleUrl: './add-exercise-dialog.component.scss'
})
export class AddExerciseDialogComponent implements OnInit {
  workoutPlans:WorkoutPlan[] = [];
  loading: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {trainerId: string, exerciseId: string, exerciseName: string}, private dataService: TrainerDataService){}

  ngOnInit(): void {
    this.dataService.getWorkoutPlans(this.data.trainerId).subscribe(res => {
      this.workoutPlans = res as WorkoutPlan[];
      this.loading = false;
    })
  }

  addExerciseForm = new FormGroup({
    workoutId: new FormControl<string>("", Validators.required),
    reps: new FormControl<number | undefined>(undefined, [Validators.required, Validators.min(1)]),
    sets: new FormControl<number | undefined>(undefined, [Validators.required, Validators.min(1)])
  }); 


  /**
   * Creates a new Workout object with the data from the form and adds to the associated WorkoutPlan. Then sends the updated workout plan to server.
   *
   * @memberof AddExerciseDialogComponent
   */
  onSubmit() {
    if (this.addExerciseForm.valid) {
      // Get the workout plan from the array
      let currentPlan = this.workoutPlans.find(p => p.workoutPlanId == this.addExerciseForm.value.workoutId);
      // console.log(currentPlan);
      let newWorkout:Workout = {
        exerciseId: this.data.exerciseId,
        exerciseName: this.data.exerciseName,
        reps: this.addExerciseForm.value.reps ?? 0,
        sets: this.addExerciseForm.value.sets ?? 0
      }

      // Update the workout plan and send it to server
      if (currentPlan && currentPlan.workoutPlanId) {
        currentPlan.workouts?.push(newWorkout);
        this.dataService.updateWorkoutPlan(currentPlan.workoutPlanId, currentPlan).subscribe();
      }
    }
  }


}
