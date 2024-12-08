import { Component, Input } from '@angular/core';
import { User } from '../../../types';
@Component({
  selector: 'app-trainer-profile-header',
  templateUrl: './trainer-profile-header.component.html',
  styleUrl: './trainer-profile-header.component.scss'
})
export class TrainerProfileHeaderComponent {
  @Input() trainerInfo!:User;
}
