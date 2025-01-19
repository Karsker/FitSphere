import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMealButtonComponent } from './view-meal-button.component';

describe('ViewMealButtonComponent', () => {
  let component: ViewMealButtonComponent;
  let fixture: ComponentFixture<ViewMealButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMealButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMealButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
