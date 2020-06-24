import { Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'DateFireFormat'
  })
  export class DateFirePipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
       ///MMM/dd/yyyy 
       return super.transform(value,"medium");
    }
  }
