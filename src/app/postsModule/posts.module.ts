import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent} from './posts/posts.component';
import {PostsService} from './posts.service';
import {PostsRoutingModule, routedComponents} from './posts.routing';
@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [routedComponents],
  exports:[PostsComponent],
  providers:[PostsService]
})
export class PostsModule { }
