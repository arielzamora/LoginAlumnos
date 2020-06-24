import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolar'
})
export class DolarPipe implements PipeTransform {

  transform(importePesos: number): any {
    return 'U$S ' + (importePesos / 27.5).toFixed(2);
  }

}
