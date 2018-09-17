import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loginMessage: string;
  constructor(private rotuer: Router,
    private httpService: HttpService,
    private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit() {
    if (this.authService.getStatus()) {
      this.rotuer.navigate(['stories']);

    }
  }

  login() {
    this.httpService.login(this.user).then((data) => {
      if (data) {
        this.rotuer.navigate(['stories']);
      } else {
        this.loginMessage = 'Failed to login';
      }
    });
  }

  goRegisterComponent() {
    this.rotuer.navigate(['register']);
  }
}
