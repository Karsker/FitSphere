import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exercise } from '../../../../types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateFormGroup } from '../../../../shared/utils';
import { LogService } from '../../../../shared/services/log.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-workout-log-dialog',
  templateUrl: './add-workout-log-dialog.component.html',
  styleUrl: './add-workout-log-dialog.component.scss'
})
export class AddWorkoutLogDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { exercises: Exercise[] }, private log: LogService, private snackbar: MatSnackBar) { };

  addWorkoutLogForm = new FormGroup({
    workoutType: new FormControl<string>("", Validators.required),
    exerciseName: new FormControl<string>("", Validators.required),
    reps: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    sets: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    calories: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    steps: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    distance: new FormControl<number>(1, [Validators.required, Validators.min(1)])
  });

  onSubmit() {

    if (this.addWorkoutLogForm.value.workoutType == 'Walking/Running') {
      if (
        this.addWorkoutLogForm.value.steps &&
        this.addWorkoutLogForm.value.distance &&
        this.addWorkoutLogForm.value.calories
      ) {
        this.log.addStepsLog(
          this.addWorkoutLogForm.value.steps,
          this.addWorkoutLogForm.value.distance,
          this.addWorkoutLogForm.value.calories
        ).subscribe(res => this.snackbar.open('Updated workout', undefined, {duration: 3000}));
      }
    }

    if (this.addWorkoutLogForm.value.workoutType == 'Exercise') {
      if (
        this.addWorkoutLogForm.value.exerciseName &&
        this.addWorkoutLogForm.value.reps &&
        this.addWorkoutLogForm.value.sets &&
        this.addWorkoutLogForm.value.calories
      ) {
        this.log.addWorkoutLog(
          this.addWorkoutLogForm.value.exerciseName,
          this.addWorkoutLogForm.value.reps,
          this.addWorkoutLogForm.value.sets,
          this.addWorkoutLogForm.value.calories
        ).subscribe(res => this.snackbar.open('Updated workout', undefined, {duration: 3000}));
      }
    }
  }




}
