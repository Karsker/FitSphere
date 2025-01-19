import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-meal-button',
  templateUrl: './view-meal-button.component.html',
  styleUrl: './view-meal-button.component.scss'
})
export class ViewMealButtonComponent {
  @Input() mealId!: string;
  link!: string;

  ngOnInit(): void {
    this.link = "../meal/" + this.mealId;
  }
}
