import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SortByUserPipe } from './pipes/sort-by-user.pipe';
import { PaginationComponent } from './pagination/pagination.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpinnerComponent, SortByUserPipe, PaginationComponent],
  exports:[SpinnerComponent,PaginationComponent]
})
export class SharedModule { }
