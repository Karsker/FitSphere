import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkoutPlanDialogComponent } from './view-workout-plan-dialog.component';

describe('ViewWorkoutPlanDialogComponent', () => {
  let component: ViewWorkoutPlanDialogComponent;
  let fixture: ComponentFixture<ViewWorkoutPlanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewWorkoutPlanDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewWorkoutPlanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
