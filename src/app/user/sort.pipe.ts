import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {
    return value.sort((a,b)=>{
      return a.age>b.age ? 1:-1;
    });
  }

}
