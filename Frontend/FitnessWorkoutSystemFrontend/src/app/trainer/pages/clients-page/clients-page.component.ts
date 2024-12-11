import { Component, OnInit } from '@angular/core';
import { User } from '../../../types';
import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../auth/services/auth.service';
import { fadeIn, fadeOut } from '../../../shared/animations';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss',
  animations: [fadeIn, fadeOut]
})
export class ClientsPageComponent implements OnInit {

  trainerId?: string; // userId of the logged in trainer
  clients: User[] = []; // Stores the User objects for clients associated with the trainer

  displayedColumns = ["Name", "Age", "Goal", "View"]; // Columns displayed in the clients table

  constructor(private userService: UserService, private auth: AuthService){}

  ngOnInit(): void {
    this.trainerId = this.auth.CurrentUserId;
    
    if (this.trainerId) {
      this.userService.getUsersByTrainer(this.trainerId).subscribe(data => {
        this.clients = data as User[];
      });
    }
    
  }

}
