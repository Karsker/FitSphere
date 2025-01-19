import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private api: ApiService) { }

  /**
   * Fetches all meals from the server
   *
   * @return {*}  {Observable<Object>}
   * @memberof MealsService
   */
  getAllMeals():Observable<Object> {
    return this.api.get('/meals');
  }

  getMealById(mealId: string) {
    return this.api.get(`/meals/search/${mealId}`);
  }
}
