import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasSidebarComponent } from './areas-sidebar.component';

describe('AreasSidebarComponent', () => {
  let component: AreasSidebarComponent;
  let fixture: ComponentFixture<AreasSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
