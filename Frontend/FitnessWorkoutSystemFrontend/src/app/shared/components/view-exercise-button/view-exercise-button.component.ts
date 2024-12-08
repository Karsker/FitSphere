import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-exercise-button',
  templateUrl: './view-exercise-button.component.html',
  styleUrl: './view-exercise-button.component.scss'
})
export class ViewExerciseButtonComponent implements OnInit{
  @Input() exerciseId!:string;
  link!:string;

  ngOnInit(): void {
    this.link = "../exercise/" + this.exerciseId;
  }
  
}
