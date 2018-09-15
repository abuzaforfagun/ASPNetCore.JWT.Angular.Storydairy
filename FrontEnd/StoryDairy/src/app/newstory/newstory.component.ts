import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Story } from '../models/story';
import { StoryService } from '../services/story.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-newstory',
  templateUrl: './newstory.component.html',
  styleUrls: ['./newstory.component.css']
})
export class NewstoryComponent implements OnInit {
  story: Story;
  storyId: number;
  message: string;
  constructor(private storyService: StoryService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute) {
    this.story = new Story();
  }

  ngOnInit() {
    this.checkAuthentication();
    this.route.params.subscribe(params =>
      this.storyId = params['id']
    );

    if (this.storyId) {
      this.story = this.storyService.get(this.storyId);
      if (this.story.userId !== this.authService.getUserId()) {
        this.router.navigate(['page-not-found']);
      }
    }

    if (this.storyId && !this.story) {
      this.router.navigate(['page-not-found']);
    }
  }

  private checkAuthentication() {
    this.authService.checkAuthentication().then(data => {
      if (!data) {
        this.router.navigate(['page-not-found']);

      }
    });
  }

  submitStory() {
    if (!this.storyId) {
      this.storyService.add(this.story);
    }
    this.storyService.update(this.story);
    this.message = 'Story updated';
  }

  backToList() {
    this.router.navigate(['stories']);
  }
}
