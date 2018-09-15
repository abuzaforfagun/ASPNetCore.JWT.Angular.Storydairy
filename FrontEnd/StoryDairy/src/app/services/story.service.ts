import { HttpService } from './http.service';
import { Story } from './../models/story';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  stories: any = [];
  constructor(private httpService: HttpService) {
    this.getStories();
  }

  getStories() {
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

  update(story: Story) {
    this.httpService.put(`https://localhost:44399/api/stories/${story.id}`, story).subscribe(data => {
      this.stories[data.id] = data;
    });
  }
  delete(id: number) {
    this.stories = this.stories.filter(s => s.id !== id, 1);
    this.httpService.delete(`https://localhost:44399/api/stories/${id}`).subscribe();
  }

  get(id: number): Promise<Story> {
    return new Promise(resolve => {
      if (this.stories.length === 0) {
        this.stories = this.getStories();
        resolve( this.stories.find(s => s.id === id) );
      } else {
        id = parseInt(id);
        resolve( this.stories.find(s => s.id === id) );
      }
    })
    

  }
}
