
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCambioColor]'
})
export class CambioColorDirective {

  @Input() colorBase: string;
  @Input('appCambioColor') cantCupos: number;

  ngOnInit()
  {
    this.cambiar(this.cantCupos);
  }

  constructor(private el: ElementRef) { }

  cambiar(cupos: number)
  {
    if(cupos < 20 && cupos > 10)
    {
      this.el.nativeElement.style.backgroundColor = "yellow";
    }
    else
    {
      if(cupos > 20)
      {
        this.el.nativeElement.style.backgroundColor = "lightgreen";
      }
    }
  }

}