import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message, StepsLog, User, WorkoutLog } from '../../../types';
import { UserService } from '../../../shared/services/user.service';
import { LogService } from '../../../shared/services/log.service';
import { extractDate } from '../../../shared/utils';
import { fadeIn, fadeOut } from '../../../shared/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../auth/services/auth.service';
import { MessageService } from '../../../shared/services/message.service';
import { MessageDialogComponent } from '../../components/dialogs/message-dialog/message-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NewMessageComponent } from '../../components/dialogs/new-message/new-message.component';

@Component({
  selector: 'app-client-dashboard-page',
  templateUrl: './client-dashboard-page.component.html',
  styleUrl: './client-dashboard-page.component.scss',
  animations: [fadeIn, fadeOut]
})
export class ClientDashboardPageComponent implements OnInit {

  userId!:string;
  clientId!: string; // The userId property of the client
  clientDetails!: User; // The User object for the client
  calories: number = 0; // The number of calories burned on the current day
  steps: number = 0; // The number of steps walked/run on the current day
  distance: number = 0; // The total distance covered on the current day
  workoutLogs: WorkoutLog[] = [] // The workout log history for the client
  stepsLogs: StepsLog[] = [] // Step log history for the client
  messages: Message[] = [] // Messages passed between client and the trainer 

  displayedColumnsLogs =  ["exercise", "sets", "reps", "calories", "date"];
  displayedColumnsMessages = ["From", "To", "Date", "View"]; // Columns to be displayed in the messages table

  constructor(private route: ActivatedRoute, private userSvc: UserService, private log: LogService, private snackbar: MatSnackBar, private auth: AuthService, private messagesSvc: MessageService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id') ?? "";

    if (this.clientId && this.auth.CurrentUserId) {
      this.userSvc.getUser(this.clientId).subscribe(data => {
        this.clientDetails = data as User;
      });

      this.log.getWorkoutLogsByUserId(this.clientId).subscribe(data => {
        this.workoutLogs = data as WorkoutLog[];
        this.calculateCalories();
      });

      this.log.getStepsLogByUserId(this.clientId).subscribe(data => {
        this.stepsLogs = data as StepsLog[];
        this.calculateStepsAndDistance();
      });

      this.messagesSvc.getAllMessages(this.auth.CurrentUserId, this.clientId).subscribe(data => {
        this.messages = data as Message[];
      });

      this.userId = this.auth.CurrentUserId;
    }

  }

  /**
   * Calculates total calories by filtering the workout logs for entries added on the current date and sums the calories
   *
   * @memberof DashboardPageComponent
   */
  calculateCalories() {
    let currentDate = new Date(Date.now());
    this.workoutLogs.filter(log => extractDate(new Date(log.date ?? '01-01-2000')) == extractDate(currentDate)).forEach(log => {

      this.calories += log.calories;
    });
  }

  /**
   * Calculates total steps and distance by filtering the steps logs for entries added on the current date
   *
   * @memberof DashboardPageComponent
   */
  calculateStepsAndDistance() {
    let currentDate = new Date(Date.now());
    this.stepsLogs.filter(log => extractDate(new Date(log.date ?? '01-01-2000')) == extractDate(currentDate)).forEach(log => {

      this.steps += log.steps;
      this.distance += log.distance;
      this.calories += log.calories;
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
   * Opens a new dialog with a form to send a new message to the user
   *
   * @memberof TrainerMessagesComponent
   */
  newMessage() {
    const dialogRef = this.dialog.open(NewMessageComponent, {
      data: {
        trainerId: this.clientId,
        userId: this.userId,
        trainerName: this.clientDetails.name,
        userName: this.auth.CurrentUserName,
      }
    });
  }

}
