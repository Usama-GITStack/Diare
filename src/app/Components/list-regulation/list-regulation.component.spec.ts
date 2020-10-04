import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegulationComponent } from './list-regulation.component';

describe('ListRegulationComponent', () => {
  let component: ListRegulationComponent;
  let fixture: ComponentFixture<ListRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
