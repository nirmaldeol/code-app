import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserFormValidator } from '../../validators/userformvalidator';
import { UsersService } from '../usersServices/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'new-user',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  title: string;

  newUserForm: FormGroup;

  user = new User();

  id;

  constructor(
    private _fb: FormBuilder,
    private _userService: UsersService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.newUserForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', UserFormValidator.emailPattern],
      phone: [],
      address: this._fb.group({
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      })
    });
  }


  save() {
    if (this.id) {
      this._userService.editUser(this.newUserForm.value, this.id)
        .subscribe(res => {
          console.log(res);
          this.newUserForm.reset();
          this._router.navigate(['users']);
        });
    } else {
      this._userService.createUser(this.newUserForm.value)
        .subscribe(res => {
          console.log(res);
          this.newUserForm.reset();
          this._router.navigate(['users']);
        });
    }
  }



  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
      this.id = params["id"];
    })


    this.title = this.id ? "Edit User " : "New User";
    if (!this.id) {
      return;
    } else {
      this._userService.getOneUser(this.id)
        .subscribe(
        user => this.user = user, response => {
          if (response.status == 404) {
            this._router.navigate(["NotFound"]);
          }
        });
    }


  }

}
