import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from '../models/zone.model';

const baseUrl = 'http://localhost:8080/api/zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Zone[]> {
    return this.http.get<Zone[]>(baseUrl);
  }

  get(id: any): Observable<Zone> {

    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    console.log("from frontend post: " + data);
    return this.http.post(baseUrl, data);
  }
  getClass(id: any): Observable<Zone[]> {
    return this.http.get<Zone[]>(`${baseUrl}/classId/${id}`);
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