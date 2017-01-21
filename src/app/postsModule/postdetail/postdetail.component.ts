import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'post-detail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
  inputs:['post','comments','commentsLoading']
})
export class PostdetailComponent implements OnInit {

 post;
 comments;
 commentsLoading;
 imageUrl = "http://lorempixel.com/80/80/people/?rendom=";

  constructor() { }

  ngOnInit() {
  }

}
