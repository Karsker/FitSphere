import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistHomePageComponent } from './nutritionist-home-page.component';

describe('NutritionistHomePageComponent', () => {
  let component: NutritionistHomePageComponent;
  let fixture: ComponentFixture<NutritionistHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionistHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionistHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
