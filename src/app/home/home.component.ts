import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private techs = [
    {name:"AngularJs-2", version:"2.3.1"},
    {name:"Font-awesome", version: "4.7.0"},
    {name:"Rxjs", version:"5.0.1"},
    {name:"Typescript", version: "2.0.3"},
    {name:"Angular-cli", version:"1.0.0-beta.24"},
    {name:"Bootstrap", version:"3.3.7" },
    {name:"Angular-router", version: "^3.3.1"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
