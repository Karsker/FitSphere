import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, WorkoutPlan } from '../../../../types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-assign-workout-dialog',
  templateUrl: './assign-workout-dialog.component.html',
  styleUrl: './assign-workout-dialog.component.scss'
})
export class AssignWorkoutDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {clients: User[], workoutPlan: WorkoutPlan}, private userService: UserService){};

  assignForm = new FormGroup({
    clientId: new FormControl<string>("", Validators.required)
  });

  onSubmit() {
    if (this.assignForm.valid) {
      let clientId = this.assignForm.value.clientId;
      let workoutPlanId = this.data.workoutPlan.workoutPlanId;
      
      if (clientId) {
        let clientToAssign = this.data.clients.find(c => c.userId == clientId);

        if (clientToAssign && workoutPlanId) {
          clientToAssign.workoutPlans.push(workoutPlanId);

          this.userService.updateUser(clientId, clientToAssign).subscribe();
        }
      }
    }
  }
}
