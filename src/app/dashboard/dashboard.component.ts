import { Component, OnInit } from '@angular/core';
import { Sinhvien } from '../sinhvien';
import { SinhvienService } from '../sinhvien.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dssinhvien: Sinhvien[] = [];

  constructor(private sinhvienService: SinhvienService) { }

  ngOnInit() {
    this.getSinhvien();
  }

  getSinhvien(): void {
    this.sinhvienService.getSinhvien()
    .subscribe(data => this.dssinhvien = data.slice(0,5));
  }

}
