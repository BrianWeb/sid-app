import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilerInstallationComponent } from './boiler-installation.component';

describe('BoilerInstallationComponent', () => {
  let component: BoilerInstallationComponent;
  let fixture: ComponentFixture<BoilerInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoilerInstallationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoilerInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
