import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Sinhvien } from '../sinhvien';
import { SinhvienService } from '../sinhvien.service';

@Component({
  selector: 'app-sinhvien-thongtin',
  templateUrl: './sinhvien-thongtin.component.html',
  styleUrls: ['./sinhvien-thongtin.component.scss']
})

export class SinhvienThongtinComponent implements OnInit {
  @Input() sinhvien: Sinhvien;
  
  constructor(
    private route: ActivatedRoute,
    private sinhvienService: SinhvienService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSinhvienThongtin();
  }

  getSinhvienThongtin(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sinhvienService.getSinhvienThongtin(id)
    .subscribe(emsinhvien => this.sinhvien = emsinhvien);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.sinhvienService.capnhatSinhvien(this.sinhvien)
    .subscribe(() => this.goBack());
  }

}
