import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loginMessage: string;
  constructor(private rotuer: Router,
    private authService: AuthService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user).then((data) => {
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
