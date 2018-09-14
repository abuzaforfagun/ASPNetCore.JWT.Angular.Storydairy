import { StoryService } from './../services/story.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private router: Router,
    private storyService: StoryService) { }

  ngOnInit() {
  }

  editArticle() {
    this.router.navigate(['story/new/1']);
  }
  deleteArticle(item: any) {
    this.storyService.delete(item.id);
  }
}
