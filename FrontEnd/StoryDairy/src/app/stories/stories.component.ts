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

  constructor(private router: Router,
    private storyService: StoryService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  editArticle(item) {
    this.router.navigate([`stories/form/${item.id}`]);
  }
  deleteArticle(item: any) {
    this.storyService.delete(item.id);
  }
}
