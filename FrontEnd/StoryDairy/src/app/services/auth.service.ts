import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private httpService: HttpService) { }
  login(user: User) {
    this.httpService.post('https://localhost:44399/api/Auth/login', user).subscribe(data => {
      localStorage.setItem('token', data.token);
    });
  }
}