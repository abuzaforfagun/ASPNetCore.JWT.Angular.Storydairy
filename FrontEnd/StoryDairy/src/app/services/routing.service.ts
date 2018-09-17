import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }
  toLogin() {
    this.router.navigate(['/login']);
  }

  toRegister() {
    this.router.navigate(['/register']);
  }

  toStories() {
    this.router.navigate(['stories']);
  }

  toStoryForm() {
    this.router.navigate(['/stories/form/']);
  }

  toStoryFormWithParams(id) {
    this.router.navigate([`/stories/form/${id}`]);
  }

  toPageNotFound() {
    this.router.navigate(['page-not-found']);
  }
}
