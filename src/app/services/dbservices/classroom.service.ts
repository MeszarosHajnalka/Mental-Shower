import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from '../models/classroom.model';

const baseUrl = 'http://localhost:8080/api/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(baseUrl);
  }

  get(id: any): Observable<Classroom> {
    return this.http.get(`${baseUrl}/${id}`);
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