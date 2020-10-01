import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEntryVouchersComponent } from './list-of-entry-vouchers.component';

describe('ListOfEntryVouchersComponent', () => {
  let component: ListOfEntryVouchersComponent;
  let fixture: ComponentFixture<ListOfEntryVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfEntryVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEntryVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
