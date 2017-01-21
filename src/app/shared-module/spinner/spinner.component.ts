import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  inputs:['visible']
})
export class SpinnerComponent implements OnInit {

  visible;
  constructor() { }

  ngOnInit() {
  }

}
