import { RoutingService } from './../../services/routing.service';
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
  constructor(private httpService: HttpService,
    private authService: AuthService,
    private routingService: RoutingService) {
    this.user = new User();
  }

  ngOnInit() {
    if (this.authService.getStatus()) {
      this.routingService.toStories();
    }
  }

  login() {
    this.httpService.login(this.user).then((data) => {
      if (data) {
      } else {
        this.loginMessage = 'Failed to login';
      }
    });
  }

  goRegisterComponent() {
    this.routingService.toRegister();
  }
}
