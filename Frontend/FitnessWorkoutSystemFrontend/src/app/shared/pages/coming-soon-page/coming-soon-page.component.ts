import { Component } from '@angular/core';
import { fadeIn, fadeOut } from '../../animations';
@Component({
  selector: 'app-coming-soon-page',
  templateUrl: './coming-soon-page.component.html',
  styleUrl: './coming-soon-page.component.scss',
  animations: [fadeIn, fadeOut]
})
export class ComingSoonPageComponent {

}
