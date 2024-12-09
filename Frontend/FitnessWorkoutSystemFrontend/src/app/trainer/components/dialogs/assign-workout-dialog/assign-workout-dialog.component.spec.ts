import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWorkoutDialogComponent } from './assign-workout-dialog.component';

describe('AssignWorkoutDialogComponent', () => {
  let component: AssignWorkoutDialogComponent;
  let fixture: ComponentFixture<AssignWorkoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignWorkoutDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignWorkoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
