import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  userId: string;
  isAuthenticate = false;
  constructor(private httpService: HttpService) {
    this.checkAuthentication().then(data => {
      this.isAuthenticate = data;
    });
  }
  login(user: User): Promise<any> {
    return new Promise((resolve) => {
      this.httpService.post('https://localhost:44399/api/Auth/login', user)
      .subscribe(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.userId);
        this.userId = data.userId;
        this.isAuthenticate = true;
        resolve(true);
      }, err => resolve(false));
    });
  }

  getUserId() {
    if (this.userId) {
      return this.userId;
    }
    return localStorage.getItem('user');
  }

  checkAuthentication(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('user') === null) {
        resolve(false);
      }
      resolve(true);
    });
  }
}
