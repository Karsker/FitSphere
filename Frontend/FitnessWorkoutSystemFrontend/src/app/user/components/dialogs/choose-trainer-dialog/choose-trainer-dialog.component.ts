import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-choose-trainer-dialog',
  templateUrl: './choose-trainer-dialog.component.html',
  styleUrl: './choose-trainer-dialog.component.scss'
})
export class ChooseTrainerDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {trainerName: string}){};
}
