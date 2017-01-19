import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import {NewuserComponent} from './newuser/newuser.component';
import {PrevenUnsavedChanges} from './prevent.unsaved.changes';

const routes: Routes = [
  { path: '', component: UsersComponent},
  { path:'new', component:NewuserComponent, canDeactivate:[PrevenUnsavedChanges]},
  { path:':id', component:NewuserComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }

export const routedComponents = [UsersComponent,NewuserComponent];