import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';
import { WorkoutPlan } from '../../../../types';
import { Observable } from 'rxjs';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-view-workout-plan-dialog',
  templateUrl: './view-workout-plan-dialog.component.html',
  styleUrl: './view-workout-plan-dialog.component.scss'
})
export class ViewWorkoutPlanDialogComponent implements OnInit {

  workoutPlan!: WorkoutPlan;
  loading: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {workoutPlanId: string}, private api: ApiService){};

  ngOnInit(): void {
    this.getPlan().subscribe(res => {
      this.workoutPlan = res as WorkoutPlan;
      this.loading = false;
    });
  }

  getPlan(): Observable<Object> {
    return this.api.get(`/workoutPlan/seach/${this.data.workoutPlanId}`);
  }

}
