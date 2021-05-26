import { Preference } from './../models/preference.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../util/constants';

const baseUrl = Constants.DOMAIN +'preference';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Preference[]> {
    return this.http.get<Preference[]>(baseUrl);
  }

  get(id: any): Observable<Preference> {
    return this.http.get(`${baseUrl}/pk/${id}`);
  }
  

  create(data: any): Observable<any> {
    console.log("from frontend post: " + data);
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  
}