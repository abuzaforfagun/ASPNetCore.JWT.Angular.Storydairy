import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullName: string;
  userId: string;
  password: string;
  confirmPassword: string;
  message: string;
  messageClass: string;
  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log(this.fullName);
    if (this.fullName === undefined || this.userId === undefined || this.password === undefined) {

      this.message = 'Please checkout input fields!';
      this.messageClass = 'warning';
    } else {
      this.message = 'Registration done. Wait a while to login...';
      this.messageClass = 'information';
    }

    if (this.password !== this.confirmPassword) {
      this.messageClass = 'warning';
      this.message = 'Password not match!';
    }
  }
}
