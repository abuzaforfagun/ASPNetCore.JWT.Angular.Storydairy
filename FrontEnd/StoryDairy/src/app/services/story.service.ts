import { HttpService } from './http.service';
import { Story } from './../models/story';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  stories: any = [];
  constructor(private httpService: HttpService) {
    // this.dummyStory();
    this.httpService.get('https://localhost:44399/api/stories').subscribe(data => {
      this.stories = data;
    });
  }
}
