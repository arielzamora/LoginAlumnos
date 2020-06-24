import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appPanel]'
})
export class PanelDirective implements OnInit {

  constructor(
    public el: ElementRef,
    public rederer: Renderer2
  ) { }

  ngOnInit() {
    this.rederer.addClass(this.el.nativeElement, 'shadow');
    this.rederer.addClass(this.el.nativeElement, 'p-3');
    this.rederer.addClass(this.el.nativeElement, 'mb-5');
    //this.rederer.setElementClass(this.el.nativeElement, 'bg-white', true);
    this.rederer.addClass(this.el.nativeElement, 'rounded');
  }
}
