import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TrainerHomePageComponent } from './pages/trainer-home-page/trainer-home-page.component';
import { WorkoutPlansPageComponent } from './pages/workout-plans-page/workout-plans-page.component';
import { NewWorkoutDialogComponent } from './components/dialogs/new-workout-dialog/new-workout-dialog.component';
import { ExercisesPageComponent } from './pages/exercises-page/exercises-page.component';
import { AddExerciseDialogComponent } from './components/dialogs/add-exercise-dialog/add-exercise-dialog.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';


@NgModule({
  declarations: [
    TrainerHomePageComponent,
    WorkoutPlansPageComponent,
    NewWorkoutDialogComponent,
    ExercisesPageComponent,
    AddExerciseDialogComponent,
    ClientsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TrainerModule { }
