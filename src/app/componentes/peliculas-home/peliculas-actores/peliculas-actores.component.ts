
import { Component, OnInit, Input} from '@angular/core';
import { actor } from './../../../model/actor';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-peliculas-actores',
  templateUrl: './peliculas-actores.component.html',
  styleUrls: ['./peliculas-actores.component.css']
})
export class PeliculasActoresComponent implements OnInit {

  @Input() listaActorxPeli: actor[];
  listaActor: actor[];
  @Input() title: string;


  constructor(public domSanitizer: DomSanitizer) {
    this.cargarLista();
  }

  ngOnInit() {
  }


  public cargarLista() {
   
          this.listaActor = this.listaActorxPeli;
  }
  }


