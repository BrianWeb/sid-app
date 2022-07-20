import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyPlumbingPricesComponent } from './emergency-plumbing-prices.component';

describe('EmergencyPlumbingPricesComponent', () => {
  let component: EmergencyPlumbingPricesComponent;
  let fixture: ComponentFixture<EmergencyPlumbingPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyPlumbingPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyPlumbingPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
