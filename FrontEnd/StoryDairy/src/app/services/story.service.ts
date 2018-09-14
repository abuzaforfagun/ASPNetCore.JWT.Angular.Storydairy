import { Story } from './../models/story';
import { Injectable } from '@angular/core';
import { Story } from '../models/story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  stories: Story[] = [];
  constructor() { 
    this.dummyStory();
  }
  dummyStory() {
    const item = new Story();
    item.id = 1;
    item.title = 'Story 1';
    item.description = 'Description of story 1';
    item.datetime = new Date();
    this.stories.push(item);
    this.stories.push(item);
    this.stories.push(item);
    this.stories.push(item);
  }
}
