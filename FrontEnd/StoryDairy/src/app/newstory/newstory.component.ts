import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story';
import { StoryService } from '../services/story.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-newstory',
  templateUrl: './newstory.component.html',
  styleUrls: ['./newstory.component.css']
})
export class NewstoryComponent implements OnInit {
  story: Story;
  storyId: number;
  constructor(private storyService: StoryService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute) {
    this.story = new Story();
  }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.storyId = params['id']
    );

    if (this.storyId) {
      this.storyService.get(this.storyId).then(data => {
        this.story = data;
        if (this.story.author !== this.authService.getUserId()) {
          this.router.navigate(['page-not-found']);
        }
        if (this.storyId && !this.story) {
          this.router.navigate(['page-not-found']);
        }
      });

    }

    
  }

  submitStory() {
    if (!this.storyId) {
      this.storyService.add(this.story);
    }
    this.storyService.update(this.story);
  }
}
