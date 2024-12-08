import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanDescPageComponent } from './workout-plan-desc-page.component';

describe('WorkoutPlanDescPageComponent', () => {
  let component: WorkoutPlanDescPageComponent;
  let fixture: ComponentFixture<WorkoutPlanDescPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutPlanDescPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkoutPlanDescPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
