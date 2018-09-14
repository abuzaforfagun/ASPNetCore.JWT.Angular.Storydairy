import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpOptions: any;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
  }


  get(url, params = {}): Observable<any> {
    return this.http.get(url, { params });
  }

  post(url, params): Observable<any> {
    return this.http.post(url, params);
  }

  postWithToken(url, params): Observable<any> {
    return this.http.post(url, params, this.httpOptions);
  }
  public delete(url, params): Observable<any> {
    return this.http.delete(url, { params });
  }

  public put(url, params): Observable<any> {
    return this.http.put(url, params);
  }

}
