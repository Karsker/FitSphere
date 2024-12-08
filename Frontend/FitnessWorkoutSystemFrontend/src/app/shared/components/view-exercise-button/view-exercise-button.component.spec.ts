import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExerciseButtonComponent } from './view-exercise-button.component';

describe('ViewExerciseButtonComponent', () => {
  let component: ViewExerciseButtonComponent;
  let fixture: ComponentFixture<ViewExerciseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewExerciseButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExerciseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
