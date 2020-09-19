import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  constructor(private http: HttpClient) { }

  get<T>(url: string, queryParams?: { [key: string]: any }): Observable<T> {

    const options = {
      params: queryParams
    };

    return this.http.get<T>(url, options);
  }

  post<T>(url: string, body: any, queryParams?: { [param: string]: any }): Observable<T> {
    const options = {
      params: queryParams
    };

    return this.http.post<T>(url, body, options);
  }

  put<T>(url: string, body: any, queryParams?: { [param: string]: any }): Observable<T> {
    const options = {
      params: queryParams
    };
    return this.http.put<T>(url, body, options);
  }

  delete<T>(url: string, body?: any, queryParams?: { [param: string]: any }): Observable<boolean> {
    const headers = new HttpHeaders();

    const options = {
      params: queryParams,
      headers,
      body
    };

    return this.http.delete<boolean>(url, options);
  }

  download(url: string, body: any, queryParams?: { [key: string]: string }): Observable<Blob> {


    const options: {
      headers?: HttpHeaders,
      params?: { [key: string]: string },
      responseType: 'blob',
    } = {
      params: queryParams,
      responseType: 'blob'
    };

    return this.http.post(url, body, options);
  }
}
