import { HttpService } from './http.service';
import { Story } from './../models/story';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  stories: any = [];
  constructor(private httpService: HttpService) {
    this.httpService.get('https://localhost:44399/api/stories').subscribe(data => {
      this.stories = data;
    });
  }

  add(story: Story) {
    this.httpService.postWithToken('https://localhost:44399/api/stories/', story).subscribe(data => {
      this.stories.push(data);
      return story;
    });
  }
}
