
import { ListaComponent } from './lista/lista.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-peliculas-home',
  templateUrl: './peliculas-home.component.html',
  styleUrls: ['./peliculas-home.component.scss']
})
export class PeliculasHomeComponent implements OnInit {

  @ViewChild(ListaComponent,{static:false})
  private listComponent: ListaComponent;

  constructor() { 

  }

  ngOnInit() {
  }

  cargarLista() {
    this.listComponent.cargarLista();
  }

}
