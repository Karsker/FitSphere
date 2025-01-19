import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { Meal } from '../../../types';
import { fadeIn, fadeOut } from '../../../shared/animations';
import { ViewMealButtonComponent } from '../../components/view-meal-button/view-meal-button.component';
@Component({
  selector: 'app-meals-list-page',
  templateUrl: './meals-list-page.component.html',
  styleUrl: './meals-list-page.component.scss',
  animations: [fadeIn, fadeOut]
})
export class MealsListPageComponent implements OnInit {
  constructor(private mealSvc: MealsService) {}

  meals!: Meal[];
  displayedColumns = ['name', 'type', 'calories', 'view'];

  ngOnInit(): void {
    this.mealSvc.getAllMeals().subscribe(res => {
      this.meals = res as Meal[];
    });
  }

}
