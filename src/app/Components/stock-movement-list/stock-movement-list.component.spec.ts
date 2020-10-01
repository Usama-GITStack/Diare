import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMovementListComponent } from './stock-movement-list.component';

describe('StockMovementListComponent', () => {
  let component: StockMovementListComponent;
  let fixture: ComponentFixture<StockMovementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMovementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMovementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
