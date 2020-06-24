import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hayCupo'
})
export class HayCupoPipe implements PipeTransform {

  transform(value: any): any
  {

    console.log(value);
    if(value < 4 && value != 0)
    {
      return "Desaprobado";
    }
    else
    {
      if(value >= 6)
      {
        return "Promocionado";
      }
      else
      {
        if(value < 6 && value >=4)
        {
          return "Aprobado"
        }
        else
        {
          return "No tiene notas";
        }
      }
    }
  }

}