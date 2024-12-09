import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';
import { WorkoutPlan } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class TrainerDataService {

  constructor(private api: ApiService) {}


  /**
   * Fetches all workout plans for a given trainer
   *
   * @param {string} trainerId - The userId property of the trainer
   * @return {*}  {Observable<Object>} - An observable with array of WorkoutPlan objects
   * @memberof TrainerDataService 
   */
  getWorkoutPlans(trainerId: string): Observable<Object> {
    return this.api.get(`/workoutPlan/${trainerId}`);
  }

  /**
   * Fetches all the exercises from server
   *
   * @return {*}  {Observable<Object>} - An observable with array of Exercise objects
   * @memberof TrainerDataService
   */
  getAllExercises(): Observable<Object> {
    return this.api.get('/exercise');
  }

  /**
   * Updates a single workout plan in the server
   *
   * @param {string} planId - workoutPlanId property of the workout plan
   * @param {WorkoutPlan} workoutplan - The updated WorkoutPlan object
   * @return {*} - An observable with the response of the HTTP request to server
   * @memberof TrainerDataService
   */
  updateWorkoutPlan(planId: string, workoutplan: WorkoutPlan) {
    return this.api.request('PUT', `/workoutPlan/${planId}`, JSON.stringify(workoutplan));
  }

}
