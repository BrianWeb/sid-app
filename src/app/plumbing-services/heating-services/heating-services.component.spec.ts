import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingServicesComponent } from './heating-services.component';

describe('HeatingServicesComponent', () => {
  let component: HeatingServicesComponent;
  let fixture: ComponentFixture<HeatingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
