import { RoutingService } from './../../services/routing.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StoryService } from '../../services/story.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-story',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private authService: AuthService,
    private storyService: StoryService,
    private routingService: RoutingService) { }

  ngOnInit() {
  }

  editArticle(item) {
    this.routingService.toStoryFormWithParams(item.id);
  }
  deleteArticle(item: any) {
    this.storyService.delete(item.id);
  }
}
