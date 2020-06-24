import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aumento'
})
export class AumentoPipe implements PipeTransform {

  transform(value: any): any {
    return (value + value * 0.25).toFixed(2);;
  }

}
