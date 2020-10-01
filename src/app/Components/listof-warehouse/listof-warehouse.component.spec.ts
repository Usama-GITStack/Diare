import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofWarehouseComponent } from './listof-warehouse.component';

describe('ListofWarehouseComponent', () => {
  let component: ListofWarehouseComponent;
  let fixture: ComponentFixture<ListofWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
