import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paises-detalle',
  templateUrl: './paises-detalle.component.html',
  styleUrls: ['./paises-detalle.component.scss']
})
export class PaisesDetalleComponent implements OnInit {

  @Output() cerrarPais: EventEmitter<any> = new EventEmitter<any>();
  @Input() pais: any;
  constructor() { }

  ngOnInit(): void {
  }

}
