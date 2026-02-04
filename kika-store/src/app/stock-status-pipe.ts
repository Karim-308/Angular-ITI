import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',
})
export class StockStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'number') {
      if (value > 0) {
        return 'In Stock';
      } else if (value === 0) {
        return 'Out of Stock';
      }
    }
    return null;
  }

}
