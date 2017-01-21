import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent} from './posts/posts.component';
import { PostsService} from './posts.service';
import { PostsRoutingModule, routedComponents} from './posts.routing';
import { SharedModule } from '../shared-module/shared.module';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { UsersModule } from '../usersModule/users.module';
import { UsersService} from '../usersModule/usersServices/users.service';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents, PostdetailComponent],
  exports:[PostsComponent],
  providers:[PostsService, UsersService]
})
export class PostsModule { }
