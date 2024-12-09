import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-user-profile-header',
  templateUrl: './user-profile-header.component.html',
  styleUrl: './user-profile-header.component.scss'
})
export class UserProfileHeaderComponent implements OnInit{
  userName?: string; // Currently logged in user's name

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.userName = this.auth.CurrentUserName;
  }

  
}
