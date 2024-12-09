import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../types';
import { Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit {

  mobileScreen!: boolean;
  constructor(private auth: AuthService, private router: Router) {}

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
    password: new FormControl<string>('', Validators.required),
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
    }
    this.auth.registerUser(newUser).subscribe(res => {
      if (res != 401 || res != 400) {
        this.router.navigateByUrl('/auth/login');
      }
    });
  }
}
