import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COMMERCIALINVOICEComponent } from './commercialinvoice.component';

describe('COMMERCIALINVOICEComponent', () => {
  let component: COMMERCIALINVOICEComponent;
  let fixture: ComponentFixture<COMMERCIALINVOICEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COMMERCIALINVOICEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COMMERCIALINVOICEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
