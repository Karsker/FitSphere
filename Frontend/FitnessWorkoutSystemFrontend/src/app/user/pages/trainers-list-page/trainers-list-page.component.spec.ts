import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersListPageComponent } from './trainers-list-page.component';

describe('TrainersListPageComponent', () => {
  let component: TrainersListPageComponent;
  let fixture: ComponentFixture<TrainersListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainersListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
