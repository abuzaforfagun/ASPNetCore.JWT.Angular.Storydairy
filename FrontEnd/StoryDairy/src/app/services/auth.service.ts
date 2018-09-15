import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  userId: string;
  constructor(private httpService: HttpService) { }
  login(user: User): Promise<any> {
    return new Promise((resolve) => {
      this.httpService.post('https://localhost:44399/api/Auth/login', user).subscribe(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.userId);
        this.userId = data.userId;
        resolve(true);
      });
    });
  }

  getUserId() {
    if (this.userId) {
      return this.userId;
    }
    return localStorage.getItem('user');
  }
}