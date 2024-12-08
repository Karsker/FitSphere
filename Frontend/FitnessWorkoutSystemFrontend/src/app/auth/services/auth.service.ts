import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { User } from '../../types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token?: string;
  private currentUserId?: string;
  private currentUserName?: string;
  private loginError!: Subject<string>;

  get isLoggedIn() {
    return this.loggedIn;
  }

  get CurrentUserName() {
    return this.currentUserName;
  }

  get CurrentUserId() {
    return this.currentUserId;
  }

  constructor(private apiService: ApiService, private router: Router) {
    const userData = localStorage.getItem('user');

    if (userData) {

      const user = JSON.parse(userData);
      this.token = user.token;
      this.apiService.setLoggedIn(true, this.token);
      this.loggedIn.next(true);

      this.currentUserId = user.userId;
      this.currentUserName = user.name;

      // console.log(this.currentUserName);
    }
  }



  /**
   * Regsiters a new user in the database
   *
   * @param {User} user - The user object containing user details
   * @return {*}  {Observable<any>} - Response of POST request to the server
   * @memberof AuthStateService
   */
  registerUser(user: User): Observable<any> {
    return this.apiService.request('POST', '/auth/register', JSON.stringify(user)).pipe();
  }

  /**
   * Logins a user with email and password 
   *
   * @param {string} email - The email address used to register the account
   * @param {string} password - The password used while registering the account
   * @return {Observable} - The response of the login request
   * @memberof AuthStateService
   */
  login(email: string, password: string): Observable<Object> {
    const creds = { 'email': email, 'password': password };
    return this.apiService.request('POST', '/auth/login', JSON.stringify(creds));
  }

  
/**
 * Save the user details returned from a sucessful login request
 *
 * @param {*} loginRes - The response of the login request
 * @memberof AuthService
 */
saveUserInfo(loginRes: any) {
    this.token = loginRes.token;
    this.loggedIn.next(true);
    this.apiService.setLoggedIn(true, loginRes.token);
    const userData = {
      token: loginRes.token,
      userId: loginRes.user.userId,
      name: loginRes.user.name,
    }

    // Update the state in service
    this.currentUserName = loginRes.user.name;
    this.currentUserId = loginRes.user.userId;

    // Save user details and token in local storage
    localStorage.setItem('user', JSON.stringify(userData));
    // console.log('Login successful');

  }

  /**
   * Logs out the current user by clearing local storage and resetting the user related values. Finally redirects to login page
   *
   * @memberof AuthService
   */
  logout() {
    localStorage.clear();
    this.currentUserId = undefined;
    this.currentUserName = undefined;
    this.token = undefined;
    this.loggedIn.next(false);
    this.apiService.setLoggedIn(false);
    window.location.reload();
    this.router.navigate(['/auth/login'], {replaceUrl: true});
  }
}
