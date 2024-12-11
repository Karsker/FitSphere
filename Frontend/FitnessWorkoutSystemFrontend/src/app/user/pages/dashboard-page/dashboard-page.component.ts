import { Component, OnInit } from '@angular/core';
import { UserProfileHeaderComponent } from '../../components/user-profile-header/user-profile-header.component';
import { UpdateButtonComponent } from '../../components/update-button/update-button.component';
import { MatDialog } from '@angular/material/dialog';
import { AddWorkoutLogDialogComponent } from '../../components/dialogs/add-workout-log-dialog/add-workout-log-dialog.component';
import { ExerciseService } from '../../../shared/services/exercise.service';
import { Exercise, StepsLog, WorkoutLog } from '../../../types';
import { LogService } from '../../../shared/services/log.service';
import { AuthService } from '../../../auth/services/auth.service';
import { DatePipe } from '@angular/common';
import { extractDate } from '../../../shared/utils';
import { fadeIn, fadeOut } from '../../../shared/animations';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
  animations: [fadeIn, fadeOut]
})
export class DashboardPageComponent implements OnInit {

  exercises!: Exercise[]; // Array to store all exercises
  workoutLogs!: WorkoutLog[]; // Array to store workout logs
  stepsLogs !: StepsLog[] // Array to store step logs
  displayedColumns =  ["exercise", "sets", "reps", "calories", "date"];
  calories: number = 0; // Total calories burned today
  steps: number = 0; // Total steps walked/run
  distance: number = 0; // Total distance walked/run

  constructor(private dialog: MatDialog, private exerciseSvc: ExerciseService, private log: LogService, private auth: AuthService){}

  ngOnInit(): void {
    this.exerciseSvc.getAllExercises().subscribe(data => {
      this.exercises = data as Exercise[];
    });

    if (this.auth.CurrentUserId) {
      this.log.getWorkoutLogsByUserId(this.auth.CurrentUserId).subscribe(data => {
        this.workoutLogs = data as WorkoutLog[];
        this.calculateCalories();
      });

      this.log.getStepsLogByUserId(this.auth.CurrentUserId).subscribe(data => {
        this.stepsLogs = data as StepsLog[];
        this.calculateStepsAndDistance();
      });
    }
  }

  /**
   * Opens a new dialog to add workout log
   *
   * @memberof DashboardPageComponent
   */
  openAddWorkoutLogDialog() {
    const dialogRef = this.dialog.open(AddWorkoutLogDialogComponent, {
      data: {
        exercises: this.exercises,
      }
    });

    // Update stats
    dialogRef.afterClosed().subscribe(formData => {
      if (formData.calories) this.calories += parseInt(formData.calories);
      if (formData.steps) this.steps += parseInt(formData.calories);
      if (formData.distance) this.distance += parseFloat(formData.distance);
    });
  }

  /**
   * Calculates total calories by filtering the workout logs for entries added on the current date and sums the calories
   *
   * @memberof DashboardPageComponent
   */
  calculateCalories() {
    let currentDate = new Date(Date.now());
    this.workoutLogs.filter(log => extractDate(new Date(log.date ?? '01-01-2000')) == extractDate(currentDate)).forEach(log => {

      this.calories += log.calories;
    });
  }

  /**
   * Calculates total steps and distance by filtering the steps logs for entries added on the current date
   *
   * @memberof DashboardPageComponent
   */
  calculateStepsAndDistance() {
    let currentDate = new Date(Date.now());
    this.stepsLogs.filter(log => extractDate(new Date(log.date ?? '01-01-2000')) == extractDate(currentDate)).forEach(log => {

      this.steps += log.steps;
      this.distance += log.distance;
      this.calories += log.calories;
    });
  }
}
