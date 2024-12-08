import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../../types';
import { ApiService } from '../../../shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../../shared/components/spinner/spinner.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-exercise-desc-page',
  templateUrl: './exercise-desc-page.component.html',
  styleUrl: './exercise-desc-page.component.scss'
})
export class ExerciseDescPageComponent implements OnInit{

  exercise!: Exercise;

  constructor(private api: ApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');

    if (idFromRoute) {
      this.api.get(`/exercise/search/${idFromRoute}`).subscribe(data => {
        this.exercise = data as Exercise;
        // console.log(this.exercise);
        this.exercise.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.exercise.videoLink) as string;
      }
      );
      
      
    }
  }
}
