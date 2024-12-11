import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomePageComponent,
    children: [
      {
        path: 'payments',
        component: PaymentsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }