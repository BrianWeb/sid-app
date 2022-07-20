import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeakDetectionComponent } from './leak-detection.component';

describe('LeakDetectionComponent', () => {
  let component: LeakDetectionComponent;
  let fixture: ComponentFixture<LeakDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeakDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeakDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
