import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewWarehouseComponent } from './add-new-warehouse.component';

describe('AddNewWarehouseComponent', () => {
  let component: AddNewWarehouseComponent;
  let fixture: ComponentFixture<AddNewWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
