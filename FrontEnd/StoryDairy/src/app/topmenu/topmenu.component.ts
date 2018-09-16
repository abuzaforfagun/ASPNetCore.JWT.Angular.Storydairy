import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.clear();
    this.gotoLoginPage();
  }

  private gotoLoginPage() {
    this.router.navigate(['/login']);

  }
}
