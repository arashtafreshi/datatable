import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class CardTableService {

  private headers = new Headers({ 'Content-Type': 'application/json',
   'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Headers':'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
  'Access-Control-Allow-Methods':'GET, PUT, POST',
  'Accept': '*/*' });
  private heroesUrl = 'api/heroes';  // URL to web api

  private cardsUrl = 'http://127.0.0.1:5984/sampledb/_design/allcards/_view/allcards?limit=20&reduce=false';  // URL to web api
  //private cardsUrl = 'http://www.google.com';  // URL to web api
  mycards = '';


  constructor(private http: HttpClient) { }

  getCards() {
    // return this.http.get(this.cardsUrl, {headers : this.headers})
    //            .toPromise()
    //            .then(response => alert(JSON.stringify(response.json().data)))
    //            .catch(this.handleError);
    var d = {};

    this.http.get('/api/sampledb/_design/allcards/_view/allcards?limit=20&reduce=false').subscribe(data=>{
      d = data;
    });
    return d;
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

