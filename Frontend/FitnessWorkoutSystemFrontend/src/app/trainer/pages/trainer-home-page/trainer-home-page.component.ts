import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { AuthService } from '../../../auth/services/auth.service';
import { NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trainer-home-page',
  templateUrl: './trainer-home-page.component.html',
  styleUrl: './trainer-home-page.component.scss'
})
export class TrainerHomePageComponent {
  mobileScreen!: boolean;
  constructor(private auth: AuthService, private router: Router){}

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

    this.router.navigate(['/trainer/home/workout-plans']);
  }

  navItems = [
    {
      name: "Clients",
      selection: 1,
      link: "clients",
      icon: "assets/icons/navigation/supervisor.png"
    },
    {
      name: "Exercises",
      selection: 2,
      link: "exercises",
      icon: "assets/icons/navigation/exercise.png"
    },
    {
      name: "Workout Plans",
      selection: 3,
      link: "workout-plans",
      icon: "assets/icons/navigation/plan.png"
    }
  ]


  logout() {
    this.auth.logout();
    
  }
}