import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { UserHomePageComponent } from './user/pages/user-home-page/user-home-page.component';
import { ExerciseDescPageComponent } from './shared/components/exercise-desc-page/exercise-desc-page.component';
import { UserProfileHeaderComponent } from './user/components/user-profile-header/user-profile-header.component';
import { ExerciseListComponent } from './user/components/exercise-list/exercise-list.component';
import { TrainersListPageComponent } from './user/pages/trainers-list-page/trainers-list-page.component';
import { userAccessGuard } from './guards/user-access.guard';
import { TrainerHomePageComponent } from './trainer/pages/trainer-home-page/trainer-home-page.component';
import { trainerAccessGuard } from './guards/trainer-access.guard';
import { WorkoutPlansPageComponent } from './trainer/pages/workout-plans-page/workout-plans-page.component';
import { ExercisesPageComponent } from './trainer/pages/exercises-page/exercises-page.component';
import { WorkoutPlanDescPageComponent } from './shared/pages/workout-plan-desc-page/workout-plan-desc-page.component';
import { ComingSoonPageComponent } from './shared/pages/coming-soon-page/coming-soon-page.component';
import { authGuard } from './guards/auth.guard';
import { ClientsPageComponent } from './trainer/pages/clients-page/clients-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user/home',
  },
  {
    path: 'auth/register',
    title: 'FitSphere | Register',
    component: RegisterPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'auth/login',
    title: 'FitSphere | Login', 
    component: LoginPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'user/home',
    title: 'Home',
    component: UserHomePageComponent,
    canActivate: [userAccessGuard],
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        component: UserProfileHeaderComponent
      },
      {
        path: 'exercises',
        title: 'Exercises',
        component: ExerciseListComponent
      },
      {
        path: 'exercise/:id',
        component: ExerciseDescPageComponent
      },
      {
        path: 'trainer',
        title: 'Trainer',
        component: TrainersListPageComponent
      },
      {
        path: 'nutritionist',
        title: 'Nutritionist',
        component: ComingSoonPageComponent
      },
      {
        path: 'meals',
        title: 'Meals',
        component: ComingSoonPageComponent
      },
      {
        path: 'meal-plans',
        title: 'Meal Plans',
        component: ComingSoonPageComponent
      },
      {
        path: 'workout-plans',
        title: 'Workout Plans',
        component: ComingSoonPageComponent
      }
    ]
  },
  {
    path: 'trainer/home',
    title: 'Home',
    component: TrainerHomePageComponent,
    canActivate: [trainerAccessGuard],
    children: [
      {
        path: 'clients',
        title: 'Clients',
        component: ClientsPageComponent
      },
      {
        path: 'workout-plans/:id',
        title: 'Workout Plan',
        component: WorkoutPlanDescPageComponent
      },
      {
        path: 'workout-plans',
        title: 'Workout Plans',
        component: WorkoutPlansPageComponent
      },
      {
        path: 'exercise/:id',
        component: ExerciseDescPageComponent
      },
      {
        path: 'exercises',
        component: ExercisesPageComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
