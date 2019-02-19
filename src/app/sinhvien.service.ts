import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Sinhvien } from './sinhvien';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SinhvienService {

  private dssinhvienUrl = 'api/dssinhvien';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  //GET dssinhvien from the server
  getSinhvien(): Observable<Sinhvien[]> {
    return this.http.get<Sinhvien[]>(this.dssinhvienUrl)
      .pipe(
        tap(_ => this.log('fetched sinhvien')),
        catchError(this.handleError('getSinhvien', []))
      );
  }
  

  getSinhvienNo404<Data>(id: number): Observable<Sinhvien> {
    const url = `${this.dssinhvienUrl}/?id=${id}`;
    return this.http.get<Sinhvien[]>(url)
      .pipe(
        map(dssinhvien => dssinhvien[0]),
        tap(s => {
          const outcome = s ? `fetched` : `did not find`;
          this.log(`${outcome} sinhvien id=${id}`);
        }),
        catchError(this.handleError<Sinhvien>('getSinhvienThongtin id=${id}'))
    );
  }

  // GET sinhvien by id. Will 404 if id not found
  getSinhvienThongtin(id: number): Observable<Sinhvien> {
    const url = `${this.dssinhvienUrl}/${id}`;
    return this.http.get<Sinhvien>(url).pipe(
      tap(_ => this.log(`fetched sinhvien id=${id}`)),
      catchError(this.handleError<Sinhvien>(`getSinhvienThongtin id=${id}`))
    );
  }

  // GET dssinhvien whose name contains search term
  timSinhvien(term: string): Observable<Sinhvien[]> {
    if (!term.trim()) {
      //if not search term, return empty sinhvien array
      return of([]);
    }
    return this.http.get<Sinhvien[]>(`${this.dssinhvienUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found sinhvien matching "${term}"`)),
      catchError(this.handleError<Sinhvien[]>('timSinhvien', []))
    );
  }

  // POST: add a new sinhvien to the server
  themSinhvien(sv: Sinhvien): Observable<Sinhvien> {
    return this.http.post<Sinhvien>(this.dssinhvienUrl, sv, httpOptions).pipe(
      tap((newSinhvien: Sinhvien) => this.log(`add new sinhvien w/ id=${newSinhvien.id}`)),
      catchError(this.handleError<Sinhvien>('themSinhvien'))
    );
  }



  // DELETE: delete the sinhvien
  xoaSinhvien(sinhvien: Sinhvien | number): Observable<Sinhvien> {
    const id = typeof sinhvien === 'number' ? sinhvien : sinhvien.id;
    const url = `${this.dssinhvienUrl}/${id}`;

    return this.http.delete<Sinhvien>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted sinhvien id = ${id}`)),
      catchError(this.handleError<Sinhvien>('xoaSinhvien'))
    );
  }

  capnhatSinhvien(sinhvien: Sinhvien): Observable<any> {
    return this.http.put(this.dssinhvienUrl, sinhvien, httpOptions).pipe(
      tap(_ => this.log(`updated sinhvien id=${sinhvien.id}`)),
      catchError(this.handleError<any>('capnhatSinhvien'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`SinhvienService: ${message}`);
  }

}
