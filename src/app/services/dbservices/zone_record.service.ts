import { ZoneRecord } from '../models/zonerecord.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../util/constants';

const baseUrl = Constants.DOMAIN + 'zone_record';

@Injectable({
  providedIn: 'root'
})
export class ZoneRecordService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ZoneRecord[]> {
    return this.http.get<ZoneRecord[]>(baseUrl);
  }

  get(id: any): Observable<ZoneRecord[]> {
    return this.http.get<ZoneRecord[]>(`${baseUrl}/${id}`);
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