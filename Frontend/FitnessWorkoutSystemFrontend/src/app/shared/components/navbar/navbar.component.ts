import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  
  currentUserName!: string; // User name of the logged in user
  mobileScreen!: boolean; // Whether the screen is small (mobile device)

  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>(); // Event emitted when sidebar toggle is clicked

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUserName = this.auth.CurrentUserName??"";

    // Check current window size 
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
   * Emits an event from the toggleSidebar emitter
   *
   * @memberof NavbarComponent
   */
  emitToggleSidebar() {
    this.toggleSidebar.emit();
  }

  /**
   * Logs out the current user by calling the logout function from auth service
   *
   * @memberof NavbarComponent
   */
  logout() {
    this.auth.logout();
  }

}
