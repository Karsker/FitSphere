import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDescPageComponent } from './meal-desc-page.component';

describe('MealDescPageComponent', () => {
  let component: MealDescPageComponent;
  let fixture: ComponentFixture<MealDescPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealDescPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealDescPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
