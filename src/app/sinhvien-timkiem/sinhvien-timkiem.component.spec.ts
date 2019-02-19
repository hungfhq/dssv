import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienTimkiemComponent } from './sinhvien-timkiem.component';

describe('SinhvienTimkiemComponent', () => {
  let component: SinhvienTimkiemComponent;
  let fixture: ComponentFixture<SinhvienTimkiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhvienTimkiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhvienTimkiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
