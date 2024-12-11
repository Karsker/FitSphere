import { Component, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../../../../shared/services/message.service';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.scss'
})
export class NewMessageComponent {

  messageForm = new FormGroup({
    message: new FormControl<string>("", [Validators.required, Validators.minLength(1)]),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    trainerId: string,
    userId: string,
    trainerName: string,
    userName: string,
  }, private messageService: MessageService, private snackbar: MatSnackBar) {}


  /**
   * Submits the message data collected in the form to the server by calling the sendMessage function
   *
   * @memberof NewMessageComponent
   */
  onSubmit() {
    if (this.messageForm.valid && this.messageForm.value.message) {
      this.messageService.sendMessage(
        this.data.userId,
        this.data.userName,
        this.data.trainerId,
        this.data.trainerName,
        "Trainer",
        this.messageForm.value.message
      ).subscribe(res => {this.snackbar.open('Message sent', undefined, {duration: 3000})});
    }
  }
}
