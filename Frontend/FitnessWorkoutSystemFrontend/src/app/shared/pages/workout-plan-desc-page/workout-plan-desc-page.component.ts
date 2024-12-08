import { Component, OnInit } from '@angular/core';
import { WorkoutPlan } from '../../../types';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ViewExerciseButtonComponent } from '../../components/view-exercise-button/view-exercise-button.component';

@Component({
  selector: 'app-workout-plan-desc-page',
  templateUrl: './workout-plan-desc-page.component.html',
  styleUrl: './workout-plan-desc-page.component.scss'
})
export class WorkoutPlanDescPageComponent implements OnInit {

  workoutPlanId!: string;
  workoutPlan!: WorkoutPlan;
  loading: boolean = false;

  displayedColumns = ["name", "reps", "sets", "view"]

  constructor(private api: ApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.workoutPlanId = this.route.snapshot.paramMap.get('id') ?? "";

    this.getPlan().subscribe(res => {
      this.workoutPlan = res as WorkoutPlan;
      this.loading = false;
    });
  }

  getPlan(): Observable<Object> {
    return this.api.get(`/workoutPlan/search/${this.workoutPlanId}`);
  }
}
