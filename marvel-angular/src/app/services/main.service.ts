import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Md5 } from 'ts-md5/dist/md5';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MainService {


  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<any[]>{
    return this.http.get<any>('/api/getUser')
    .pipe(
      tap(heroes => console.log('heroes', heroes))
    );
  }
  
}
