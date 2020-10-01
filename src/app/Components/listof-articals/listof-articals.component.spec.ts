import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofArticalsComponent } from './listof-articals.component';

describe('ListofArticalsComponent', () => {
  let component: ListofArticalsComponent;
  let fixture: ComponentFixture<ListofArticalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofArticalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofArticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
