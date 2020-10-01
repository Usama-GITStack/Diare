import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDocumentComponent } from './stock-document.component';

describe('StockDocumentComponent', () => {
  let component: StockDocumentComponent;
  let fixture: ComponentFixture<StockDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
