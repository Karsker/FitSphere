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
  workoutPlans: WorkoutPlan[] = [];
  trainerId!: string;
  displayedColumns = ["PlanName", "Goal", "View"];
  constructor(private data: TrainerDataService, private auth: AuthService, private dialog: MatDialog){}


  ngOnInit(): void {
    this.trainerId = this.auth.CurrentUserId??"";
    this.fetchData();
  }

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

  fetchData() {
    this.data.getWorkoutPlans(this.trainerId).subscribe(res => {
      this.workoutPlans = res as WorkoutPlan[];
    })
  }

}
