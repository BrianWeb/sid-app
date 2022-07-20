import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDublinPlumberComponent } from './contact-dublin-plumber.component';

describe('ContactDublinPlumberComponent', () => {
  let component: ContactDublinPlumberComponent;
  let fixture: ComponentFixture<ContactDublinPlumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDublinPlumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDublinPlumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
