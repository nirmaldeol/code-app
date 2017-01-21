import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersComponent } from './users/users.component';
import {UsersService } from './usersServices/users.service';
import {PrevenUnsavedChanges} from './prevent.unsaved.changes'; 
import { UsersRoutingModule, routedComponents } from './users.routing';
import { NewuserComponent } from './newuser/newuser.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        UsersRoutingModule
        ],
    exports:[],
    declarations: [routedComponents],
    providers: [UsersService, PrevenUnsavedChanges]
})
export class UsersModule {

 }
