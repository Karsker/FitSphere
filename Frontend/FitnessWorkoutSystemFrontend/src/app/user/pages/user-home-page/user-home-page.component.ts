import { Component, OnInit } from '@angular/core';
import { UserProfileHeaderComponent } from '../../components/user-profile-header/user-profile-header.component';
import { ExerciseListComponent } from '../../components/exercise-list/exercise-list.component';
import { NgIf, NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrl: './user-home-page.component.scss'
})
export class UserHomePageComponent implements OnInit {
  currentSelection: number = 1;
  mobileScreen!: boolean;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {

    // Check if the screen size is small (for mobile devices)
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

    this.router.navigate(['/user/home/dashboard']);

  }

  navItems = [
    {
      name: "Dashboard",
      selection: 1,
      link: "dashboard",
      icon: "assets/icons/navigation/home.png"
    },
    {
      name: "Trainer",
      selection: 2,
      link: "trainer",
      icon: "assets/icons/navigation/supervisor.png"
    },
    {
      name: "Nutritionist",
      selection: 3,
      link: "nutritionist",
      icon: "assets/icons/navigation/supervisor.png"
    },
    {
      name: "Exercises",
      selection: 4,
      link: "exercises",
      icon: "assets/icons/navigation/exercise.png"
    },
    {
      name: "Meals",
      selection: 5,
      link: "meals",
      icon: "assets/icons/navigation/meals.png"
    },
    {
      name: "Meal Plans",
      selection: 6,
      link: "meal-plans",
      icon: "assets/icons/navigation/plan.png"
    },
    {
      name: "Workout Plans",
      selection: 7,
      link: "workout-plans",
      icon: "assets/icons/navigation/plan.png"
    }
  ]

  /**
   * Sets the currently selected option in the sidebar
   *
   * @param {number} selection
   * @memberof UserHomePageComponent
   */
  setCurrentSelection(selection: number) {
    this.currentSelection = selection;
  }

  /**
   * Logs out current user by calling the logout() function from the Auth service
   *
   * @memberof UserHomePageComponent
   */
  logout() {
    this.auth.logout();
    
  }

}
