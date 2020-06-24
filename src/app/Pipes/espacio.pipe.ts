import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espacio'
})
export class EspacioPipe implements PipeTransform {

  transform(espacio: number): any {
    return espacio + ' MB';
  }

}
