import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumbingServicesDublinComponent } from './plumbing-services-dublin.component';

describe('PlumbingServicesDublinComponent', () => {
  let component: PlumbingServicesDublinComponent;
  let fixture: ComponentFixture<PlumbingServicesDublinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumbingServicesDublinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumbingServicesDublinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
