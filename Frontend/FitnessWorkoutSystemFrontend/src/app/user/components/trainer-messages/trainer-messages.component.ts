import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../../shared/services/message.service';
import { Message } from '../../../types';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../dialogs/message-dialog/message-dialog.component';
import { NewMessageComponent } from '../dialogs/new-message/new-message.component';

@Component({
  selector: 'app-trainer-messages',
  templateUrl: './trainer-messages.component.html',
  styleUrl: './trainer-messages.component.scss'
})
export class TrainerMessagesComponent implements OnInit {

  @Input() trainerId!: string;
  @Input() userId!: string;
  @Input() trainerName!: string;
  @Input() userName!: string;

  messages: Message[] = [];
  displayedColumns = ["From", "To", "Date", "View"];
  constructor(private messageService: MessageService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.messageService.getAllMessages(this.trainerId).subscribe(data => {
      this.messages = data as Message[];
    });
  }

  /**
   * View a message in a dialog
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
