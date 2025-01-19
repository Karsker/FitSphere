import { Component } from '@angular/core';
import { Meal } from '../../../types';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fadeIn, fadeOut } from '../../animations';

@Component({
  selector: 'app-meal-desc-page',
  templateUrl: './meal-desc-page.component.html',
  styleUrl: './meal-desc-page.component.scss',
  animations: [fadeIn, fadeOut]
})
export class MealDescPageComponent {
  meal!: Meal;

  constructor(private mealSvc: MealsService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');

    if (idFromRoute) {
      this.mealSvc.getMealById(idFromRoute).subscribe(data => {
        this.meal = data as Meal;
        
        this.meal.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.meal.videoLink) as string;
      }
      );


    }
  }
}
