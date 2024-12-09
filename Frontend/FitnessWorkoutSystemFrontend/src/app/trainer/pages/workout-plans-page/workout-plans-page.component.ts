import { Component, OnInit } from '@angular/core';
import { User, WorkoutPlan } from '../../../types';
import { ApiService } from '../../../shared/services/api.service';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../auth/services/auth.service';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NewWorkoutDialogComponent } from '../../components/dialogs/new-workout-dialog/new-workout-dialog.component';
import { TrainerDataService } from '../../services/trainer-data.service';

@Component({
  selector: 'app-workout-plans-page',
  templateUrl: './workout-plans-page.component.html',
  styleUrl: './workout-plans-page.component.scss'
})
export class WorkoutPlansPageComponent implements OnInit {
  workoutPlans: WorkoutPlan[] = []; // Array to store the workout plans from server
  trainerId!: string; // userId of the trainer
  displayedColumns = ["PlanName", "Goal", "View"]; // Columns displayed in workout plans table
  constructor(private data: TrainerDataService, private auth: AuthService, private dialog: MatDialog){}


  ngOnInit(): void {
    this.trainerId = this.auth.CurrentUserId??"";

    // Fetch the data from server and store in workoutPlans array
    this.fetchData();
  }

  /**
   * Opens a new dialog to create a new workout plan
   *
   * @memberof WorkoutPlansPageComponent
   */
  openDialog() {
    const dialogRef = this.dialog.open(NewWorkoutDialogComponent, {
      data: {
        trainerId: this.trainerId,
        workoutPlans: this.workoutPlans
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.fetchData();
    });
  }

  /**
   * Fetches data of all workout plans for the current trainer and stores them in workoutPlans array
   *
   * @memberof WorkoutPlansPageComponent
   */
  fetchData() {
    this.data.getWorkoutPlans(this.trainerId).subscribe(res => {
      this.workoutPlans = res as WorkoutPlan[];
    })
  }

}
