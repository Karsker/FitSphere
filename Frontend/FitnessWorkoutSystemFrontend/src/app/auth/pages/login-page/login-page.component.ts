import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Location } from '@angular/common';
import { fadeIn, fadeOut } from '../../../shared/animations';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  animations: [fadeIn, fadeOut]
})
export class LoginPageComponent implements OnInit {

  loginError: Subject<string> = new Subject<string>(); // Placeholder for login errors
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // Loading state
  mobileScreen!: boolean;

  constructor(private apiService: ApiService, private auth: AuthService, private router: Router, private location: Location, private snackbar: MatSnackBar) {}


  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required])
  });

  ngOnInit(): void {
    if (window.screen.width < 768) {
      this.mobileScreen = true;
    } else {
      this.mobileScreen = false;
    }
    window.addEventListener("resize",() => {
      if (window.screen.width < 768) {
        this.mobileScreen = true;
      } else {
        this.mobileScreen = false;
      }
    } 
    ); 
  }


  /**
   * Logs in a user by calling the login() function from the AuthService service
   *
   * @memberof LoginPageComponent
   */
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.value.email && this.loginForm.value.password) {
      this.setLoading(true);
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res: any) => {
        this.setLoading(false);
        // Login was successful
        if (res.token != undefined && res.user != undefined) {
          this.auth.saveUserInfo(res);
          this.snackbar.open(`Login successful`, undefined, {duration: 3000});
          // Reload the page to refresh URL
          window.location.reload();
          // Redirect the user to home page based on their role
          if (res.user.role == 'User') {
            this.router.navigateByUrl('/user/home/dashboard', {replaceUrl: true});
          } else if (res.user.role == 'Trainer') {
            this.router.navigateByUrl('/trainer/home/workout-plans', {replaceUrl: true});
          } else if (res.user.role == 'Admin') {
            this.router.navigateByUrl('/admin/home', {replaceUrl: true});
          }

        }
        
        // An error occured
        if (res ==  401) {
          this.setLoginError("Invalid password");
        }
        if (res == 404) {
          this.setLoginError("User not found");
        }
        setTimeout(() => this.loginError.next(""), 3000);
      });
    }
  }

  /**
   * Sets the loading state
   *
   * @param {boolean} state - The new value of state
   * @memberof LoginPageComponent
   */
  setLoading(state: boolean) {
    this.loading.next(state);
  }

  /**
   * Sets the value of login error
   *
   * @param {string} error - New value of error
   * @memberof LoginPageComponent
   */
  setLoginError(error: string) {
    this.loginError.next(error);
  }

}
