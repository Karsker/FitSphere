import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumGatewayPageComponent } from './premium-gateway-page.component';

describe('PremiumGatewayPageComponent', () => {
  let component: PremiumGatewayPageComponent;
  let fixture: ComponentFixture<PremiumGatewayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PremiumGatewayPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumGatewayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
