import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminHomePageComponent,
    PaymentsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
