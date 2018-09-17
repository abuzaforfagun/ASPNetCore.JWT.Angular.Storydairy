import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Story } from '../../models/story';
import { StoryService } from '../../services/story.service';
import { AuthService } from '../../services/auth.service';

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
      this.formAction = 'Update';
      this.story = this.storyService.get(this.storyId);
      if (!this.story) {
        this.router.navigate(['page-not-found']);
        return;
      }
      if (this.story.userId !== this.authService.getUserId()) {
        this.router.navigate(['page-not-found']);
      }
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
    } else {
      this.storyService.update(this.story);

    }
    this.message = 'Story updated';
  }

  backToList() {
    this.router.navigate(['stories']);
  }
}
