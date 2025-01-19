import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { userAccessGuard } from './guards/user-access.guard';
import { trainerAccessGuard } from './guards/trainer-access.guard';
import { authGuard } from './guards/auth.guard';
import { adminAccessGuard } from './guards/admin-access.guard';

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
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [userAccessGuard],
  },
  {
    path: 'trainer/home',
    title: 'Home',
    loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule),
    canActivate: [trainerAccessGuard],
  },
  {
    path: 'admin/home',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    title: 'FitSphere | Admin Panel',
    canActivate: [adminAccessGuard],
  },
  {
    path: 'nutritionist/home',
    loadChildren: () => import('./nutritionist/nutritionist.module').then(m => m.NutritionistModule),
    title: 'Home'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
