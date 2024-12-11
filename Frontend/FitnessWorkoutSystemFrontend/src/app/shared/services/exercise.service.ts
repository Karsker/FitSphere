import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private api: ApiService) { }

  /**
   * Fetches all the exercises from the server
   *
   * @return {*}  {Observable<Object>}
   * @memberof ExerciseService
   */
  getAllExercises(): Observable<Object> {
    return this.api.get("/exercise");
  }
}
