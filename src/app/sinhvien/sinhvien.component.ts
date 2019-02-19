import { Component, OnInit } from '@angular/core';
import { Sinhvien } from '../sinhvien';
import { SinhvienService } from '../sinhvien.service';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.scss']
})
export class SinhvienComponent implements OnInit {
  dssinhvien: Sinhvien[];


  constructor(private sinhvienService: SinhvienService) { }

  ngOnInit() {
    this.getDanhsach();
  }
  
  getDanhsach():void {
    this.sinhvienService.getSinhvien()
    .subscribe(data => this.dssinhvien = data);
  }
  
  add(name: string, subject: string): void {
    name = name.trim();
    subject = subject.trim();
    if(!name) {return;}
    this.sinhvienService.themSinhvien({name, subject} as Sinhvien)
    .subscribe(sinhvien => {
      this.dssinhvien.push(sinhvien);
    });
  }

  delete(sinhvien: Sinhvien): void {
    this.dssinhvien = this.dssinhvien.filter(s => s !== sinhvien);
    this.sinhvienService.xoaSinhvien(sinhvien).subscribe();
  }
}
