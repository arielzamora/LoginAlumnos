import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,args: any): unknown {
    if(args ===''||args.length < 3)return value;
    const resultFilter=[]
    for(const filter of value){
      if(filter.descripcion.toLowerCase().indexOf(args.toLowerCase())>-1)
      {
        resultFilter.push(filter);
      }
    
    }
    return resultFilter;
  }

}
