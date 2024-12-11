import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from '../../auth/services/auth.service';
import { WorkoutLog } from '../../types';
import { Observable } from 'rxjs';
import { StepsLog } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private api: ApiService, private auth: AuthService) { }

  /**
   * Adds a workout log for the logged in user
   *
   * @param {string} exerciseName - Name of the exercise
   * @param {number} reps - Repetitions performed
   * @param {number} sets - Sets performed
   * @param {number} calories - Calories burned
   * @return {*}  {Observable<Object>} - An observable that emits the response of the request
   * @memberof LogService
   */
  addWorkoutLog(exerciseName: string, reps: number, sets: number, calories: number): Observable<Object> {

    let newWorkoutLog: WorkoutLog = {
      exerciseName,
      reps,
      sets,
      calories,
      userId: this.auth.CurrentUserId ?? "Unknown"
    };

    return this.api.request('POST', '/WorkoutLog', JSON.stringify(newWorkoutLog));
  }

  /**
   * Fetches all workout logs for a user
   *
   * @param {string} userId - The userId property of the user
   * @return {*}  {Observable<Object>} - An observable that emits response of the request (array of WorkoutLog objects if successful)
   * @memberof LogService
   */
  getWorkoutLogsByUserId(userId: string): Observable<Object> {
    return this.api.get(`/WorkoutLog/${userId}`);
  }

  /**
   * Adds a log for steps count
   *
   * @param {StepsLog} stepsLog - Data of the log
   * @return {*} 
   * @memberof LogService
   */
  addStepsLog(steps: number, distance: number, calories: number): Observable<Object> {
    let newStepsLog: StepsLog = {
      steps,
      distance,
      calories,
      userId: this.auth.CurrentUserId ?? "Unknown"
    };
    return this.api.request('POST', '/StepsLog', JSON.stringify(newStepsLog));
  }
 
  /**
   * Fetches all the steps log for a user
   *
   * @param {string} userId - The userId property of the user
   * @return {*}  {Observable<Object>}
   * @memberof LogService
   */
  getStepsLogByUserId(userId: string): Observable<Object> {
    
    return this.api.get(`/StepsLog/${userId}`);
  }

}
