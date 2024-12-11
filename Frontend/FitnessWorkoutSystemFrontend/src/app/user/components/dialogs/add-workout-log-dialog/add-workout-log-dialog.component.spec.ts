import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkoutLogDialogComponent } from './add-workout-log-dialog.component';

describe('AddWorkoutLogDialogComponent', () => {
  let component: AddWorkoutLogDialogComponent;
  let fixture: ComponentFixture<AddWorkoutLogDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWorkoutLogDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWorkoutLogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
