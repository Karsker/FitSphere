import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../../shared/services/message.service';
import { Message } from '../../../types';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../dialogs/message-dialog/message-dialog.component';
import { NewMessageComponent } from '../dialogs/new-message/new-message.component';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-trainer-messages',
  templateUrl: './trainer-messages.component.html',
  styleUrl: './trainer-messages.component.scss'
})
export class TrainerMessagesComponent implements OnInit {

  @Input() trainerId!: string; // userId of the trainer
  @Input() userId!: string; // userId of the logged in user
  @Input() trainerName!: string; // Name of the trainer
  @Input() userName!: string; // Name of the logged in user

  messages: Message[] = []; // Array to store messages between trainer and user
  displayedColumns = ["From", "To", "Date", "View"]; // Columns to be displayed in the messages table
  
  constructor(private messageService: MessageService, private dialog: MatDialog, private auth: AuthService) { }

  ngOnInit(): void {

    // Get all the messages between the trainer and user
    if (this.auth.CurrentUserId)
    this.messageService.getAllMessages(this.trainerId, this.auth.CurrentUserId).subscribe(data => {
      this.messages = data as Message[];
    });
  }

  /**
   * Opens a new dialog to view a message
   *
   * @param {Message} message - The message object
   * @memberof TrainerMessagesComponent
   */
  viewMessage(message: Message) {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      data: {
        from: message.fromId == this.userId ? "You" : message.fromName,
        to: message.toId == this.userId ? "You" : message.toName,
        date: message.date,
        message: message.content
      }
    });
  }

  /**
   * Opens a new dialog with a form to send a new message to the trainer
   *
   * @memberof TrainerMessagesComponent
   */
  newMessage() {
    const dialogRef = this.dialog.open(NewMessageComponent, {
      data: {
        trainerId: this.trainerId,
        userId: this.userId,
        trainerName: this.trainerName,
        userName: this.userName,
      }
    });
  }



}
