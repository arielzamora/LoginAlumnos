import { ListadoComponent } from './listado/listado.component';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-actor-home',
  templateUrl: './actor-home.component.html',
  styleUrls: ['./actor-home.component.scss']
})
export class ActorHomeComponent implements OnInit {

  @ViewChild(ListadoComponent,{static:false})
  private listComponent: ListadoComponent;

  constructor() { 

  }

  ngOnInit() {
  }

  cargarLista() {
    //this.listComponent.cargarLista();
  }

}
