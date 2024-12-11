import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { User } from '../../../types';
import { Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { fadeIn, fadeOut } from '../../../shared/animations';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  animations: [fadeIn, fadeOut]
})
export class RegisterPageComponent implements OnInit {

  registerError: Subject<string> = new Subject<string>(); // Placeholder for registration errors
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // Loading state
  mobileScreen!: boolean;
  constructor(private auth: AuthService, private router: Router, private snackbar: MatSnackBar) {}

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

  registerForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    age: new FormControl<number | undefined>(undefined, [Validators.required, Validators.min(18), Validators.max(100)]),
    gender: new FormControl<string>('', Validators.required),
    role: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', [Validators.required, this.createPasswordStrengthValidator()]),
    weight: new FormControl<number | undefined>(undefined, [Validators.min(30), Validators.max(300)]),
    height: new FormControl<number | undefined>(undefined, [Validators.min(130), Validators.max(220)]),
    goal: new FormControl<string>(''),
  });

  /**
   * Creates a new user object from the form entries and calls the regsiterUser() function to register a new user
   *
   * @return {*} 
   * @memberof RegisterPageComponent
   */
  async onSubmit() {
    
    if (this.registerForm.invalid) {
      return;
    }

    this.setLoading(true);

    // Null coalescing is done since all fields are nullable; the fields themselves are required
    let newUser: User = {
      name: this.registerForm.value.name ?? "Unknown",
      email: this.registerForm.value.email ?? "Unknown",
      age: this.registerForm.value.age ?? 0,
      role: this.registerForm.value.role ?? "Unknown",
      gender: this.registerForm.value.gender ?? "Unknown",
      password: this.registerForm.value.password ?? "Unknown",
      weight: this.registerForm.value.weight ?? undefined,
      height: this.registerForm.value.height ?? undefined,
      goal: this.registerForm.value.goal ?? undefined,
      workoutPlans: [],
      hasPremium: false
    }
    this.auth.registerUser(newUser).subscribe(res => {
      if (res == 409) {
        this.setRegsiterError('The email is already associated with a user');
      }
      if (res != 409 && res != 401 && res != 400) {
        this.snackbar.open('Registered successfully', undefined, {duration: 3000});
        this.router.navigateByUrl('/auth/login');
      }

      this.setLoading(false);
    });
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
   * Sets the value of registration error
   *
   * @param {string} error - New value of error
   * @memberof LoginPageComponent
   */
  setRegsiterError(error: string) {
    this.registerError.next(error);
  }

  /**
   * Tests a password value for strength. The following parameters are checked:
   * - At least one upper case character
   * - At least one lower case character
   * - At least one number
   * - At least one special character
   * - Minimum 6 characters length
   * @returns 
   */
  createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const hasSpecialChar = /[@$#!%*?&]+/.test(value);

        const hasMinLength = value.length >= 6;

        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && hasMinLength;

        return !passwordValid ? {passwordStrength:true}: null;
    }
}
}
