import { Injectable } from '@angular/core';
import { Sinhvien } from './sinhvien';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
 createDb(){
   const dssinhvien = [
     {id: 11, name: 'Yuto Nagatomo', subject: 'java'},
     {id: 12, name: 'Hiroki Sakai', subject: 'c#'},
     {id: 13, name: 'Tomoaki Makino', subject: 'c++'},
     {id: 14, name: 'Tatsuya Ito', subject: 'pascal'},
     {id: 15, name: 'Keisuke Honda', subject: 'php'},
     {id: 16, name: 'Takashi Usami', subject: 'ruby'},
     {id: 17, name: 'Ryota Morioka', subject: 'python'},
     {id: 18, name: 'Takawa Inui', subject: 'golang'}
   ];
   return {dssinhvien};
 }
 genId(dssinhvien: Sinhvien[]): number {
   return dssinhvien.length > 0 ? Math.max(...dssinhvien.map(sinhvien => sinhvien.id))+1 : 11;
 }

}
