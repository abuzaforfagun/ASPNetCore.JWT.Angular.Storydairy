import { RoutingService } from './../../services/routing.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor(private authService: AuthService,
    private routingService: RoutingService) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.clearAuthentication();
    this.gotoLoginPage();
  }

  private gotoLoginPage() {
    this.routingService.toLogin();

  }
}
