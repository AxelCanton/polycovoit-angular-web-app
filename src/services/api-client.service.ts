import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private apiUrl = 'http://localhost:5000/api/'
  
  constructor(private http: HttpClient) { }

  private constructUrl(url: string) {
    return `${this.apiUrl}${url}`;
  }

  get<T>(url: string) {
    return this.http.get<T>(this.constructUrl(url));
  }

  post<T = undefined>(url: string, body: Object) {
    return this.http.post<T>(this.constructUrl(url), body);
  }


}
