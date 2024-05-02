import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient : HttpClient) { }

  getCall()
  {
    return this.httpClient.get('https://cat-fact.herokuapp.com/facts/random');
  }
}
