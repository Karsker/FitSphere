import { Injectable } from '@angular/core';
import { User } from '../../types';
import { ApiService } from './api.service';
import { AuthService } from '../../auth/services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = new BehaviorSubject<User | null>(null); // Stores logged in user's details 

  constructor(private api: ApiService, private auth: AuthService) {
    
    // If the user is logged in, fetch the user from database
    this.auth.isLoggedIn.subscribe(val => {
      if (val == true && this.auth.CurrentUserId) {
        this.getUser(this.auth.CurrentUserId).subscribe(data => {
          this.currentUser.next(data as User);
        });
      }
    });
  }
  
  /**
   * Getter for current user
   *
   * @readonly
   * @memberof UserService
   */
  get CurrentUser() {
    return this.currentUser;
  }

  /**
   * Updates the value of the current user
   *
   * @param {User} user - The updated user object
   * @memberof UserService
   */
  setCurrentUser(user: User) {
    this.currentUser.next(user);
  }

  /**
   * Gets the user from the server using user id.
   *
   * @param {string} userId - Id of the user in the database
   * @return {*}  {Observable<Object>} - An observable that emits user data in JSON format
   * @memberof UserService
   */
  getUser(userId: string): Observable<Object> {
    return this.api.get(`/user/search/${userId}`);
  }

  /**
   * Gets all the users from the server that have the role 'Trainer'
   *
   * @return {*}  {Observable<Object>} - An observable that emits list of User objects
   * @memberof UserService
   */
  getAllTrainers(): Observable<Object> {
    return this.api.get('/user/filterByRole/trainer');
  }

  /**
   * Gets all users from the server that have the passed trainerId as the value of trainerId property
   *
   * @param {string} trainerId - userId property of the trainer
   * @return {*}  {Observable<Object>} - Observable that emits the users fetched from the server
   * @memberof UserService
   */
  getUsersByTrainer(trainerId: string): Observable<Object> {
    return this.api.get(`/user/filterByTrainer/${trainerId}`);
  }

  /**
   * Updates a single user's data
   *
   * @param {string} userId - The userId property of the user
   * @param {User} userData - The updated user object
   * @return {*} - Observable that emits the response of the PUT request
   * @memberof UserService
   */
  updateUser(userId: string, userData: User): Observable<Object> {
    return this.api.request('PUT', `/user/${userId}`, JSON.stringify(userData));
  }

}
