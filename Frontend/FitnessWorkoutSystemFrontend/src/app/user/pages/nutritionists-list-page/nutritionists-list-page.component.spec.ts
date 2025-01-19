import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistsListPageComponent } from './nutritionists-list-page.component';

describe('NutritionistsListPageComponent', () => {
  let component: NutritionistsListPageComponent;
  let fixture: ComponentFixture<NutritionistsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionistsListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionistsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
