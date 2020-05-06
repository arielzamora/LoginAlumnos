import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Output() cerrarPeli: EventEmitter<any> = new EventEmitter<any>();
  @Input() pelicula: any;
  constructor() { }

  ngOnInit(): void {
  }

}
