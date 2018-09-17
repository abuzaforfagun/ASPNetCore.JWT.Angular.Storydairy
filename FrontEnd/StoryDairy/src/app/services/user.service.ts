import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { NewUser } from '../models/newuser';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService,
    private authService: AuthService) { }

  add(user: NewUser): Promise<any> {
    return new Promise((resolve) => {
      this.httpService.post('https://localhost:44399/api/users/', user).subscribe(data => {
        let _user = new User();
        _user.userId = user.userId;
        _user.password = user.password;
        this.httpService.login(_user).then(data => {
          resolve(data);
        });
      });
    });

  }
}
