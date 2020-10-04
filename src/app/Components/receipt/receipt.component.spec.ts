import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RECEIPTComponent } from './receipt.component';

describe('RECEIPTComponent', () => {
  let component: RECEIPTComponent;
  let fixture: ComponentFixture<RECEIPTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RECEIPTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RECEIPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
