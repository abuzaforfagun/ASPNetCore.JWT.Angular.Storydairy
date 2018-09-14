import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newstory',
  templateUrl: './newstory.component.html',
  styleUrls: ['./newstory.component.css']
})
export class NewstoryComponent implements OnInit {

  title: string;
  body: string;
  datetime: string;

  constructor() { }

  ngOnInit() {
  }

  submitStory() {
    console.log();
  }
}
