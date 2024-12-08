import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerMessagesComponent } from './trainer-messages.component';

describe('TrainerMessagesComponent', () => {
  let component: TrainerMessagesComponent;
  let fixture: ComponentFixture<TrainerMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainerMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
