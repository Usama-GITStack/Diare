import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomerListComponent } from './coustomer-list.component';

describe('CoustomerListComponent', () => {
  let component: CoustomerListComponent;
  let fixture: ComponentFixture<CoustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
