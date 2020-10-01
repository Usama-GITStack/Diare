import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticalsComponent } from './add-articals.component';

describe('AddArticalsComponent', () => {
  let component: AddArticalsComponent;
  let fixture: ComponentFixture<AddArticalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
