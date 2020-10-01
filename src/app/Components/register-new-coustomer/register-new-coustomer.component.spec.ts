import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewCoustomerComponent } from './register-new-coustomer.component';

describe('RegisterNewCoustomerComponent', () => {
  let component: RegisterNewCoustomerComponent;
  let fixture: ComponentFixture<RegisterNewCoustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNewCoustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewCoustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
