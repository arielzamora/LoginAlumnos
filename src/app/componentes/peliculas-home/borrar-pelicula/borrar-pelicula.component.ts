import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { pelicula } from './../../../model/pelicula';
import { PeliculaService } from './../../../services/pelicula.service';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent implements OnInit {

  @Input() pelicula: any;
  @Output() recargarGrilla: EventEmitter<string>;
  constructor(private peliculaService:PeliculaService) {
    this.recargarGrilla = new EventEmitter<any>();
   }

  ngOnInit(): void {
  }

  darDeBaja(pelicula:pelicula) {
    this.peliculaService.Eliminar(pelicula).
    then( response => {
      this.recargarGrilla.emit();
    },
    error => {
      console.log(error);
    });
  }

}
