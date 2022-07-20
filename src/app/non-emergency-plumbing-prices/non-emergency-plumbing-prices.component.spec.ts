import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonEmergencyPlumbingPricesComponent } from './non-emergency-plumbing-prices.component';

describe('NonEmergencyPlumbingPricesComponent', () => {
  let component: NonEmergencyPlumbingPricesComponent;
  let fixture: ComponentFixture<NonEmergencyPlumbingPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonEmergencyPlumbingPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonEmergencyPlumbingPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
