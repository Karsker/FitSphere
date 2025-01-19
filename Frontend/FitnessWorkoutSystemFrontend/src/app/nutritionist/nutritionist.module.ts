import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionistHomePageComponent } from './pages/nutritionist-home-page/nutritionist-home-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { MealPlansPageComponent } from './pages/meal-plans-page/meal-plans-page.component';
import { SharedModule } from '../shared/shared.module';
import { NutritionistRoutingModule } from './nutritionist-routing.module';

@NgModule({
  declarations: [
    NutritionistHomePageComponent,
    ClientsPageComponent,
    MealPlansPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NutritionistRoutingModule
  ]
})
export class NutritionistModule { }
