import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExitVouchersComponent } from './add-exit-vouchers.component';

describe('AddExitVouchersComponent', () => {
  let component: AddExitVouchersComponent;
  let fixture: ComponentFixture<AddExitVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExitVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExitVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
