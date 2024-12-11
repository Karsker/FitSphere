import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrl: './admin-home-page.component.scss'
})
export class AdminHomePageComponent implements OnInit {

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

  }

  navItems = [
    {
      name: "Payments",
      selection: 1,
      link: "payments",
      icon: "assets/icons/navigation/payments.png"
    },
    {
      name: "Users",
      selection: 2,
      link: "users",
      icon: "assets/icons/navigation/users.png"
    },
  ];

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
