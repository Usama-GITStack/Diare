import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntryVouchersComponent } from './add-entry-vouchers.component';

describe('AddEntryVouchersComponent', () => {
  let component: AddEntryVouchersComponent;
  let fixture: ComponentFixture<AddEntryVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEntryVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntryVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
