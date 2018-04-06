import { Bowler } from './../models/bowler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


  constructor(private _http: HttpClient) { }

  /* Bowlers */
  getBowlers() {
    return this._http.get('https://apple-tart-39486.herokuapp.com/api/bowlers')
    .map(res => <Bowler[]>res['data']);
  }

  // getBowlers() {
  //   return this._http.get('http://localhost:3000/api/bowlers')
  //   .map(res => <Bowler[]>res['data']);
  // }

}
