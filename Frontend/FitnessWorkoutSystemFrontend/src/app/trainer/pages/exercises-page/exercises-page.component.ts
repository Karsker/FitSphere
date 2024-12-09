import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../types';
import { TrainerDataService } from '../../services/trainer-data.service';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ViewExerciseButtonComponent } from '../../../shared/components/view-exercise-button/view-exercise-button.component';
import { AddExerciseDialogComponent } from '../../components/dialogs/add-exercise-dialog/add-exercise-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrl: './exercises-page.component.scss'
})
export class ExercisesPageComponent implements OnInit {

  userId!: string; // userId of logged in user
  exercisesList!: Exercise[]; // Array to store all exercises
  displayedColumns = ["name", "muscles", "equipment", "view", "add-to-plan"]; // Columns displayed in the exercises table

  constructor(private data: TrainerDataService, private auth: AuthService, private dialog: MatDialog){}

  ngOnInit(): void {
    // Get the currently logged in userId from auth service
    this.userId = this.auth.CurrentUserId ?? "Unknown";

    // Fetch all exercises from server and store in exercisesList array
    this.data.getAllExercises().subscribe(data => {
      this.exercisesList = data as Exercise[];
    });
  }

  /**
   * Opens a new dialog to add the calling exercise to a workout
   *
   * @param {string} exerciseId - The exerciseId property of the calling exercise
   * @param {string} exerciseName - The exerciseName property of the calling exercise
   * @memberof ExercisesPageComponent
   */
  openDialog(exerciseId: string, exerciseName: string) {
    const dialogRef = this.dialog.open(AddExerciseDialogComponent, {
      data: {
        trainerId: this.userId,
        exerciseId,
        exerciseName
      }
    });

  }

}
