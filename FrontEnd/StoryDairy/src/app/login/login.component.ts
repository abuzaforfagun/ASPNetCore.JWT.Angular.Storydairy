import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: string;
  password: string;
  constructor(private rotuer: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.userId);
    console.log(this.password);
  }

  goRegisterComponent() {
    this.rotuer.navigate(['register']);
  }
}
