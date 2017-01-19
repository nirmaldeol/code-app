import { Component, OnInit } from '@angular/core';
import { UsersService } from '../usersServices/users.service';


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;

  constructor(private _usersservice: UsersService) { }


  delete(user) {
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
      this._usersservice.deleteUser(user.id)
        .subscribe(res => {
          var index = this.users.indexOf(user);
          this.users.splice(index,1);
        }, err => console.log(err));
    }


  }

  ngOnInit() {
    this._usersservice.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

}
