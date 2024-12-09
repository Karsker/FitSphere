import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Exercise } from '../../../types';
import { ViewExerciseButtonComponent } from '../../../shared/components/view-exercise-button/view-exercise-button.component';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.scss'
})
export class ExerciseListComponent {
  exercisesList!: Exercise[]; // Array to store the exercises
  displayedColumns = ["name", "muscles", "equipment", "view"] // Columns displayed in the exercises table
  constructor(private api: ApiService) {

    // Fetch all the exercises from server and store in exercisesList array
    this.api.get("/exercise").subscribe(data => {this.exercisesList = data as Exercise[]});
  }

}
