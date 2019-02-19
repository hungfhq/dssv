import { Component, OnInit } from '@angular/core';

import { Observable, Subject, from } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Sinhvien } from '../sinhvien';
import { SinhvienService } from '../sinhvien.service';

@Component({
  selector: 'app-sinhvien-timkiem',
  templateUrl: './sinhvien-timkiem.component.html',
  styleUrls: ['./sinhvien-timkiem.component.scss']
})
export class SinhvienTimkiemComponent implements OnInit {
  dssinhvien$: Observable<Sinhvien[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private sinhvienService: SinhvienService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.dssinhvien$ = this.searchTerms.pipe (
      debounceTime(100),

      distinctUntilChanged(),

      switchMap((term: string) => this.sinhvienService.timSinhvien(term))
    );
  }

}
