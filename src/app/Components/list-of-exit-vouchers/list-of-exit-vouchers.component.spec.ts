import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfExitVouchersComponent } from './list-of-exit-vouchers.component';

describe('ListOfExitVouchersComponent', () => {
  let component: ListOfExitVouchersComponent;
  let fixture: ComponentFixture<ListOfExitVouchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfExitVouchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfExitVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
