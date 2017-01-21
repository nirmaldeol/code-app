import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';
import { UsersService } from '../../usersModule/usersServices/users.service';



@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {

  postsLoading;
  commentsLoading = true;
  posts = [];
  currentPost;
  comments;
  users = [];
  paginationSize = 10;
  pagedPosts = [];
  
  constructor(private _postsservice: PostsService, private _userservice: UsersService) { }


 

  select(post) {
    this.currentPost = post;
    this._postsservice.getCommentsForPost(this.currentPost.id)
      .subscribe(
      res => {
        this.commentsLoading = false;
        this.comments = res;
      }, err => { console.log(err) })
  }

  private loadPost(filter?) {
    this.currentPost = null;
    this.postsLoading = true;
    this._postsservice.getPosts(filter).subscribe(
      res => {
        this.postsLoading = false;
        this.posts =  res;
        this.pagedPosts =  this.getPostsInPage(1);
        
      }, err => console.log(err));

  }
  private loadUser() {
    this._userservice.getAllUsers().subscribe(res => this.users = res, err => console.log(err));
  }
 private getPostsInPage(page){
   var result = [];
   var startIndex = (page - 1 ) * this.paginationSize;
   var endIndex = page*this.paginationSize;
   for(var i = startIndex; i<endIndex; i++ ){
          result.push(this.posts[i]);        
   }

 return result;
 }
  onPageChanged(page){
    this.pagedPosts = this.getPostsInPage(page);
  }


  ngOnInit() {
    this.loadUser();
    this.loadPost();


  }

}
