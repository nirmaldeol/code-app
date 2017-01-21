import { Component, OnInit,OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  inputs: ['items', 'pageSize'],
  outputs: ['pageChanged']
})
export class PaginationComponent implements OnInit, OnChanges {

  items:any[];
  pageSize;
  currentPage;
  pageChanged = new EventEmitter();
  pages:any[];

  changePage(page){
    this.currentPage = page;
    this.pageChanged.emit(page);
  }

  next(){
    if(this.currentPage == this.pages.length)
        return;
    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
   
  }
 previous(){
 if(this.currentPage == 1)
         return;
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
 }
  ngOnChanges(){
    this.currentPage = 1;
    var pageCount =  this.items.length /this.pageSize;
    this.pages = [];
    for(var i =1; i <= pageCount; i++){
      this.pages.push(i);
    }

  }


  constructor() { }

  ngOnInit() {
  }

}
