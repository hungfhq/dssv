import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinhvienThongtinComponent } from './sinhvien-thongtin.component';

describe('SinhvienThongtinComponent', () => {
  let component: SinhvienThongtinComponent;
  let fixture: ComponentFixture<SinhvienThongtinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinhvienThongtinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinhvienThongtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
