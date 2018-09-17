import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private userId: string;
  private isAuthenticate = false;
  constructor(private router: Router) {
    this.checkAuthentication().then(data => {
      this.isAuthenticate = data;
    });
  }

  getToken() {
    return this.token;
  }

  getStatus() {
    return this.isAuthenticate;
  }
  authenticateUser(data) {
    this.token = data.token;
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.userId);
    this.userId = data.userId;
    this.isAuthenticate = true;
  }

  getUserId() {
    if (!this.userId) {
      this.userId = localStorage.getItem('user');
    }
    return this.userId;
  }

  private checkAuthentication(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.token) {
        const tokenFromStorage = localStorage.getItem('token');
        if (tokenFromStorage === null) {
          resolve(false);
        }
        this.token = tokenFromStorage;
      }
      resolve(true);
    });
  }

  clearAuthentication() {
    localStorage.clear();
    this.isAuthenticate = false;
    this.userId = undefined;
  }

  gotoLoginPage() {
    this.router.navigate(['/login']);

  }
}
