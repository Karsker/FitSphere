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

  private loggedIn = false; // Whether the user is logged in
  private token?: string; // JWT token for the logged in user

  constructor(private http:HttpClient) { }

  /**
   * Sets the JWT token for the logged in user and sets the loggedIn state
   *
   * @param {boolean} loggedIn - Updated loggedin state
   * @param {string} [token] - JWT token of the logged in user
   * @memberof ApiService
   */
  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  /**
   * A wrapper fuction for HTTP requests with that automatically adds JWT Bearer token if the user is logged in
   *
   * @param {string} method - The HTTP method
   * @param {string} route - The request URL
   * @param {*} [data] - Paylaod to be sent with request (JSON)
   * @return {*}  - Returns an observable that emits the response of the request 
   * @memberof ApiService
   */
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

  /**
   * A wrapper function for the default HTTP get function that adds JWT Bearer token and adds any query params passed
   *
   * @param {string} route - The request URL
   * @param {*} [data] - Optional query params
   * @return {*} - Observable that emits request response
   * @memberof ApiService
   */
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

  /**
   * Handles any errors occured in the observables returned by HTTP requests.
   *
   * @param {HttpErrorResponse} error - The error object thrown by an observable
   * @return {*} - Observale that emits the error status code
   * @memberof ApiService
   */
  handleError(error: HttpErrorResponse) {
    return of(error.status);
  }

}
