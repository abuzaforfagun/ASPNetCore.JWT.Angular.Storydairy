import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Story } from '../../models/story';
import { StoryService } from '../../services/story.service';
import { AuthService } from '../../services/auth.service';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-newstory',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {
  story: Story;
  storyId: number;
  message: string;
  formAction = 'Create';
  constructor(private storyService: StoryService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private routingService: RoutingService) {
    this.story = new Story();
  }

  ngOnInit() {
    this.checkAuthentication();
    this.route.params.subscribe(params =>
      this.storyId = params['id']
    );

    if (this.storyId) {
      this.fillUpdateForm();
    }
  }

  private fillUpdateForm() {
    this.formAction = 'Update';
    this.story = this.storyService.get(this.storyId);

    if (!this.story || this.story.userId !== this.authService.getUserId()) {
      this.routingService.toPageNotFound();
    }
  }

  private checkAuthentication() {
    if (!this.authService.getStatus()) {
      this.routingService.toPageNotFound();
    }
  }

  submitStory() {
    if (!this.storyId) {
      this.storyService.add(this.story);
    } else {
      this.storyService.update(this.story);

    }
    this.message = 'Story updated';
  }

  backToList() {
    this.routingService.toStories();
  }
}
