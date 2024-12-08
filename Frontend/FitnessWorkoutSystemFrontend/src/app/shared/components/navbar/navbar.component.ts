import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  
  currentUserName!: string;
  mobileScreen!: boolean;
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUserName = this.auth.CurrentUserName??"";

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

  emitToggleSidebar() {
    this.toggleSidebar.emit();
  }

  logout() {
    this.auth.logout();
  }

}
