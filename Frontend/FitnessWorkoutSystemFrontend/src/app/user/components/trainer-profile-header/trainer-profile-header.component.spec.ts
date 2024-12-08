import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProfileHeaderComponent } from './trainer-profile-header.component';

describe('TrainerProfileHeaderComponent', () => {
  let component: TrainerProfileHeaderComponent;
  let fixture: ComponentFixture<TrainerProfileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainerProfileHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainerProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
