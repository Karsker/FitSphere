import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TrainerHomePageComponent } from './pages/trainer-home-page/trainer-home-page.component';
import { WorkoutPlansPageComponent } from './pages/workout-plans-page/workout-plans-page.component';
import { NewWorkoutDialogComponent } from './components/dialogs/new-workout-dialog/new-workout-dialog.component';
import { ExercisesPageComponent } from './pages/exercises-page/exercises-page.component';
import { AddExerciseDialogComponent } from './components/dialogs/add-exercise-dialog/add-exercise-dialog.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { AssignWorkoutDialogComponent } from './components/dialogs/assign-workout-dialog/assign-workout-dialog.component';
import { ClientDashboardPageComponent } from './pages/client-dashboard-page/client-dashboard-page.component';
import { TrainerRoutingModule } from './trainer-routing.module';
import { MessageDialogComponent } from './components/dialogs/message-dialog/message-dialog.component';
import { NewMessageComponent } from './components/dialogs/new-message/new-message.component';

@NgModule({
  declarations: [
    TrainerHomePageComponent,
    WorkoutPlansPageComponent,
    NewWorkoutDialogComponent,
    ExercisesPageComponent,
    AddExerciseDialogComponent,
    ClientsPageComponent,
    AssignWorkoutDialogComponent,
    ClientDashboardPageComponent,
    MessageDialogComponent,
    NewMessageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TrainerRoutingModule
  ]
})
export class TrainerModule { }
