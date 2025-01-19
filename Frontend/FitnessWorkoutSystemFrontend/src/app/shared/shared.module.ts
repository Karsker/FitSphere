// This module only other modules needed by multiple modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExerciseDescPageComponent } from './components/exercise-desc-page/exercise-desc-page.component';
import { ViewExerciseButtonComponent } from './components/view-exercise-button/view-exercise-button.component';
import { ViewWorkoutPlanDialogComponent } from './components/dialogs/view-workout-plan-dialog/view-workout-plan-dialog.component';
import { WorkoutPlanDescPageComponent } from './pages/workout-plan-desc-page/workout-plan-desc-page.component';
import {MatMenuModule} from '@angular/material/menu';
import { ComingSoonPageComponent } from './pages/coming-soon-page/coming-soon-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MealsListPageComponent } from './pages/meals-list-page/meals-list-page.component';
import { MealDescPageComponent } from './pages/meal-desc-page/meal-desc-page.component';
import { ViewMealButtonComponent } from './components/view-meal-button/view-meal-button.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent,
    ExerciseDescPageComponent,
    ViewExerciseButtonComponent,
    ViewWorkoutPlanDialogComponent,
    WorkoutPlanDescPageComponent,
    ComingSoonPageComponent,
    MealsListPageComponent,
    MealDescPageComponent,
    ViewMealButtonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    MatSnackBarModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    SpinnerComponent,
    MatDialogModule,
    ReactiveFormsModule,
    NavbarComponent,
    ExerciseDescPageComponent,
    ViewExerciseButtonComponent,
    MatMenuModule,
    MatSnackBarModule
  ]

})
export class SharedModule { }
