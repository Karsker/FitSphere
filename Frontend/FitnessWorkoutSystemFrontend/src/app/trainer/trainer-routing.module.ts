import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDashboardPageComponent } from './pages/client-dashboard-page/client-dashboard-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { WorkoutPlanDescPageComponent } from '../shared/pages/workout-plan-desc-page/workout-plan-desc-page.component';
import { WorkoutPlansPageComponent } from './pages/workout-plans-page/workout-plans-page.component';
import { ExerciseDescPageComponent } from '../shared/components/exercise-desc-page/exercise-desc-page.component';
import { ExercisesPageComponent } from './pages/exercises-page/exercises-page.component';
import { TrainerHomePageComponent } from './pages/trainer-home-page/trainer-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: TrainerHomePageComponent,
    children: [
      {
        path: 'clients/:id',
        title: 'Client',
        component: ClientDashboardPageComponent
      },
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }