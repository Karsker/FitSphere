import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTrainerDialogComponent } from './choose-trainer-dialog.component';

describe('ChooseTrainerDialogComponent', () => {
  let component: ChooseTrainerDialogComponent;
  let fixture: ComponentFixture<ChooseTrainerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseTrainerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseTrainerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
