import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmpty'
})
export class IsEmptyPipe implements PipeTransform {

  transform(value: unknown, flag = true): boolean {
    const isEmpty =  value === null || value === undefined
    if (flag) {
      return isEmpty
    } else {
      return !isEmpty
    }
  }

}
