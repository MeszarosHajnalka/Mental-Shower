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
      { id: 'assets/surveydata/javascript.json', name: 'JavaScript' },
      { id: 'assets/surveydata/aspnet.json', name: 'Asp.Net' },
      { id: 'assets/surveydata/csharp.json', name: 'C Sharp' },
      { id: 'assets/surveydata/designPatterns.json', name: 'Design Patterns' }
    ];
  }

}
