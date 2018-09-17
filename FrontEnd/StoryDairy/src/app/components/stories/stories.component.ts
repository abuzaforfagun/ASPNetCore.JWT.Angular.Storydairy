import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoutingService } from './../../services/routing.service';
import { Route, Router } from '@angular/router';
import { StoryService } from '../../services/story.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-story',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoryComponent implements OnInit, OnDestroy {

  search: string;
  private _stories: any[];
    constructor(private authService: AuthService,
    private storyService: StoryService,
    private routingService: RoutingService) { }

  ngOnInit() {
    this._stories = this.storyService.stories;
  }

  ngOnDestroy(): void {
    this.revertStoryListOfStoryService();
  }

  editArticle(item) {
    this.routingService.toStoryFormWithParams(item.id);
  }
  deleteArticle(item: any) {
    this.storyService.delete(item.id);
  }

  clickSearch() {
    if (this._stories.length === 0) {
      this._stories = this.storyService.stories;
    }
    if (this.search) {
      this.storyService.searchStories(this.search);
    } else {
      this.revertStoryListOfStoryService();
    }
  }

  private revertStoryListOfStoryService() {
    this.storyService.stories = this._stories;
  }
}
