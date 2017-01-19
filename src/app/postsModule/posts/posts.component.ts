import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _postsservice  : PostsService) { }

  ngOnInit() {
  }

}
