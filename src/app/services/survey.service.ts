import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SurveyService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {id: 'assets/surveydata/saveEarth.json', name: 'Climate Survey'}
    ];
  }

}
