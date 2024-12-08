import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';
import { WorkoutPlan } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class TrainerDataService {

  constructor(private api: ApiService) {}


  getWorkoutPlans(trainerId: string): Observable<Object> {
    return this.api.get(`/workoutPlan/${trainerId}`);
  }

  getAllExercises(): Observable<Object> {
    return this.api.get('/exercise');
  }

  updateWorkoutPlan(planId: string, workoutplan: WorkoutPlan) {
    return this.api.request('PUT', `/workoutPlan/${planId}`, JSON.stringify(workoutplan));
  }

}
