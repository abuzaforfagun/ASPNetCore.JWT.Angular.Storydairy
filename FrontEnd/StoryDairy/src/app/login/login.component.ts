import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.userId);
    console.log(this.password);
  }

  goRegisterComponent() {
    
  }
}
