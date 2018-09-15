import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
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
      }
    })
  }

  goRegisterComponent() {
    this.rotuer.navigate(['register']);
  }
}
