import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(url: string, params?: object): Observable<any> {
    return this.http.get(url, params);
  }

  public post(url: string, body: object, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[]; };
    observe?: 'body';
    params?: HttpParams | { [param: string]: string | string[]; };
    reportProgress?: boolean;
    responseType: 'arraybuffer';
    withCredentials?: boolean; }): Observable<any> {
    return this.http.post(url, body);
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

  public put(url: string, body: object, params?: object): Observable<any> {
    return this.http.put(url, body, params);
  }
}
