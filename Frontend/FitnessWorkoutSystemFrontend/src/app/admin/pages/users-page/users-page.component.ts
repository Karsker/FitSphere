import { Component, OnInit } from '@angular/core';
import { User } from '../../../types';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit{
  users: User[] = []; // Array to store the users fetched from the server
    displayedColumns = ['userId', 'userName', 'role', 'age', 'delete']; // Columns to display in the payments table
    constructor(private userSvc: UserService){}
  
    ngOnInit(): void {
      this.userSvc.getAllUsers().subscribe(data => {
        this.users = data as User[];
      });
    }

    onClickDelete(userId: string): void {
      this.userSvc.deleteUser(userId).subscribe(res => {
        this.users = this.users.filter(u => u.userId != userId);
      });
    }
}
