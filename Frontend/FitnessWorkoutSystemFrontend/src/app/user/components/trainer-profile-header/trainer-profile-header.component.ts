import { Component, Input } from '@angular/core';
import { User } from '../../../types';
import { UserService } from '../../../shared/services/user.service';
@Component({
  selector: 'app-trainer-profile-header',
  templateUrl: './trainer-profile-header.component.html',
  styleUrl: './trainer-profile-header.component.scss'
})
export class TrainerProfileHeaderComponent {
  @Input() trainerInfo!:User; // Trainer info passed from the user home page

  constructor(private userSvc: UserService){}

  /**
   * Deregisters a trainer by removing his/her ID from the User object for the logged in user.
   *
   * @memberof TrainerProfileHeaderComponent
   */
  deregisterTrainer() {
    this.userSvc.CurrentUser.subscribe(user => {
      if (user) {
        user.trainerId = undefined;
        user.workoutPlans = [],
        this.userSvc.setCurrentUser(user);

        if (user.userId)
          this.userSvc.updateUser(user.userId, user).subscribe();
      }
    });
  }
}
