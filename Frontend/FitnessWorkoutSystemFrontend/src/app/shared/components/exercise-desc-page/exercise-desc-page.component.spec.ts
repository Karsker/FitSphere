import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDescPageComponent } from './exercise-desc-page.component';

describe('ExerciseDescPageComponent', () => {
  let component: ExerciseDescPageComponent;
  let fixture: ComponentFixture<ExerciseDescPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseDescPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseDescPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
