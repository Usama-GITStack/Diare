import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgoodexitComponent } from './newgoodexit.component';

describe('NewgoodexitComponent', () => {
  let component: NewgoodexitComponent;
  let fixture: ComponentFixture<NewgoodexitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewgoodexitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgoodexitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
