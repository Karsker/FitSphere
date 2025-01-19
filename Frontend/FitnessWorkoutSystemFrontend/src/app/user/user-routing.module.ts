import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomePageComponent } from './pages/user-home-page/user-home-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { ExerciseDescPageComponent } from '../shared/components/exercise-desc-page/exercise-desc-page.component';
import { TrainersListPageComponent } from './pages/trainers-list-page/trainers-list-page.component';
import { premiumAccessGuard } from '../guards/premium-access.guard';
import { PremiumGatewayPageComponent } from './pages/premium-gateway-page/premium-gateway-page.component';
import { ComingSoonPageComponent } from '../shared/pages/coming-soon-page/coming-soon-page.component';
import { WorkoutPlanDescPageComponent } from '../shared/pages/workout-plan-desc-page/workout-plan-desc-page.component';
import { WorkoutPlansPageComponent } from './pages/workout-plans-page/workout-plans-page.component';
import { MealsListPageComponent } from '../shared/pages/meals-list-page/meals-list-page.component';
import { MealDescPageComponent } from '../shared/pages/meal-desc-page/meal-desc-page.component';
const routes: Routes = [
  {
    path: '',
    component: UserHomePageComponent,
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        component: DashboardPageComponent
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
        component: TrainersListPageComponent,
        canActivate: [premiumAccessGuard]
      },
      {
        path: 'premium',
        title: 'Premium',
        component: PremiumGatewayPageComponent
      },
      {
        path: 'nutritionist',
        title: 'Nutritionist',
        component: ComingSoonPageComponent,
        canActivate: [premiumAccessGuard]
      },
      {
        path: 'meals',
        title: 'Meals',
        component: MealsListPageComponent
      },
      {
        path: 'meal/:id',
        component: MealDescPageComponent
      },
      {
        path: 'meal-plans',
        title: 'Meal Plans',
        component: ComingSoonPageComponent,
        canActivate: [premiumAccessGuard]
      },
      {
        path: 'workout-plans/:id',
        title: 'Workout Plan',
        component: WorkoutPlanDescPageComponent
      },
      {
        path: 'workout-plans',
        title: 'Workout Plans',
        component: WorkoutPlansPageComponent,
        canActivate: [premiumAccessGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class UserRoutingModule { }