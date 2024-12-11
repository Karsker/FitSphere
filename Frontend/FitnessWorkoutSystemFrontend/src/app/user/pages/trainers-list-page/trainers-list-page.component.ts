import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../../types';
import { ApiService } from '../../../shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ChooseTrainerDialogComponent } from '../../components/dialogs/choose-trainer-dialog/choose-trainer-dialog.component';
import { AuthService } from '../../../auth/services/auth.service';
import { UserService } from '../../../shared/services/user.service';
import { NgIf } from '@angular/common';
import { TrainerProfileHeaderComponent } from '../../components/trainer-profile-header/trainer-profile-header.component';
import { TrainerMessagesComponent } from '../../components/trainer-messages/trainer-messages.component';
import { fadeIn, fadeOut } from '../../../shared/animations';

@Component({
  selector: 'app-trainers-list-page',
  templateUrl: './trainers-list-page.component.html',
  styleUrl: './trainers-list-page.component.scss',
  animations: [fadeIn, fadeOut]
})

export class TrainersListPageComponent implements OnInit {

  currentUser!:User; // Current user details fetched from server
  trainer?:User // Details of trainer assigned to current user
  trainersList: User[] = []; // List of users that have 'Trainer' role fetched from server
  loading: boolean = false; // If the data is still being fetched
  displayedColumns = ["name", "email", "age", "gender", "choose"]; // Columns displayed in trainers table (required for Material table)
  readonly dialog = inject(MatDialog); // Reference for material dialog component

  constructor(private api: ApiService, private auth: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.setLoading(true);
    this.userService.CurrentUser.subscribe(data => {
      this.currentUser = data as User;

      // If user does not have a trainer (trainerId propoerty is null, fetch the trainers data)
      if (this.currentUser.trainerId == null) {
        this.userService.getAllTrainers().subscribe(data => {
          this.trainersList = data as User[];
          this.setLoading(false);
        });
      } else {
        this.userService.getUser(this.currentUser.trainerId).subscribe(data => {
          this.trainer = data as User;
          this.setLoading(false);
        });
      }
    });

  }


  /**
   * Updates the loading state
   *
   * @param {boolean} state
   * @memberof TrainersListPageComponent
   */
  setLoading(state: boolean) {
    this.loading = state;
  }

  /**
   * Opens a dialog box to confirm choosing the trainer
   *
   * @param {string} trainerName - The name of the trainer passed from the trainers table 
   * @memberof TrainersListPageComponent
   */
  openDialog(trainer: User) {
    const dialogRef = this.dialog.open(ChooseTrainerDialogComponent, {
      data: {
        trainerName: trainer.name
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res == true) {
        this.loading = true;
        this.confirmTrainer(trainer);
      }
    });
  }


  /**
   * Updates the trainerId in the user document for the current user
   *
   * @param {string} trainerId - Id of the trainer chosen by the user
   * @memberof TrainersListPageComponent
   */
  confirmTrainer(trainer: User) {
    // Fetch the user from the server and update trainerId
    const userId = this.auth.CurrentUserId;
    let userData!:User;
    this.api.get(`/user/search/${userId}`).subscribe(res => {
      userData = res as User;
      userData.trainerId = trainer.userId;
      this.api.request('PUT', `/user/${userId}`, JSON.stringify(userData)).subscribe(res => {
        
        // Update the user data in service
        this.userService.setCurrentUser(this.currentUser);
        this.currentUser.trainerId = trainer.userId;
        this.trainer = trainer;
        this.setLoading(false);
      });
    });

  }

}
