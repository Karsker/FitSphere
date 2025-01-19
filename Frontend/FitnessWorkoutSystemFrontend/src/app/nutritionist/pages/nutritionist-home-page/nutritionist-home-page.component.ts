import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nutritionist-home-page',
  templateUrl: './nutritionist-home-page.component.html',
  styleUrl: './nutritionist-home-page.component.scss'
})
export class NutritionistHomePageComponent implements OnInit {
  mobileScreen!: boolean;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Check if the screen size is small (for mobile screen)
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

    this.router.navigate(['/nutritionist/home/clients']);
  }

  // Items shown on the sidebar with their links
  navItems = [
    {
      name: "Clients",
      selection: 1,
      link: "clients",
      icon: "assets/icons/navigation/supervisor.png"
    },
    {
      name: "Meals",
      selection: 2,
      link: "meals",
      icon: "assets/icons/navigation/meals.png"
    },
    {
      name: "Meal Plans",
      selection: 3,
      link: "meal-plans",
      icon: "assets/icons/navigation/plan.png"
    }
  ]

  /**
   * Logs out the currently logged in user by calling the logout function from auth service
   *
   * @memberof TrainerHomePageComponent
   */
  logout() {
    this.auth.logout();
    
  }
}
