import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSexo]'
})
export class SexoDirective implements OnInit {
  sexo: string;
  @Input() set appSexo(sexo: string) {
    this.sexo = sexo;
  }

  constructor(public el: ElementRef<any>,public rederer: Renderer2) { }

  ngOnInit(): void {
    if (this.sexo === 'Hombre') {
      this.rederer.setStyle(this.el.nativeElement, 'background-color', 'Pink');
      this.rederer.setStyle(this.el.nativeElement, 'font-family', 'Verdana');
    } else if (this.sexo === "Mujer") {
      this.rederer.setStyle(this.el.nativeElement, 'background-color', 'LightBlue');
      this.rederer.setStyle(this.el.nativeElement, 'font-family', 'Impact');
    }
    else{
      this.rederer.setStyle(this.el.nativeElement, 'background-color', 'violet');
      this.rederer.setStyle(this.el.nativeElement, 'font-family', 'Lucida Sans');
    }
  }

}
