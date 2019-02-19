import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { SinhvienThongtinComponent } from './sinhvien-thongtin/sinhvien-thongtin.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SinhvienThongtinComponent },
  { path: 'dssinhvien', component: SinhvienComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {} 