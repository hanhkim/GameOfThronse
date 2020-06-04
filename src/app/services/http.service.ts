import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = 'https://anapioficeandfire.com/api';
  constructor(
    private http: HttpClient
  ) { }

  get(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${url}`);
  }
}
