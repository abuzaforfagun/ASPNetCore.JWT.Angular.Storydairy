import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-newstory',
  templateUrl: './newstory.component.html',
  styleUrls: ['./newstory.component.css']
})
export class NewstoryComponent implements OnInit {
  story: Story;
  constructor(private storyService: StoryService) {
    this.story = new Story();
   }

  ngOnInit() {
  }

  submitStory() {
    this.storyService.add(this.story);
  }
}
