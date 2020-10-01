import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryVouchersComponent } from './new-entry-vouchers.component';

describe('NewEntryVouchersComponent', () => {
  let component: NewEntryVouchersComponent;
  let fixture: ComponentFixture<NewEntryVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEntryVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntryVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
