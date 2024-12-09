import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutPlansService {

  constructor(private api: ApiService) { }

  /**
   * Fetches the WorkoutPlan object associated with selected workout plan ID
   *
   * @return {*}  {Observable<Object>} - Observable that emits the workout plan fetched from the server
   * @memberof WorkoutPlanDescPageComponent
   */
  getPlan(workoutPlanId: string): Observable<Object> {
    return this.api.get(`/workoutPlan/search/${workoutPlanId}`);
  }
}
