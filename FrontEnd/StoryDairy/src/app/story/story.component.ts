import { AuthService } from './../services/auth.service';
import { StoryService } from './../services/story.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  search: string;
  private _storis: any[];
  constructor(private router: Router,
    private storyService: StoryService,
    private authService: AuthService) { }

  ngOnInit() {
    this._storis = this.storyService.stories;
  }

  editArticle(item) {
    this.router.navigate([`stories/form/${item.id}`]);
  }
  deleteArticle(item: any) {
    this.storyService.delete(item.id);
  }

  clickSearch() {
    if (this._storis.length === 0) {
      this._storis = this.storyService.stories;
    }
    if (this.search) {
      this.storyService.searchStories(this.search);
    } else {
      this.storyService.stories = this._storis;
    }
  }
}
