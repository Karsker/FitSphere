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

  userId!: string;
  exercisesList!: Exercise[];
  displayedColumns = ["name", "muscles", "equipment", "view", "add-to-plan"];

  constructor(private data: TrainerDataService, private auth: AuthService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.userId = this.auth.CurrentUserId ?? "Unknown";
    this.data.getAllExercises().subscribe(data => {
      this.exercisesList = data as Exercise[];
    });
  }

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
