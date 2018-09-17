import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from '../../models/newuser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: NewUser;
  message: string;
  messageClass: string;
  constructor(private userService: UserService,
    private router: Router) {
    this.user = new NewUser();
  }

  ngOnInit() {
  }

  register() {
    if (this.checkInputs()) {
      this.userService.add(this.user).then(data => {
        this.router.navigate(['/stories']);
      });

    }

  }

  private checkInputs(): boolean {
    if (!this.user.checkPassword()) {
      this.messageClass = 'warning';
      this.message = 'Password not match!';
      return false;
    }
    if (!this.user.checkInputs()) {
      this.message = 'Please checkout input fields!';
      this.messageClass = 'warning';
      return false;
    } else {
      this.message = 'Registration done. Wait a while to login...';
      this.messageClass = 'information';
    }
    return true;
  }
}
