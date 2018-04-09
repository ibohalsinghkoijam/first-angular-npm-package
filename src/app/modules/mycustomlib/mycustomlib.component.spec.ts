import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycustomlibComponent } from './mycustomlib.component';

describe('MycustomlibComponent', () => {
  let component: MycustomlibComponent;
  let fixture: ComponentFixture<MycustomlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycustomlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycustomlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
