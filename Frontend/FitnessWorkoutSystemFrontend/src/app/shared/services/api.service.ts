import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment';

const baseUrl =  environment.server;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private loggedIn = false;
  private token?: string;

  constructor(private http:HttpClient) { }

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  // Generic request method
  request(method: string, route: string, data?: any) {
    // GET method: call the custom get method
    if (method == 'GET') {
      return this.get(route, data);
    }

    // All other methods
    
    const header = (this.loggedIn) ? { 'Authorization': `Bearer ${this.token}`, 'content-type': 'application/json' } : {'Authorization': '', 'content-type': 'application/json'};

    return this.http.request(method, baseUrl + route, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: header
    }).pipe(catchError(this.handleError));


    
  }

  // Custom get method
  get(route: string, data?: any) {
    const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

    let params = new HttpParams();


    // Set the params from the data
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(baseUrl + route, {
      responseType: 'json',
      headers: header,
      params
    });
  }

  handleError(error: HttpErrorResponse) {
    return of(error.status);
  }

}
