import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }


  get(url, params = {}): Observable<any> {
    return this.http.get(url, { params });
  }

  post(url, params): Observable<any> {
    return this.http.post(url, params);
  }


  public delete(url, params): Observable<any> {
    return this.http.delete(url, { params });
  }

  public put(url, params): Observable<any> {
    return this.http.put(url, params);
  }

}
