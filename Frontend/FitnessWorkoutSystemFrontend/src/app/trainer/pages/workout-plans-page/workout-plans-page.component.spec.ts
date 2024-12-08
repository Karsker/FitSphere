import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlansPageComponent } from './workout-plans-page.component';

describe('WorkoutPlansPageComponent', () => {
  let component: WorkoutPlansPageComponent;
  let fixture: ComponentFixture<WorkoutPlansPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutPlansPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkoutPlansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
