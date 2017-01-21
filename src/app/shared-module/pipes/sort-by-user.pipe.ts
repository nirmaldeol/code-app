import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByUser'
})
export class SortByUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
